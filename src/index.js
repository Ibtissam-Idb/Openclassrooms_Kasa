// Import React
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.scss";

// Import pages
import AppRouter from "./router/AppRouter";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Config root
const root = createRoot(document.getElementById("root"));

// Render
root.render(

    <Router>
        <div className="body_padding">
            <Header />
            <AppRouter />
        </div>
        <Footer />
    </Router>

)