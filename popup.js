```javascript
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let usernameInput = document.getElementById('usernameInput');
let tweetContainer = document.getElementById('tweetContainer');

let tweets = [];
let usernames = [];

startButton.addEventListener('click', startScraping);
stopButton.addEventListener('click', stopScraping);

function startScraping() {
    let username = usernameInput.value;
    usernames.push(username);
    chrome.runtime.sendMessage({message: 'START_SCRAPING', username: username});
}

function stopScraping() {
    chrome.runtime.sendMessage({message: 'STOP_SCRAPING'});
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'TWEET_DATA') {
        tweets = request.data;
        displayTweets();
    }
});

function displayTweets() {
    tweetContainer.innerHTML = '';
    tweets.forEach(tweet => {
        let tweetElement = document.createElement('p');
        tweetElement.textContent = tweet.text;
        tweetContainer.appendChild(tweetElement);
    });
}

function sendToAPI() {
    let data = {
        usernames: usernames,
        tweets: tweets
    };
    fetch('https://your-api-url.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
}
```