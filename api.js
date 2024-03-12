```javascript
const apiUrl = 'https://your-api-url.com';

function sendTweetsToApi(tweets) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Tweets sent to API successfully');
        }
    };
    const data = JSON.stringify(tweets);
    xhr.send(data);
}
```