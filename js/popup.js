// Runs in the popup window of the browser extension

// import dummy data from the data.js file
import {DummyData} from '../js/data.js ';

// Get the button element from the popup HTML
const fillFormBtn = document.getElementById('fill-form-btn');

// Add a click event listener to the button
fillFormBtn.addEventListener('click', async () => {
    // Get the active tab in the current window
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    // Select random profile data from DummyData
    const profiles = DummyData.profiles;
    const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

    // Execute the content script in the active tab
    // ....

    // Send a message to the content script to fill the form
    chrome.tabs.sendMessage(activeTab.id, {action: 'fillForm', data: DummyData.profiles[0]}, (response) => {
        if (response && response.status === 'success') {
            console.log('Form filled successfully');
        } else {
            console.error('Failed to fill form:', response);
        }
    });
});
