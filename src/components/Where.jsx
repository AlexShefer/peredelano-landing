import { useEffect, useState } from "react";

function Where() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events") // Send a GET request to the MirageJS server
            .then((response) => response.json())
            .then((data) => setEvents(data.events));
    }, []);

    return <h1>Where</h1>;
}

export default Where;
