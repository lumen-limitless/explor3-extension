```javascript
let tweets = [];
let usernames = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'START_SCRAPING') {
        startScraping(request.username);
    } else if (request.message === 'STOP_SCRAPING') {
        stopScraping();
    }
});

function startScraping(username) {
    usernames.push(username);
    scrapeTweets(username);
}

function stopScraping() {
    usernames = [];
    tweets = [];
}

function scrapeTweets(username) {
    fetch(`https://twitter.com/${username}`)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let htmlDocument = parser.parseFromString(data, 'text/html');
            let tweetElements = htmlDocument.querySelectorAll('.tweet');
            tweetElements.forEach(tweetElement => {
                let tweet = {
                    username: username,
                    content: tweetElement.querySelector('.tweet-text').innerText,
                    timestamp: tweetElement.querySelector('.tweet-timestamp').innerText
                };
                tweets.push(tweet);
            });
            sendToAPI(tweets);
        });
}

function sendToAPI(tweets) {
    fetch('https://your-api-url.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tweets)
    });
}
```