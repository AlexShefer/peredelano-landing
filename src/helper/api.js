import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { formatDateRussian, filterEvents } from "../helper/utils";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const conferencesCollection = collection(db, "conferences");

export async function events() {
    const snapshot = await getDocs(conferencesCollection);
    const events = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    const refractedEvents = events
        .map((ev) => ({
            ...ev,
            date: ev.date.toDate(),
        }))
        .sort((a, b) => a.date - b.date);
    const filteredEvents = filterEvents(refractedEvents).map((event) => ({
        ...event,
        date: formatDateRussian(event.date),
    }));

    return filteredEvents;
}
