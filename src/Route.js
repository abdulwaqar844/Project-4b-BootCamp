import React from "react";
import { Routes,  Route } from "react-router-dom";
import MenuBar from "./Components/MenuBar";
import Home from "./Components/Home"
import Contact from "./Components/Contact";
import About from "./Components/About"
export default function RouteConfig() {
    return (
        <div>
            <MenuBar />

            <Routes>
                
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
}

