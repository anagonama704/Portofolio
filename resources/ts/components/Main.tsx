import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Main = () => {
    const main: string = "メインです";

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get("/ddt").then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div className="main">
            <p>{main}</p>
        </div>
    );
};

export { Main };
