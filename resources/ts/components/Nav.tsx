import React from "react";
import { Link as Links } from "react-router-dom";
import { Link } from "@mui/material";
import "../../css/nav.css";

const Nav = () => {
    return (
        <div id="nav">
            <ul>
                <li>
                    <Link component={Links} to="/portfolio">
                        Home
                    </Link>
                </li>
                <li>
                    <Link component={Links} to="/portfolio/top">
                        Top
                    </Link>
                </li>
                <li>
                    <Link component={Links} to="/portfolio/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link component={Links} to="/portfolio/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export { Nav };
