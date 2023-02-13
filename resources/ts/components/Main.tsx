import React, {
    useState,
    useEffect,
    Fragment,
    ReactEventHandler,
    useRef,
} from "react";
import axios from "axios";
import { Card, Button, TextField, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/manage.css";
import { WrapText } from "@mui/icons-material";

const Main = () => {
    type postmans = {
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
    const [names, setNames] = useState("作品名");
    const [awards, setAwards] = useState("受賞名など");
    const [workex, setWorkex] = useState("作品詳細");
    const [period, setPeriod] = useState("0");
    const [active, setActive] = useState(false);
    const h3cp = useRef<HTMLHeadingElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const awardRef = useRef<HTMLInputElement>(null);
    const wkexRef = useRef<HTMLInputElement>(null);

    //CSRF対策
    const track = document.head.querySelector(
        'meta[name="csrf-token"][content]'
    ) as HTMLMetaElement;
    useEffect(() => {
        getData();
    }, []);

    //allDataコントローラーとの通信
    const [post, setPost] = React.useState<postmans[]>([]);
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

    //入力切り替え
    const doubles = (e: React.MouseEvent<HTMLInputElement>) => {
        const ok = e.currentTarget.id;
        setActive(!active);
        console.log(active);
    };

    const workEx = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkex(e.target.value);
    };
    const keypr = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const counts = workex.match(/\n/g)?.length;
        if (counts) {
            if (counts <= 3) {
            } else {
                e.preventDefault();
            }
        } else {
        }
    };

    console.log(post);

    console.log(post[8]);

    return (
        <div className="main">
            <div className="manage_cmp">
                <Card component="div" className="insertarea">
                    <h2>新規挿入</h2>
                    <Box component="form" className="inputcmp">
                        <TextField
                            id="outlined-multiline"
                            className="workname"
                            inputRef={nameRef}
                            label="作品名"
                            placeholder="作品名を入力してください"
                            inputMode="text"
                            inputProps={{
                                maxLength: 20,
                            }}
                            onChange={(e) => {
                                setNames(e.target.value);
                            }}
                        ></TextField>
                        <TextField
                            id="outlined-multiline"
                            className="workname"
                            label="受賞した賞の名前"
                            placeholder="受賞歴があれば入力してください"
                            inputRef={awardRef}
                            inputMode="text"
                            inputProps={{
                                maxLength: 31,
                            }}
                            onChange={(e) => {
                                setAwards(e.target.value);
                            }}
                        ></TextField>
                        <TextField
                            id="outlined-multiline"
                            className="workname textbox"
                            type="text"
                            label="作品の詳細"
                            placeholder="作品のこだわりなど"
                            inputRef={wkexRef}
                            inputMode="text"
                            maxRows={4}
                            minRows={4}
                            multiline
                            onChange={workEx}
                            onKeyPress={keypr}
                            // onChange={(e) => {
                            //     const counts = workex.match(/\n/g)?.length;
                            //     console.log(counts);
                            //     if (counts) {
                            //         if (counts <= 4) {
                            //         } else {
                            //             e.preventDefault();
                            //         }
                            //     } else {
                            //     }
                            //     setWorkex(e.target.value);
                            // }}
                        ></TextField>
                        <TextField
                            id="standard-number"
                            className="i_manth"
                            label="制作期間"
                            type="number"
                            placeholder="0"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                    </Box>
                </Card>
                <div className="prev_master">
                    <div className="prev_card">
                        <Card
                            id="a"
                            className="prev_cmp"
                            component="div"
                            style={{ textDecoration: "none" }}
                        >
                            <Card id="prev_img">
                                <div
                                    style={
                                        {
                                            // backgroundImage: `url(/images/)`,
                                        }
                                    }
                                    className="prev_imgs"
                                ></div>
                            </Card>
                            <div className="prev_p" ref={h3cp}>
                                <h3
                                    onClick={(e) => {
                                        nameRef.current?.focus();
                                    }}
                                >
                                    {names}
                                </h3>
                                <p
                                    onClick={(e) => {
                                        awardRef.current?.focus();
                                    }}
                                >
                                    {awards}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "break-spaces",
                                        overflowWrap: "break-word",
                                    }}
                                    onClick={(e) => {
                                        wkexRef.current?.focus();
                                    }}
                                >
                                    {workex}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        padding: "10px 0 0 0",
                                    }}
                                >
                                    <p>制作期間：</p>
                                    <p className="spaces">
                                        {period} {period}
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <div className="btns">
                            <Button
                                className="ins_btn"
                                variant="contained"
                                endIcon={<SendIcon />}
                            >
                                更新
                            </Button>

                            {/* <Button
                                className="deletes"
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                削除
                            </Button>
                            <Button variant="contained" endIcon={<SendIcon />}>
                                更新
                            </Button> */}
                        </div>
                    </div>
                    {/* {post.map((post, index) => {
                        return (
                            <div className="prev_card" key={index}>
                                <Card
                                    id={"" + post.id}
                                    className="prev_cmp"
                                    component="div"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Card id="prev_img">
                                        <div
                                            style={{
                                                backgroundImage: `url(/images/${post.path})`,
                                            }}
                                            className="prev_imgs"
                                        ></div>
                                    </Card>
                                    <div className="prev_p" ref={h3cp}>
                                        <h3
                                            onDoubleClick={doubles}
                                            className={
                                                active ? "noview" : "onview"
                                            }
                                        >
                                            {post.name}
                                        </h3>
                                        <input
                                            type="text"
                                            defaultValue={post.name}
                                            className={
                                                active ? "onview" : "noview"
                                            }
                                        />
                                        <p>{post.award}</p>
                                        <p>{post.infos}</p>
                                        <div
                                            style={{
                                                display: "flex",
                                                padding: "10px 0 0 0",
                                            }}
                                        >
                                            <p>制作期間：</p>
                                            <p>{post.creation_time}</p>
                                        </div>
                                    </div>
                                </Card>
                                <div className="btns">
                                    <Button
                                        className="deletes"
                                        variant="outlined"
                                        startIcon={<DeleteIcon />}
                                    >
                                        削除
                                    </Button>
                                    <Button
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                    >
                                        更新
                                    </Button>
                                </div>
                            </div>
                        );
                    })} */}
                </div>
            </div>

            {/* <div className="inp">
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
            </div> */}
        </div>
    );
};

export { Main };
