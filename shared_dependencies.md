Shared Dependencies:

1. **Exported Variables**: 
    - `tweets`: Array of scraped tweets from the user's Twitter timeline.
    - `apiUrl`: The URL of the API where the scraped tweets will be sent.

2. **Data Schemas**: 
    - `Tweet`: Object schema for each tweet, including properties like `id`, `text`, `user`, `timestamp`.

3. **ID Names of DOM Elements**: 
    - `startButton`: The button in the popup to start the scraping process.
    - `optionsButton`: The button in the popup to open the options page.
    - `saveButton`: The button in the options page to save the user's preferences.
    - `tweetContainer`: The container in the popup where the scraped tweets will be displayed.

4. **Message Names**: 
    - `scrapeTweets`: Message sent from the popup to the background script to start the scraping process.
    - `tweetsScraped`: Message sent from the background script to the popup with the scraped tweets.
    - `saveOptions`: Message sent from the options page to the background script to save the user's preferences.

5. **Function Names**: 
    - `startScraping`: Function in the popup script to start the scraping process.
    - `displayTweets`: Function in the popup script to display the scraped tweets.
    - `saveOptions`: Function in the options script to save the user's preferences.
    - `scrapeTweets`: Function in the background script to scrape the tweets.
    - `sendTweetsToApi`: Function in the api script to send the scraped tweets to the API.