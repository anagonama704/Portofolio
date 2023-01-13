import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Await } from "react-router-dom";

const Main = () => {
    const main: string = "testsテーブルの中身";

    const track = document.head.querySelector(
        'meta[name="csrf-token"][content]'
    ) as HTMLMetaElement;
    console.log(track.content);

    useEffect(() => {
        getData();
    }, []);

    const [post, setPost] = React.useState([]);
    const getData = async () => {
        await axios
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
            <div className="inp">
                <form action="create" method="post">
                    <input type="hidden" name="_token" value={track.content} />
                    <input type="text" name="names" />
                    <input type="submit" value="追加" />
                </form>
                <form action="delete" method="post">
                    <input type="hidden" name="_token" value={track.content} />
                    <input type="text" name="ids" />
                    <input type="submit" value="削除" />
                </form>
            </div>
        </div>
    );
};

export { Main };
