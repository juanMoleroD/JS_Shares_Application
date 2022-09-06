# The JPA application:

With this application a user can save and retrieve data on their portfolio. The app uses a react frontend for displaying and interacting with the data, and a node backend using express. It also stores the users portfolio data in MongoDB.

This uses the AlphaVantage API to get the data, and you can get a key for the API below:
https://www.alphavantage.co/

Note: the free tier only allows 5 calls per minute. For the best functionality a higher tier should be selected.

## How to Run the application Localy

Requirements: Node and MongoDB
For develop mode, read below:

1. After cloning the repository, run "npm install" on both the client and server folders.
2. Add your API key on "client/src/API_key.js"
note: if running in Develop Mode, add the API key on "server/dummyDataFetch.js"
3. Start the back end running "npm start" in the server folder.
4. Start the front end running "npm start" in the client folder.

## Develop Mode:

Due to the API limitations on calls per minute using the free tier, we developed a dummy backend API to simulate calls to the AlphaVantage. To run this please run the following commands before starting the application.

1. Same as above.
2. Same as above and note the developer note.
3. In the server folder run "npm run seeds" to prime the database.
4. Start the back end running "npm run server:dev" in the server folder. This allows for changes on the back end to automatically restart the application using nodemon.
5. In the server folder and with the backend running, run "node dummyDataFetch.js". This will take a few minutes for the data to be filtered. ENSURE your API key is inserted on the 2 files refered previously.
6. Start the front end running "npm start" in the client folder.