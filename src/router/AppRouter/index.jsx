
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "../../pages/Home";
import Rental from "../../pages/Rental";
import About from "../../pages/About";
import Notfound from "../../pages/Notfound";

function AppRouter() {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rental/:id" element={<Rental />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    )

}

export default AppRouter;