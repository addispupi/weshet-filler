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

function randomParagraph() {
    const sentences = [
        "This is a sample description for testing purposes.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Please review the provided information carefully.",
        "This field is filled automatically by Weshet Filler.",
        "The quick brown fox jumps over the lazy dog.",
        "Contact us for more details regarding this entry.",
        "This is a randomly generated message for demonstration.",
        "Thank you for using the form filler extension.",
        "All data entered here is for sample purposes only.",
        "Feel free to edit this message as needed."
    ];
    let paragraph = '';
    const numSentences = 2 + Math.floor(Math.random() * 2); // 2-3 sentences
    for (let i = 0; i < numSentences; i++) {
        paragraph += sentences[Math.floor(Math.random() * sentences.length)] + ' ';
    }
    return paragraph.trim();
}

function randomAmharicParagraph() {
    const sentences = [
        "ይህ ለሙከራ የተዘጋጀ መግለጫ ነው።",
        "ሎሬም ኢፕሰም ዶሎር ሲት አሜት።",
        "እባክዎ የቀረበውን መረጃ በጥንቃቄ ይመልከቱ።",
        "ይህ ቦታ በውሸት መሙሊያ በራስ-ሰር ተሞልቷል።",
        "ፈጣኑ እና የመጀመሪያው ቡና አቦል ሲሆን የሚቀጥለው በረካ ከዛም መጨረሻው በረካ ይባላል።",
        "ለበለጠ መረጃ እባክዎን ያግኙን።",
        "ይህ መልእክት ለማሳያ የተፈጠረ ነው።",
        "በዚህ ቅጽ ላይ የተሞሉት መረጃዎች ለምሳሌ ብቻ ናቸው።",
        "እባክዎ ይህን መልእክት እንደ ፈለጉት ይለውጡት።",
        "ስለ ራስዎ የተሞሉትን መረጃዎች ያስተካክሉ።"
    ];
    let paragraph = '';
    const numSentences = 2 + Math.floor(Math.random() * 2); // 2-3 sentences
    for (let i = 0; i < numSentences; i++) {
        paragraph += sentences[Math.floor(Math.random() * sentences.length)] + ' ';
    }
    return paragraph.trim();
}

function randomSubject() {
    const subjects = [
        "Request for Information",
        "Application Submission",
        "Feedback on Service",
        "General Inquiry",
        "Account Update",
        "Support Needed",
        "Form Submission",
        "New Registration",
        "Profile Update",
        "Service Request",
        "Document Upload",
        "Contact Us",
        "Quick Question",
        "Follow-up Needed",
        "Important Notice"
    ];
    return subjects[Math.floor(Math.random() * subjects.length)];
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
                            // Skip if the input type is 'date'
                            if (input.type && input.type.toLowerCase() === 'date') {
                                break;
                            }
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
    findAndFill(['emergency_contact_name', 'name', 'full_name', 'full name', 'fullName', 'bookingDipositBy', 'diposit by', 'diposit_by', 'paid_by', 'paidBy' ], data.fullName);
    findAndFill(['first', 'first_name', 'fname', 'given-name', 'sendName', 'send_name', 'YourName', 'your_name', 'yourName'], data.firstName);
    findAndFill(['first_name_amharic', 'first_amh', 'fname_amh', 'given_name_amh'], data.firstNameAmh);
    findAndFill(['middle', 'middle_name', 'm_name', 'mname'], data.middleName);
    findAndFill(['middle_name_amharic', 'middle_amh', 'm_name_amh', 'mname_amh'], data.middleNameAmh);
    findAndFill(['last', 'last_name', 'lname', 'surname', 'family-name'], data.lastName);
    findAndFill(['last_name_amharic', 'last_amh', 'lname_amh', 'surname_amh', 'family_name_amh'], data.lastNameAmh);
    findAndFill(['full_name_amharic', 'full_amh', 'fullname_amh', 'sendName_amh', 'sendNameAmh', 'your_name_amharic', 'sendNameAmharic', 'yourNameAmh'], data.fullNameAmh);
    findAndFill(['sex', 'gender'], data.gender);
    findAndFill(['dob', 'birth_date', 'date_of_birth'], data.birthDate);

    // Fill date fields with a random dates
    findAndFill(['date', 'registration_date', 'payment_date', 'start_date', 'schedule_start_date'], data.reserveStartDate);
    findAndFill(['reserve_end_date', 'end_date', 'end_date_of_reserve'], data.reserveEndDate);
    
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
    findAndFill(['bank_account', 'account_number', 'account_name', 'bank'], data.bankAccountNumber);
    findAndFill(['transaction_number', 'transaction_id', 'transaction_no', 'transaction_code', 'transaction number'], data.transactionNumber);

    // marital status
    findAndFill(['marital_status', 'marital_status_id', 'marital_status_name'], data.maritalStatus);

    // Generic search/fill/query/keyword fields
    findAndFill(['search', 'fill', 'query', 'keyword', 'navbar-search'], randomSearchTerm());

    findAndFill(['language', 'language_id', 'language_name', 'lang'], data.language);
    
    // fill any empty <textarea> fields with a random paragraph
    const allTextareas = document.querySelectorAll('textarea');
    for (const textarea of allTextareas) {
        if (textarea.offsetParent !== null && textarea.value === '') {
            const name = (textarea.name || '').toLowerCase();
            const id = (textarea.id || '').toLowerCase();
            const placeholder = (textarea.placeholder || '').toLowerCase();
            if (name.includes('amh') || name.includes('amharic') || id.includes('amh') || id.includes('amharic') || placeholder.includes('amh') || placeholder.includes('amharic')) {
                textarea.value = randomAmharicParagraph();
            } else {
                textarea.value = randomParagraph();
            }
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            textarea.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    // Subject message filler
    findAndFill(['subject', 'subject_message', 'sendMessage', 'send_message'], randomSubject());
}