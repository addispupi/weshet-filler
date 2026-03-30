(function () {
    'use strict';
    if (window.__weshetFillerContentInit) return;
    window.__weshetFillerContentInit = true;

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

function clearFormFields() {
    const skipInputTypes = new Set(['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'hidden', 'date']);
    const elements = document.querySelectorAll('input, textarea, select, tags');
    for (const el of elements) {
        if (el.offsetParent === null) continue;
        const tag = el.tagName.toLowerCase();
        if (tag === 'textarea') {
            el.value = '';
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
            continue;
        }
        if (tag === 'select') {
            const options = Array.from(el.options);
            const emptyOpt = options.find(o => o.value === '' && !o.disabled);
            if (emptyOpt) {
                el.value = '';
            } else {
                const first = options.find(o => !o.disabled);
                if (first) el.selectedIndex = options.indexOf(first);
            }
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
            continue;
        }
        if (tag === 'input') {
            const t = (el.type || '').toLowerCase();
            if (skipInputTypes.has(t)) continue;
            el.value = '';
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
            continue;
        }
        if (tag === 'tags' && 'value' in el) {
            el.value = '';
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "FILL_FORM") {
        const data = message.data;
        fillForm(data);
    } else if (message.type == "RESET_FORM") {
        clearFormFields();
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

function dispatchInputEvents(el) {
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
}

function randomPasswordForFill(length = 12) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
    let s = '';
    for (let i = 0; i < length; i++) {
        s += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return s;
}

/** Uses profile email when present; otherwise a plausible @weshet.com address from names (avoids literal "undefined"). */
function emailForFill(data) {
    const raw = data.email;
    if (raw != null && String(raw).trim() !== '') {
        return String(raw).trim();
    }
    const fn = (data.firstName || 'user').toString().toLowerCase().replace(/[^a-z0-9]/g, '') || 'user';
    const ln = (data.lastName || 'test').toString().toLowerCase().replace(/[^a-z0-9]/g, '') || 'test';
    const n = Math.floor(Math.random() * 900000) + 100000;
    return `${fn}.${ln}.${n}@weshet.com`;
}

function randomHexColor() {
    return '#' + [...Array(6)].map(() => '0123456789abcdef'.charAt(Math.floor(Math.random() * 16))).join('');
}

function randomDateValue() {
    const start = new Date(1990, 0, 1);
    const end = new Date(2005, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return d.toISOString().split('T')[0];
}

function randomDateTimeLocalValue() {
    const start = new Date(2015, 0, 1);
    const end = new Date(2024, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fillSelectRandomOption(select) {
    const options = Array.from(select.options).filter((opt) => !opt.disabled && opt.value !== '');
    if (options.length === 0) return;
    const randomIdx = Math.floor(Math.random() * options.length);
    select.value = options[randomIdx].value;
    dispatchInputEvents(select);
}

/**
 * Fills any still-empty controls that did not match keyword mapping (odd field names, custom ids).
 * Runs last so mapped fields take precedence.
 */
function fillRemainingUnmappedFields(data) {
    const nextGeneric = (() => {
        const pool = [
            data.firstName,
            data.lastName,
            data.middleName,
            data.city,
            data.region,
            data.zip,
            data.woreda,
            data.houseNumber,
            data.location,
            data.nationality,
            String(Math.floor(Math.random() * 90000) + 10000),
        ].filter((x) => x != null && x !== '');
        if (pool.length === 0) pool.push('test');
        let k = 0;
        return () => String(pool[k++ % pool.length]);
    })();

    const all = document.querySelectorAll('input, textarea, select, tags');
    for (const el of all) {
        if (el.offsetParent === null) continue;
        if (el.disabled || el.readOnly) continue;

        const tag = el.tagName.toLowerCase();

        if (tag === 'select') {
            if (el.value !== '') continue;
            fillSelectRandomOption(el);
            continue;
        }

        if (tag === 'textarea') {
            if ((el.value || '').trim() !== '') continue;
            el.value = randomParagraph();
            dispatchInputEvents(el);
            continue;
        }

        if (tag === 'tags' && 'value' in el) {
            if ((el.value || '').trim() !== '') continue;
            el.value = nextGeneric();
            dispatchInputEvents(el);
            continue;
        }

        if (tag !== 'input') continue;

        const t = (el.type || 'text').toLowerCase();
        if (['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'hidden', 'image'].includes(t)) continue;
        if ((el.value || '').trim() !== '') continue;

        switch (t) {
            case 'email':
                el.value = emailForFill(data);
                break;
            case 'tel':
                el.value = data.phone || randomPhone();
                break;
            case 'url':
                el.value = data.website || 'https://example.com';
                break;
            case 'password':
                el.value = data.password != null ? data.password : randomPasswordForFill();
                break;
            case 'number':
            case 'range': {
                let min = el.hasAttribute('min') && el.min !== '' ? Number(el.min) : NaN;
                let max = el.hasAttribute('max') && el.max !== '' ? Number(el.max) : NaN;
                if (Number.isNaN(min)) min = 0;
                if (Number.isNaN(max)) max = min + 1000;
                let n = min + Math.random() * (max - min);
                const stepAttr = el.hasAttribute('step') && el.step !== '' ? Number(el.step) : NaN;
                if (!Number.isNaN(stepAttr) && stepAttr > 0) {
                    n = Math.round(n / stepAttr) * stepAttr;
                } else if (t === 'range') {
                    n = Math.round(n);
                } else {
                    n = Math.round(n * 100) / 100;
                }
                el.value = String(n);
                break;
            }
            case 'date':
                el.value = data.birthDate || randomDateValue();
                break;
            case 'datetime-local':
                el.value = randomDateTimeLocalValue();
                break;
            case 'time': {
                const h = String(Math.floor(Math.random() * 12) + 8).padStart(2, '0');
                const m = String(Math.floor(Math.random() * 60)).padStart(2, '0');
                el.value = `${h}:${m}`;
                break;
            }
            case 'month':
                el.value = `${1990 + Math.floor(Math.random() * 20)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}`;
                break;
            case 'week':
                el.value = `${2000 + Math.floor(Math.random() * 20)}-W${String(Math.floor(Math.random() * 52) + 1).padStart(2, '0')}`;
                break;
            case 'color':
                el.value = randomHexColor();
                break;
            default:
                el.value = nextGeneric();
        }
        dispatchInputEvents(el);
    }
}

const websiteFieldKeywords = ['website', 'site_url', 'web_url', 'homepage', 'company_website', 'domain', 'url'];

function matchesWebsiteKeywords(input) {
    const name = (input.name || '').toLowerCase();
    const id = (input.id || '').toLowerCase();
    const placeholder = (input.placeholder || '').toLowerCase();
    const ariaLabel = (input.getAttribute('aria-label') || '').toLowerCase();
    return websiteFieldKeywords.some(
        (kw) =>
            name.includes(kw) ||
            id.includes(kw) ||
            placeholder.includes(kw) ||
            ariaLabel.includes(kw)
    );
}

/** Fills every visible website/url field in document order, using the next URL from the profile pool each time. */
function fillWebsiteFieldsSequential(data) {
    const pool =
        Array.isArray(data.websites) && data.websites.length > 0
            ? data.websites
            : data.website
              ? [data.website]
              : ['https://example.com'];
    let idx = 0;
    const nextUrl = () => pool[idx++ % pool.length];

    const skipInputTypes = new Set([
        'button',
        'submit',
        'reset',
        'checkbox',
        'radio',
        'file',
        'hidden',
        'password',
        'date',
    ]);
    const allInputs = document.querySelectorAll('input, textarea, select, tags');
    for (const input of allInputs) {
        if (input.offsetParent === null || input.value !== '') continue;
        const tag = input.tagName.toLowerCase();
        if (tag === 'select') continue;
        if (tag === 'textarea') {
            if (!matchesWebsiteKeywords(input)) continue;
            input.value = nextUrl();
            dispatchInputEvents(input);
            continue;
        }
        if (tag === 'tags' && 'value' in input) {
            if (!matchesWebsiteKeywords(input)) continue;
            input.value = nextUrl();
            dispatchInputEvents(input);
            continue;
        }
        if (tag !== 'input') continue;
        const t = (input.type || '').toLowerCase();
        if (skipInputTypes.has(t)) continue;
        const isUrlType = t === 'url';
        if (!isUrlType && !matchesWebsiteKeywords(input)) continue;
        input.value = nextUrl();
        dispatchInputEvents(input);
    }
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
    findAndFill(['emergency_contact_name', 'full_name', 'full name', 'fullName' ], data.fullName);
    findAndFill(['first', 'first_name', 'fname', 'given-name', 'sendName', 'send_name', 'YourName', 'your_name', 'yourName'], data.firstName);
    findAndFill(['first_name_amharic', 'first_amh', 'fname_amh', 'given_name_amh'], data.firstNameAmh);
    findAndFill(['middle', 'middle_name', 'm_name', 'mname'], data.middleName);
    findAndFill(['middle_name_amharic', 'middle_amh', 'm_name_amh', 'mname_amh'], data.middleNameAmh);
    findAndFill(['last', 'last_name', 'lname', 'surname', 'family-name'], data.lastName);
    findAndFill(['last_name_amharic', 'last_amh', 'lname_amh', 'surname_amh', 'family_name_amh'], data.lastNameAmh);
    findAndFill(['full_name_amharic', 'full_amh', 'fullname_amh', 'sendName_amh', 'sendNameAmh', 'your_name_amharic', 'sendNameAmharic', 'yourNameAmh'], data.fullNameAmh);
    findAndFill(['sex', 'gender'], data.gender);
    findAndFill(['dob', 'birth_date', 'date_of_birth'], data.birthDate);
    findAndFill(['email', 'e_mail', 'mail'], data.email);

    // Password: same value for new + confirm fields; avoid keyword "pass" (passport)
    findAndFill(
        ['password', 'passwd', 'pwd', 'new_password', 'confirm_password', 'password_confirmation', 'repassword', 'user_password'],
        data.password,
        true
    );
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    for (const input of passwordInputs) {
        if (input.offsetParent !== null && input.value === '') {
            input.value = data.password;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    fillWebsiteFieldsSequential(data);

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

    fillRemainingUnmappedFields(data);
}

})();
