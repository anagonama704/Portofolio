import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
