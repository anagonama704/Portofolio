import React from "react";
import "../../css/header.css";

const Header = () => {
    const title: string = "テストコード";
    return (
        <div className="header">
            <h1>{title}</h1>
        </div>
    );
};

export { Header };
