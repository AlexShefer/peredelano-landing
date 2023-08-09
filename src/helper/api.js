import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { formatDateRussian, filterEvents } from "../helper/utils";

const firebaseConfig = {
    apiKey: "AIzaSyCY9cOSHi5lrKMhM6M-J23fsT03U9k2YSE",
    authDomain: "peredelanoconf-de9fd.firebaseapp.com",
    projectId: "peredelanoconf-de9fd",
    storageBucket: "peredelanoconf-de9fd.appspot.com",
    messagingSenderId: "281887173350",
    appId: "1:281887173350:web:0389d20872fb4a9c382927",
    measurementId: "G-FVQ9YK1FPR",
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
