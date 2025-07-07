chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Wait for a message from the popup script
    if(message.type == "FILL_FORM") {
        const data = message.data;
        fillForm(data);
    }
})

function fillForm(data) {
    const findAndFill = (keywords, value) => {
        const allInputs = document.querySelectorAll('input, textarea, select');
        for (const input of allInputs) {
            const name = (input.name || '').toLowerCase();
            const id = (input.id || '').toLowerCase();
            const placeholder = (input.placeholder || '').toLowerCase();
            const ariaLabel = (input.getAttribute('aria-label') || '').toLowerCase();

            for(const keyword of keywords) {
                if(name.includes(keyword) || id.includes(keyword) || placeholder.includes(keyword) || ariaLabel.includes(keyword)) {
                    if(input.offsetParent !== null && input.value == ''){
                        input.value = value;
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                        console.log(`Filled ${input.name || input.id || 'input'} with value: ${value}`);   // ----
                        return;
                    }
                }
            }
        }
    };

    // Mapping of data fields to keywords
    findAndFill(['title'], data.title);
    findAndFill(['first', 'first_name', 'fname','name', 'given-name'], data.firstName);
    findAndFill(['middle', 'middle_name', 'm_name', 'mname'], data.middleName);
    findAndFill(['last', 'last_name', 'lname', 'surname', 'family-name'], data.lastName);
    findAndFill(['sex', 'gender'], data.gender);
    findAndFill(['dob', 'birth_date', 'date_of_birth'], data.birthDate);
    findAndFill(['email', 'e_mail', 'mail'], data.email);
    findAndFill(['phone', 'mobile', 'cell', 'phone_number'], data.phone);
    findAndFill(['address', 'addr'], data.address);
    findAndFill(['country', 'nationality'], data.nationality);
    findAndFill(['region', 'state'], data.region);
    findAndFill(['city', 'town'], data.city);
    findAndFill(['sub_city', 'subcity'], data.subCity);
    findAndFill(['woreda', 'woreda_no', 'woreda_number'], data.woreda);
    findAndFill(['house', 'house_no', 'house_number'], data.houseNumber);
    findAndFill(['zip', 'postal_code', 'postcode'], data.zip);

    findAndFill(['contract_type', 'contract'], data.contractType);
    findAndFill(['issue_date', 'date_of_issue', 'issued'], data.issueDate);
    findAndFill(['expiry_date', 'date_of_expiry', 'expired'], data.expiryDate);

    findAndFill(['identity_type', 'id_type'], data.identityType);
    findAndFill(['identity_number', 'id_number'], data.identityNumber);
    findAndFill(['bank_name', 'bank'], data.bankName);
    findAndFill(['bank_account', 'account_number'], data.bankAccountNumber);

    console.log("Weshet Filler: Form filled attempt complete");
}