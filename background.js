```javascript
import { sendTweetsToApi } from './api.js';

let tweets = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'scrapeTweets') {
    scrapeTweets();
  } else if (request.message === 'saveOptions') {
    chrome.storage.sync.set({ options: request.data }, () => {
      console.log('Options saved');
    });
  }
});

function scrapeTweets() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js']
    }, (injectionResults) => {
      for (let i = 0; i < injectionResults.length; i++) {
        let result = injectionResults[i].result;
        if (result) {
          tweets = result;
          sendTweetsToApi(tweets);
          chrome.runtime.sendMessage({ message: 'tweetsScraped', data: tweets });
        }
      }
    });
  });
}
```