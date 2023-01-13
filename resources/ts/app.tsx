import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Top } from "./components/Top";
import { Works } from "./components/Work";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

import "../css/app.css";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/portfolio" element={<Main />} />
                <Route path="/portfolio/top" element={<Top />} />
                <Route path="/portfolio/work" element={<Works />} />
                <Route path="/portfolio/about" element={<About />} />
                <Route path="/portfolio/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

// ReactDOM.render(<App />, document.getElementById("app"));
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
