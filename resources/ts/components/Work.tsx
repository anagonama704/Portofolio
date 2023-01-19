import React, { useEffect } from "react";
import { Card } from "@mui/material";
import axios from "axios";
import "../../css/work.css";

const Works = () => {
    type postman = {
        id: number;
        name: string;
        path: string;
        link: string;
        w_id: number;
        infos: string;
        created_at: Date;
        updated_at: Date;
        award: string;
        creation_time: string;
        f_camp: string;
        e_camp: string;
    };

    useEffect(() => {
        getData();
    }, []);

    const [post, setPost] = React.useState<postman[]>([]);
    const getData = async () => {
        await axios
            .get("http://localhost:8000/api/info_wk")
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log("err");
            });
    };
    console.log(post);

    return (
        <div id="work">
            <h2>Work</h2>
            {post.map((postt, index) => {
                return (
                    <Card
                        id="work_cmp"
                        key={index}
                        component="a"
                        href={"https://anagonama704.github.io/" + postt.link}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <Card id="img_cmp">
                            <div
                                style={{
                                    backgroundImage: `url(/images/${postt.path})`,
                                }}
                                className="work_img"
                            ></div>
                        </Card>
                        <div className="work_p">
                            <h3>{postt.name}</h3>
                            <p>{postt.award}</p>
                            <p>{postt.infos}</p>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "10px 0 0 0",
                                }}
                            >
                                <p>制作期間：</p>
                                <p>{postt.creation_time}</p>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
export { Works };
