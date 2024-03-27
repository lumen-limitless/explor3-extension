```javascript
let apiUrl = '';
let scrapingStatus = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ apiUrl: '', scrapingStatus: false });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'scrapeTweets') {
    scrapingStatus = true;
    fetchTweets();
  } else if (request.message === 'sendData') {
    sendToAPI(request.data);
  }
});

function fetchTweets() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js']
    });
  });
}

function sendToAPI(data) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    scrapingStatus = false;
    chrome.runtime.sendMessage({ message: 'updateStatus', status: 'Data sent successfully' });
  })
  .catch((error) => {
    scrapingStatus = false;
    chrome.runtime.sendMessage({ message: 'updateStatus', status: 'Error sending data' });
  });
}

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync' && changes.apiUrl) {
    apiUrl = changes.apiUrl.newValue;
  }
});
```