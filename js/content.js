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
    }
}