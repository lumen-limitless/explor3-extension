```javascript
// Save options to chrome.storage
function saveOptions() {
  var apiUrl = document.getElementById('apiUrlInput').value;
  chrome.storage.sync.set({
    apiUrl: apiUrl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function loadOptions() {
  chrome.storage.sync.get({
    apiUrl: 'https://your-api-url.com'
  }, function(items) {
    document.getElementById('apiUrlInput').value = items.apiUrl;
  });
}

// Listeners
document.getElementById('saveButton').addEventListener('click', saveOptions);
document.addEventListener('DOMContentLoaded', loadOptions);
```