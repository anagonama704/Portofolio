import React, { useEffect } from "react";
import { Card } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

    return (
        <div id="work">
            <h2>Work</h2>
            <Slider
                dots
                lazyLoad="ondemand"
                infinite
                slidesToShow={1}
                slidesToScroll={1}
                className="slides"
                autoplay
                autoplaySpeed={2000}
                centerMode
            >
                {post.map((postt, index) => {
                    return (
                        <div className="slide_cmp" key={index}>
                            <Card
                                id={"" + postt.id}
                                className="work_cmp"
                                component="a"
                                href={
                                    "https://anagonama704.github.io/" +
                                    postt.link
                                }
                                target="_blank"
                                style={{ textDecoration: "none" }}
                            >
                                <Card id="img_cmp">
                                    <div
                                        style={{
                                            backgroundImage: `url('/storage/image/${postt.path}')`,
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
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};
export { Works };
