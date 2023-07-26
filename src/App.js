import Header from "./components/Header";
import Who from "./components/Who";
import Where from "./components/Where";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./server"; // miragejs server

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Who />
            <Where />
            <Footer />
        </div>
    );
}

export default App;
