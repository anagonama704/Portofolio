import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Main = () => {
    const main: string = "testsテーブルの中身";

    // const [post, setPost] = React.useState([]);

    // React.useEffect(() => {
    //     axios.get("http://localhost:8000/api/posts").then((response) => {
    //         setPost(response.data);
    //     });
    // }, []);

    // if (!post) return null;
    // let post: Array<[]> = [];
    // let ids: number = 0;
    // let names: string = "";
    // React.useEffect(() => {
    //     axios.get("http://localhost:8000/api/posts").then((response) => {
    //         post = response.data;
    //         ids = post[0].id;
    //         names = post[0].name;
    //     });
    // }, []);

    useEffect(() => {
        getData();
    }, []);

    const [post, setPost] = React.useState([]);
    const getData = () => {
        axios
            .get("http://localhost:8000/api/posts")
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log("err");
            });
    };

    console.log(post);

    return (
        <div className="main">
            <p>{main}</p>
            <table id="lis">
                <thead>
                    <tr>
                        <th>testsテーブルの中身</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((row, index) => (
                        <tr key={index}>
                            {Object.keys(row).map(function (key, i) {
                                return (
                                    <td align="center" key={i}>
                                        {row[key]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { Main };
