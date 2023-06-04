// Import React
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, /*Route*/ } from "react-router-dom";

// Import pages
/*import Home from "./pages/Home";
import Rental from "./pages/Rental";
import About from "./pages/About";
import Notfound from "./pages/Notfound";*/

// Import Components
import Header from "./components/Header";
// import Footer from "./components/Footer";

// Config root
const root = createRoot(document.getElementById("root"));

// Render
root.render(
    <React.StrictMode>
        <Router>
        <Header />
            <Routes>
            </Routes>
        </Router>
    </React.StrictMode>
)

/*<Route path="/" element={<Home/>} />
                <Route path="/rental" element={<Rental/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/notfound" element={<Notfound/>} />
                <Footer />*/