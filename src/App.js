import Header from "./components/Header";
import Who from "./components/Who";
import Where from "./components/Where";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollUpButton from "./components/ScrollUpButton";

import "./server"; // miragejs server

function App() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <Who />
            <Where />
            <Footer />
            <ScrollUpButton />
        </div>
    );
}

export default App;
