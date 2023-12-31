import { useState } from "react";
import Header from "./components/Header";
import Who from "./components/Who";
import Where from "./components/Where";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";

// import "./server"; // miragejs server

function App() {
    const [isPopupOpen, setIsPopUpOpen] = useState(false);
    return (
        <div className="app">
            <Header isPopupOpen={isPopupOpen} />
            <Who />
            <Where isPopupOpen={isPopupOpen} setIsPopUpOpen={setIsPopUpOpen} />
            <Footer />
            <ScrollUpButton />
        </div>
    );
}

export default App;
