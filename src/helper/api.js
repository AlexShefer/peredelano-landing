import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { formatDateRussian, filterEvents } from "../helper/utils";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const spreadsheetRef = ref(db, "1BGd36UOIOfY3wVmUL0i3UNkB4w3hloLDmQU9_UmrZAI");

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
        const unassignedEvents = events
            .filter((event) => !event.date)
            .map((event) => ({
                ...event,
                date: "СКОРО",
            }));
        const refractedEvents = events
            .filter((event) => event.date)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        const filteredEvents = filterEvents(refractedEvents).map((event) => ({
            ...event,
            date: formatDateRussian(event.date),
        }));
        return filteredEvents.concat(unassignedEvents);
    } catch (error) {
        console.error("Error fetching and processing events:", error);
    }
}
