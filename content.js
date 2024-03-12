```javascript
let tweets = [];

function scrapeTweets() {
    let tweetNodes = document.querySelectorAll('div[data-testid="tweet"]');
    tweetNodes.forEach((tweetNode) => {
        let id = tweetNode.getAttribute('data-tweet-id');
        let text = tweetNode.querySelector('div.css-901oao.r-jwli3a.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0').innerText;
        let user = tweetNode.querySelector('div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd').innerText;
        let timestamp = tweetNode.querySelector('time').getAttribute('datetime');
        tweets.push({ id, text, user, timestamp });
    });
    chrome.runtime.sendMessage({ message: 'tweetsScraped', tweets });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'scrapeTweets') {
        scrapeTweets();
    }
});
```