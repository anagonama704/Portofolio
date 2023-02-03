import React, { useState, useEffect, Fragment, ReactEventHandler } from "react";
import axios from "axios";
import { SiPostmates } from "react-icons/si";
import { display } from "@mui/system";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const Main = () => {
    type postmans = {
        id: number;
        name: string;
    };
    const main: string = "testsテーブルの中身";

    const track = document.head.querySelector(
        'meta[name="csrf-token"][content]'
    ) as HTMLMetaElement;

    useEffect(() => {
        getData();
    }, []);

    const [post, setPost] = React.useState<postmans[]>([]);
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

    const doubles = (e: React.MouseEvent<HTMLInputElement>) => {
        const ok = e.currentTarget.id;
        console.log(ok);
    };

    console.log(post);

    console.log(post[8]);

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
                    {post.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td
                                    align="center"
                                    key={index}
                                    style={{ display: "flex" }}
                                >
                                    <p onDoubleClick={doubles}>{post.id}</p>
                                    <p
                                        onDoubleClick={doubles}
                                        className={post.id + ""}
                                    >
                                        {post.name}
                                    </p>
                                </td>
                            </tr>
                        );
                    })}
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
