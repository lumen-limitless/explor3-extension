```javascript
// Options.js
// This file is responsible for handling the options page of the extension

// Get DOM elements
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const usernameInput = document.getElementById('usernameInput');

// Event listeners for start and stop buttons
startButton.addEventListener('click', startScraping);
stopButton.addEventListener('click', stopScraping);

// Function to start scraping
function startScraping() {
    let username = usernameInput.value;
    if (username) {
        // Send message to background.js to start scraping
        chrome.runtime.sendMessage({type: 'START_SCRAPING', username: username});
    } else {
        alert('Please enter a Twitter username.');
    }
}

// Function to stop scraping
function stopScraping() {
    // Send message to background.js to stop scraping
    chrome.runtime.sendMessage({type: 'STOP_SCRAPING'});
}
```