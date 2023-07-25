import Header from "./components/Header";
import Who from "./components/Who";
import Where from "./components/Where";
import Footer from "./components/Footer";

import "./server"; // miragejs server

function App() {
    return (
        <div>
            <Header />
            <Who />
            <Where />
            <Footer />
        </div>
    );
}

export default App;
