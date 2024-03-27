```javascript
function scrapeTweets() {
    let tweets = [];
    let tweetNodes = document.querySelectorAll('.tweet');
    tweetNodes.forEach((tweetNode) => {
        let username = tweetNode.querySelector('.username').innerText;
        let content = tweetNode.querySelector('.tweet-content').innerText;
        let timestamp = tweetNode.querySelector('.tweet-timestamp').innerText;
        tweets.push({username, content, timestamp});
    });
    return tweets;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'scrapeTweets') {
        let tweets = scrapeTweets();
        sendResponse({tweets});
    }
});
```