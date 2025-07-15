// Generic search/fill terms 
if (!window.weshetFillerSearchTerms) {
    window.weshetFillerSearchTerms = [
        "test",
        "example",
        "sample",
        "find user",
        "lookup order",
        "search123",
        "query data",
        "fill form",
        "demo",
        "random keyword",
        "customer info",
        "order id",
        "address lookup",
        "user profile",
        "reference number",
        "employee",
        "employee name",
        "employee number",
        "employee code",
        "employee details",
        "employee information",
        "employee record",
        "payroll",
        "finance",
        "crm",
        "supply chain",
        "hr",
        "it",
        "marketing",
        "sales"
    ];
}
if (!window.weshetFillerRandomSearchTerm) {
    window.weshetFillerRandomSearchTerm = function() {
        var arr = window.weshetFillerSearchTerms;
        return arr[Math.floor(Math.random() * arr.length)];
    }
}
var searchTerms = window.weshetFillerSearchTerms;
var randomSearchTerm = window.weshetFillerRandomSearchTerm;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Wait for a message from the popup script
    if(message.type == "FILL_FORM") {
        const data = message.data;
        fillForm(data);
    }
})

function randomPhone() {
    const prefix = Math.random() < 0.5 ? "+251 9" : "+251 7";
    return prefix + Math.floor(10000000 + Math.random() * 90000000);
}

function fillForm(data) {
    const findAndFill = (keywords, value, multiFill = false) => {
        const allInputs = document.querySelectorAll('input, textarea, select, tags');
        let filledCount = 0;

        for (const input of allInputs) {
            const name = (input.name || '').toLowerCase();
            const id = (input.id || '').toLowerCase();
            const placeholder = (input.placeholder || '').toLowerCase();
            const ariaLabel = (input.getAttribute('aria-label') || '').toLowerCase();

            for (const keyword of keywords) {
                if (
                    name.includes(keyword) ||
                    id.includes(keyword) ||
                    placeholder.includes(keyword) ||
                    ariaLabel.includes(keyword)
                ) {
                    if (input.offsetParent !== null && input.value == '') {
                        let fillValue = value;
                        if (multiFill && value === null && ['phone','mobile','cell','emergency_contact_number','phone_number'].includes(keyword)) {
                            fillValue = randomPhone();
                        }
                        // Logic for <select> elements
                        if (input.tagName.toLowerCase() === 'select') {
                            let optionToSelect = null;
                            const options = Array.from(input.options).filter(opt => !opt.disabled && opt.value !== '');
                            if (fillValue == null || !options.some(opt => opt.value == fillValue)) {
                                // Try to pick a random option
                                if (options.length > 0) {
                                    // Check if all options are numbers
                                    const allNumeric = options.every(opt => /^\d+$/.test(opt.value));
                                    if (allNumeric) {
                                        // Pick a random numeric option
                                        const randomIdx = Math.floor(Math.random() * options.length);
                                        optionToSelect = options[randomIdx].value;
                                    } else {
                                        // Pick any random option
                                        const randomIdx = Math.floor(Math.random() * options.length);
                                        optionToSelect = options[randomIdx].value;
                                    }
                                }
                            } else {
                                optionToSelect = fillValue;
                            }
                            if (optionToSelect !== null) {
                                input.value = optionToSelect;
                                input.dispatchEvent(new Event('input', { bubbles: true }));
                                input.dispatchEvent(new Event('change', { bubbles: true }));
                                filledCount++;
                                if (!multiFill) return;
                                break;
                            }
                        } else {
                            input.value = fillValue;
                            input.dispatchEvent(new Event('input', { bubbles: true }));
                            input.dispatchEvent(new Event('change', { bubbles: true }));
                            filledCount++;
                            if (!multiFill) return; // stop if not multi-fill
                            break;
                        }
                    }
                }
            }
        }

        // if (filledCount === 0) {
            // console.log(`No matching field found for value: ${value}`);
        // }

    };

    // Mapping of data fields to keywords
    findAndFill(['title'], data.title);
    findAndFill(['emergency_contact_name', 'full_name', 'full name', 'fullName'], data.fullName);
    findAndFill(['first', 'first_name', 'fname', 'given-name'], data.firstName);
    findAndFill(['first_name_amharic', 'first_amh', 'fname_amh', 'given_name_amh'], data.firstNameAmh);
    findAndFill(['middle', 'middle_name', 'm_name', 'mname'], data.middleName);
    findAndFill(['middle_name_amharic', 'middle_amh', 'm_name_amh', 'mname_amh'], data.middleNameAmh);
    findAndFill(['last', 'last_name', 'lname', 'surname', 'family-name'], data.lastName);
    findAndFill(['last_name_amharic', 'last_amh', 'lname_amh', 'surname_amh', 'family_name_amh'], data.lastNameAmh);
    findAndFill(['full_name_amharic', 'full_amh', 'fullname_amh'], data.fullNameAmh);
    findAndFill(['sex', 'gender'], data.gender);
    findAndFill(['dob', 'birth_date', 'date_of_birth'], data.birthDate);
    findAndFill(['email', 'e_mail', 'mail'], data.email);
    
    findAndFill(['address', 'street', 'address_line_1', 'address_line_2', 'current_address', 'addr'], data.address);

    // Multi-fill for fields like phone number
    findAndFill(['phone', 'mobile', 'cell', 'emergency_contact_number', 'phone_number'], null, true);

    findAndFill(['country', 'nationality'], data.nationality);
    findAndFill(['region', 'state'], data.region);
    findAndFill(['city', 'town'], data.city);
    findAndFill(['sub_city', 'subcity'], data.subCity);
    findAndFill(['woreda', 'woreda_no', 'woreda_number'], data.woreda);
    findAndFill(['house', 'house_no', 'house_number'], data.houseNumber);
    findAndFill(['zip', 'postal_code', 'postcode'], data.zip);
    findAndFill(['location', 'location_name', 'branch', 'branch_name'], data.location);

    findAndFill(['contract_type', 'contract'], data.contractType);
    findAndFill(['issue_date', 'date_of_issue', 'issued'], data.issueDate);
    findAndFill(['expiry_date', 'date_of_expiry', 'expired'], data.expiryDate);

    findAndFill(['identity_type', 'id_type', 'identity', 'identity_type_id'], data.identityType);
    findAndFill(['identity_number', 'id_number'], data.identityNumber);
    findAndFill(['bank_name', 'bank'], data.bankName);
    findAndFill(['bank_account', 'account_number'], data.bankAccountNumber);

    // marital status
    findAndFill(['marital_status', 'marital_status_id', 'marital_status_name'], data.maritalStatus);

    // Generic search/fill/query/keyword fields
    findAndFill(['search', 'fill', 'query', 'keyword'], randomSearchTerm());

    findAndFill(['language', 'language_id', 'language_name', 'lang'], data.language);
    
}