```javascript
let startButton = document.getElementById('startButton');
let statusText = document.getElementById('statusText');

// Load the scraping status from storage
chrome.storage.sync.get('scrapingStatus', function(data) {
    if (data.scrapingStatus) {
        statusText.textContent = 'Scraping in progress...';
    } else {
        statusText.textContent = 'Idle';
    }
});

// Start scraping when the button is clicked
startButton.onclick = function() {
    chrome.runtime.sendMessage({action: "scrapeTweets"}, function(response) {
        if (response.success) {
            statusText.textContent = 'Scraping in progress...';
        } else {
            statusText.textContent = 'Error: ' + response.error;
        }
    });
};

// Update the status text when a status update message is received
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'updateStatus') {
        statusText.textContent = request.status;
    }
});
```