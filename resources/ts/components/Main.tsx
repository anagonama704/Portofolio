import React, {
    useState,
    useEffect,
    Fragment,
    ReactEventHandler,
    useRef,
} from "react";
import axios from "axios";
import {
    Card,
    Button,
    TextField,
    Box,
    MenuItem,
    IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { PhotoCamera } from "@mui/icons-material";
import "../../css/manage.css";

const Main = () => {
    //型の定義
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
    type periods = {
        label: string;
        value: string;
    };
    const mtSelect = [
        {
            label: "週間",
            value: " 週間",
        },
        {
            label: "ヶ月",
            value: " ヶ月",
        },
        {
            label: "年",
            value: " 年",
        },
    ];
    // useStateの定義
    const [image, setImage] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputAward, setInputAward] = useState("");
    const [inputWorkex, setInputWorkex] = useState("");
    const [inputPeriod, setInputPeriod] = useState("");
    const [inputPdate, setInputPdate] = useState("");
    const [prev, setPrev] = useState("/images/default.png");
    const [names, setNames] = useState("作品名");
    const [awards, setAwards] = useState("受賞名など");
    const [workex, setWorkex] = useState("作品詳細");
    const [period, setPeriod] = useState("0");
    const [pdate, setPdate] = useState(" ヶ月");
    const [active, setActive] = useState(false);
    const allForm = useRef<HTMLFormElement>(null);
    const h3cp = useRef<HTMLHeadingElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const awardRef = useRef<HTMLInputElement>(null);
    const wkexRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);

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
    const wkName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
        setNames(e.target.value);
        if (e.target.value == "") {
            setNames("作品名");
        }
    };
    const wkAward = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputAward(e.target.value);

        setAwards(e.target.value);
        if (e.target.value == "") {
            setAwards("受賞名など");
        }
    };

    const workEx = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputWorkex(e.target.value);
        setWorkex(e.target.value);
        if (e.target.value == "") {
            setWorkex("作品詳細");
        }
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
    const workImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        setImage(e.target.value);
        const files = e.target.files[0];

        setPrev(window.URL.createObjectURL(files));
    };
    const allReset = () => {
        setImage("");
        setPrev("/images/default.png");
        setNames("作品名");
        setAwards("受賞名など");
        setWorkex("作品詳細");
        setPeriod("0");
        setPdate(" ヶ月");
        setInputName("");
        setInputAward("");
        setInputWorkex("");
        setInputPeriod("");
        setInputPdate("");
    };
    const newPut = () => {
        console.log(inputName);
        console.log(inputAward);
        console.log(inputWorkex);
        console.log(inputPeriod + pdate);
        console.log(image);
    };

    return (
        <div className="main">
            <div className="manage_cmp">
                <Card component="div" className="insertarea">
                    <h2>新規追加</h2>
                    <Box component="form" className="input_cmp" ref={allForm}>
                        <Box className="img_inp">
                            <IconButton
                                className="select_image"
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                                sx={{
                                    backgroundColor: "#d3e7e7",
                                    margin: "15px 0 5px 0",
                                }}
                            >
                                <input
                                    ref={imgRef}
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={workImage}
                                />
                                <PhotoCamera fontSize="large" />
                            </IconButton>
                        </Box>
                        <TextField
                            id="outlined-multiline"
                            className="workname"
                            inputRef={nameRef}
                            label="作品名"
                            placeholder="作品名を入力してください"
                            fullWidth
                            margin="normal"
                            inputMode="text"
                            inputProps={{
                                maxLength: 20,
                            }}
                            value={inputName}
                            onChange={wkName}
                        />
                        <TextField
                            id="outlined-multiline"
                            className="workname"
                            label="受賞した賞の名前"
                            placeholder="受賞歴があれば入力してください"
                            fullWidth
                            margin="normal"
                            inputRef={awardRef}
                            inputMode="text"
                            inputProps={{
                                maxLength: 30,
                            }}
                            value={inputAward}
                            onChange={wkAward}
                        />
                        <TextField
                            id="outlined-multiline"
                            className="workname textbox"
                            type="text"
                            label="作品の詳細"
                            fullWidth
                            margin="normal"
                            placeholder="作品のこだわりなど"
                            inputRef={wkexRef}
                            inputMode="text"
                            maxRows={4}
                            minRows={4}
                            multiline
                            value={inputWorkex}
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
                        />
                        <div className="month_master">
                            <TextField
                                id="standard-number"
                                className="i_month"
                                inputRef={monthRef}
                                label="制作期間"
                                type="number"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                                value={period}
                                onChange={(e) => {
                                    setInputPeriod(e.target.value);
                                    setPeriod(e.target.value);
                                }}
                            />
                            <TextField
                                id="standard-select-currency"
                                className="s_month"
                                select
                                label=" "
                                margin="normal"
                                defaultValue=" ヶ月"
                                variant="standard"
                                onChange={(e) => {
                                    setPdate(e.target.value);
                                }}
                            >
                                {mtSelect.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
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
                                    style={{
                                        backgroundImage: `url(${prev})`,
                                    }}
                                    className="prev_imgs"
                                    onClick={(e) => {
                                        imgRef.current?.click();
                                    }}
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
                                    onClick={(e) => {
                                        monthRef.current?.focus();
                                    }}
                                >
                                    <p>制作期間：</p>
                                    <p className="spaces">
                                        {period}
                                        {pdate}
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <div className="btns">
                            <Button
                                className="ins_btn"
                                variant="outlined"
                                endIcon={<RotateLeftIcon />}
                                sx={{
                                    backgroundColor: "#fff",
                                    fontSize: "18px",
                                }}
                                onClick={allReset}
                            >
                                リセット
                            </Button>
                            <Button
                                className="ins_btn"
                                variant="contained"
                                endIcon={<SendIcon />}
                                onClick={newPut}
                                sx={{
                                    fontSize: "18px",
                                }}
                            >
                                追加
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
