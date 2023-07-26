import { useEffect, useState } from "react";

function Where() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events") // Send a GET request to the MirageJS server
            .then((response) => response.json())
            .then((data) => setEvents(data.events));
    }, []);

    return (
        <div id="where">
            <h1>Where section</h1>
        </div>
    );
}

export default Where;
