```javascript
let tweets = [];
let usernames = [];

function scrapeTweets() {
    let tweetNodes = document.querySelectorAll('div[data-testid="tweet"]');
    tweetNodes.forEach((tweetNode) => {
        let tweetText = tweetNode.querySelector('div[lang]').innerText;
        let username = tweetNode.querySelector('div[dir="ltr"]').innerText;
        tweets.push(tweetText);
        usernames.push(username);
    });
    sendToAPI();
}

function sendToAPI() {
    let tweetData = tweets.map((tweet, index) => {
        return {
            username: usernames[index],
            tweet: tweet
        };
    });

    chrome.runtime.sendMessage({
        message: 'TWEET_DATA',
        payload: tweetData
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'START_SCRAPING') {
        scrapeTweets();
    }
});
```