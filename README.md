# PeredelanoConf

PeredelanoConf is an application designed for the IT community in Eastern Europe, with the primary goal of fostering community growth. The main focus of the application is to provide comprehensive information about upcoming IT conferences.

Explore the live version of the website [here](https://peredelano.netlify.app/).

## Description

-   PeredelanoConf is a Single Page Application powered by ReactJS.
-   The application's data is stored in Firebase Realtime Database.
-   Information about events is updated through [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1BGd36UOIOfY3wVmUL0i3UNkB4w3hloLDmQU9_UmrZAI/edit#gid=0). All changes in the spreadsheet are immediately reflected in the app.

## Environment Variables

To configure the database connection, the following environment variables are required:

```bash
# Configuration implemented in ./src/helpers/api.js
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
}
## Technologies

- ReactJs
- JavaScript
- CSS (BEM)
- Firebase Realtime Database
- Google SpreadSheet

## Collaboration

This project created in collaboration with [Ksanka](https://github.com/ksankakovsh)
```
