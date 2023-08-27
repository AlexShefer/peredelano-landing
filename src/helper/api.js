import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { formatDateRussian, filterEvents } from "../helper/utils";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const spreadsheetRef = ref(db, "15tvjjxm-y4kaxsYnJsJWXaxJaGfk_0a2YdI2iP0Keq4");

function getEvents() {
    return new Promise((resolve, reject) => {
        onValue(
            spreadsheetRef,
            (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            },
            (error) => {
                reject(error);
            }
        );
    });
}

export async function processData() {
    try {
        const data = await getEvents();
        const events = data.Sheet1;
        events.shift();
        // const refractedEvents = events.sort((a, b) => a.date - b.date);
        const refractedEvents = events.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
        console.log(refractedEvents);
        const filteredEvents = filterEvents(refractedEvents).map((event) => ({
            ...event,
            date: formatDateRussian(event.date),
        }));

        return filteredEvents;
    } catch (error) {
        console.error("Error fetching and processing events:", error);
    }
}

// ************************************************************
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { collection, getFirestore, getDocs } from "firebase/firestore";
// import { formatDateRussian, filterEvents } from "../helper/utils";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASURMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const conferencesCollection = collection(db, "conferences");

// export async function events() {
//     const snapshot = await getDocs(conferencesCollection);
//     const events = snapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//     }));
//     const refractedEvents = events
//         .map((ev) => ({
//             ...ev,
//             date: ev.date.toDate(),
//         }))
//         .sort((a, b) => a.date - b.date);
//     const filteredEvents = filterEvents(refractedEvents).map((event) => ({
//         ...event,
//         date: formatDateRussian(event.date),
//     }));

//     return filteredEvents;
// }
