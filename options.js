```javascript
// Get DOM elements
const saveButton = document.getElementById('saveButton');

// Function to save options
function saveOptions() {
    const apiUrl = document.getElementById('apiUrl').value;

    // Save options to chrome storage
    chrome.storage.sync.set({
        apiUrl: apiUrl
    }, function() {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    // Use default value apiUrl = 'http://localhost:3000/api'
    chrome.storage.sync.get({
        apiUrl: 'http://localhost:3000/api'
    }, function(items) {
        document.getElementById('apiUrl').value = items.apiUrl;
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', restoreOptions);
saveButton.addEventListener('click', saveOptions);
```