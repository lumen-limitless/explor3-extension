```javascript
let tweets = [];

document.getElementById('startButton').addEventListener('click', startScraping);
document.getElementById('optionsButton').addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'tweetsScraped') {
        tweets = request.tweets;
        displayTweets();
    }
});

function startScraping() {
    chrome.runtime.sendMessage({message: 'scrapeTweets'});
}

function displayTweets() {
    const tweetContainer = document.getElementById('tweetContainer');
    tweetContainer.innerHTML = '';
    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.textContent = tweet.text;
        tweetContainer.appendChild(tweetElement);
    });
}
```