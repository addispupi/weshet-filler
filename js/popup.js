// import dummy data
import {DummyData} from './data.js';

// Get the button element from the popup HTML
const fillFormBtn = document.getElementById('fill-form-btn');
const resetFormBtn = document.getElementById('reset-form-btn');

function injectContentAndSend(tabId, message) {
    chrome.scripting.executeScript(
        {
            target: {tabId},
            files: ['./js/content.js']
        },
        () => {
            chrome.tabs.sendMessage(tabId, message);
        }
    );
}

// Add a click event listener to the button
fillFormBtn.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    const profiles = DummyData.profiles;
    const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

    injectContentAndSend(tab.id, {
        type: "FILL_FORM",
        data: randomProfile
    });
});

resetFormBtn.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    injectContentAndSend(tab.id, {type: "RESET_FORM"});
});
