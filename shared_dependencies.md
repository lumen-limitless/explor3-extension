Shared Dependencies:

1. **Exported Variables**: 
    - `tweets`: Array to store scraped tweets.
    - `usernames`: Array to store Twitter usernames.

2. **Data Schemas**: 
    - `tweetSchema`: Defines the structure of a tweet object.
    - `userSchema`: Defines the structure of a user object.

3. **ID Names of DOM Elements**: 
    - `startButton`: Button to start scraping.
    - `stopButton`: Button to stop scraping.
    - `usernameInput`: Input field for Twitter username.
    - `tweetContainer`: Container to display scraped tweets.

4. **Message Names**: 
    - `START_SCRAPING`: Message to start scraping process.
    - `STOP_SCRAPING`: Message to stop scraping process.
    - `TWEET_DATA`: Message containing scraped tweet data.

5. **Function Names**: 
    - `startScraping`: Function to start scraping process.
    - `stopScraping`: Function to stop scraping process.
    - `scrapeTweets`: Function to scrape tweets.
    - `displayTweets`: Function to display scraped tweets on the extension's popup.
    - `sendToAPI`: Function to send scraped data to an API.