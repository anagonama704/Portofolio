import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    Card,
    Button,
    TextField,
    Box,
    MenuItem,
    IconButton,
    ToggleButtonGroup,
    ToggleButton,
    Checkbox,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow, {
    TableRowClasses,
    TableRowClassKey,
    TableRowProps,
    TableRowTypeMap,
} from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { Add, CheckBox, Padding } from "@mui/icons-material";
import { ManageHistory } from "@mui/icons-material";
import { PhotoCamera } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        created_at: string;
        updated_at: string;
        award: string;
        creation_time: string;
    };
    const mtSelect = [
        {
            label: "週間",
            value: "週間",
        },
        {
            label: "ヶ月",
            value: "ヶ月",
        },
        {
            label: "年",
            value: "年",
        },
    ];
    // useStateの定義
    const [pp, ppp] = useState<File>();
    const [upNum, setUpNum] = useState<Number>(0);
    const [upName, setUpName] = useState("作品名");
    const [upAward, setUpAward] = useState("その他");
    const [upImg, setUpImg] = useState("default.png");
    const [upImgName, setUpImgName] = useState("");
    const [upWorkEx, setUpWorkEx] = useState("作品詳細");
    const [upPeriod, setUpPeriod] = useState("0");
    const [upPdate, setUpPdate] = useState("ヶ月");

    const [nameInp, setNameInp] = useState(true);
    const [awardInp, setAwardInp] = useState(true);
    const [workExInp, setWorkExInp] = useState(true);
    const [periodInp, setPeriodInp] = useState(true);
    const [inpCnt, setInpCnt] = useState(true);
    const [image, setImage] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputAward, setInputAward] = useState("");
    const [inputWorkex, setInputWorkex] = useState("");
    const [inputPeriod, setInputPeriod] = useState("");
    const [inputPdate, setInputPdate] = useState("");
    const [prev, setPrev] = useState("/images/default.png");
    const [names, setNames] = useState("作品名");
    const [awards, setAwards] = useState("その他");
    const [workex, setWorkex] = useState("作品詳細");
    const [period, setPeriod] = useState("0");
    const [pdate, setPdate] = useState("ヶ月");
    const [active, setActive] = useState(false);
    const [toggleV, setToggleV] = useState("add");
    const slicker = useRef<Slider>(null);
    const allForm = useRef<HTMLFormElement>(null);
    const h3cp = useRef<HTMLHeadingElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const imgInpRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const awardRef = useRef<HTMLInputElement>(null);
    const wkexRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);
    const [changeImg, setChangeImg] = useState(true);
    const tableRef = useRef<any>();

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
        console.log(e.target.files);
        console.log(files.name);
        ppp(files);
        console.log(pp);

        setPrev(window.URL.createObjectURL(files));
    };
    const workInpImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setUpImgName(e.target.value);
        const files = e.target.files[0];
        console.log(e.target.files);
        console.log(files.name);
        ppp(files);
        console.log(pp);

        setUpImg(window.URL.createObjectURL(files));
        setChangeImg(false);
    };
    const addPage = () => {
        window.setTimeout(function () {
            setToggleV("add");
            setInpCnt(true);
            if (toggleV == "managed") slicker.current?.slickGoTo(0);
        }, 100);
    };
    const allReset = () => {
        setImage("");
        setPrev("/images/default.png");
        setNames("作品名");
        setAwards("その他");
        setWorkex("作品詳細");
        setPeriod("0");
        setPdate("ヶ月");
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
        const params = new FormData();

        if (typeof pp === "undefined") return;
        params.append("names", inputName);
        params.append("paths", pp.name);
        params.append("link", "#");
        params.append("img", pp);
        params.append("infos", inputWorkex);
        params.append("awards", inputAward);
        params.append("periods", inputPeriod + pdate);
        axios
            .post("http://localhost:8000/api/wkins", params, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            })
            .then(function (response: any) {
                console.log(response);
            })
            .catch(function (error: any) {
                console.log(error);
            });
        alert("追加しました");
        allReset();
        getData();
    };
    const managedPage = () => {
        window.setTimeout(function () {
            setToggleV("managed");
            setInpCnt(false);
            if (toggleV == "add") slicker.current?.slickGoTo(1);
        }, 100);
    };
    const updatePrev = (e: React.MouseEvent<HTMLTableRowElement>) => {
        console.log(e.currentTarget.id);
        setUpNum(post[Number(e.currentTarget.id)].id);
        setUpName(post[Number(e.currentTarget.id)].name);
        setUpAward(post[Number(e.currentTarget.id)].award);
        setUpImg(post[Number(e.currentTarget.id)].path);
        setUpWorkEx(post[Number(e.currentTarget.id)].infos);
        setUpPeriod(
            post[Number(e.currentTarget.id)].creation_time.replace(
                /[^0-9]/g,
                ""
            )
        );
        setUpPdate(
            post[Number(e.currentTarget.id)].creation_time.replace(
                /[0-9０-９]/g,
                ""
            )
        );
    };

    const wDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        console.log(e.currentTarget.id);
        console.log(post);
        var results = confirm(
            post[Number(e.currentTarget.id)].name + "を削除します"
        );
        if (results) {
            const delKey = new URLSearchParams();
            delKey.append("ids", "" + post[Number(e.currentTarget.id)].id);
            axios.post("http://localhost:8000/api/wkdelete", delKey);
            getData();
        } else {
        }
    };
    const upAllReset = () => {
        setUpName("作品名");
        setUpAward("その他");
        setUpWorkEx("作品詳細");
        setUpImg("default.png");
        setChangeImg(true);
        ppp(undefined);
    };
    const upPut = () => {
        const params = new FormData();
        if (typeof pp === "undefined") return;
        params.append("nums", upNum + "");
        params.append("names", upName);
        params.append("paths", pp.name);
        params.append("link", "#");
        params.append("img", pp);
        params.append("infos", upWorkEx);
        params.append("awards", upAward);
        params.append("periods", upPeriod + upPdate);
        axios
            .post("http://localhost:8000/api/wkupdate", params, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            })
            .then(function (response: any) {
                console.log(response);
            })
            .catch(function (error: any) {
                console.log(error);
            });
        alert("追加しました");
        upAllReset();
        getData();
    };

    return (
        <div className="main">
            <div className="manage_cmp">
                <Slider
                    ref={slicker}
                    infinite
                    slidesToShow={1}
                    className="ins_card"
                    arrows={false}
                >
                    <Card className="cards">
                        <h2>新規追加</h2>
                        <Box
                            component="form"
                            className="input_cmp"
                            ref={allForm}
                        >
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
                                label="その他"
                                placeholder="その他情報があれば入力してください"
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
                                    value={pdate}
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
                    <Card className="up_cards">
                        <h2>作品管理</h2>
                        <TableContainer
                            component={Paper}
                            style={{ minHeight: "525px", maxHeight: "525px" }}
                        >
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>作品名</TableCell>
                                        <TableCell>更新日時</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {post.map((postt, index) => {
                                        return (
                                            <TableRow
                                                key={index}
                                                ref={tableRef}
                                                id={"" + index}
                                                hover
                                                onClick={(e) => {
                                                    updatePrev(e);
                                                }}
                                            >
                                                <TableCell width={"10px"}>
                                                    {postt.id}
                                                </TableCell>
                                                <TableCell width={"100px"}>
                                                    {postt.name}
                                                </TableCell>
                                                <TableCell>
                                                    {postt.updated_at}
                                                </TableCell>
                                                <TableCell width={"10px"}>
                                                    <Button
                                                        onClick={wDelete}
                                                        id={"" + index}
                                                        fullWidth
                                                    >
                                                        <DeleteIcon fontSize="small" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Slider>

                <div className="prev_master">
                    <div className="prev_card">
                        <ToggleButtonGroup
                            exclusive
                            value={toggleV}
                            style={{
                                width: "fit-content",
                                margin: "0 0 0 10.3%",
                            }}
                        >
                            <ToggleButton
                                value="add"
                                onClick={addPage}
                                sx={{
                                    backgroundColor: "#fff",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Add />
                                    <p>新規追加</p>
                                </div>
                            </ToggleButton>
                            <ToggleButton
                                value="managed"
                                onClick={managedPage}
                                sx={{
                                    backgroundColor: "#fff",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <ManageHistory />
                                    <p>作品管理</p>
                                </div>
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <Card
                            id="a"
                            className="prev_cmp"
                            component="div"
                            style={{
                                textDecoration: "none",
                                display: inpCnt ? "flex" : "none",
                            }}
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
                                        setToggleV("add");
                                    }}
                                >
                                    {names}
                                </h3>
                                <p
                                    onClick={(e) => {
                                        awardRef.current?.focus();
                                        setToggleV("add");
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
                                        setToggleV("add");
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
                                        setToggleV("add");
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
                        <Card
                            id="a"
                            className="prev_cmp"
                            component="div"
                            style={{
                                textDecoration: "none",
                                display: inpCnt ? "none" : "flex",
                            }}
                        >
                            <Card id="prev_img">
                                <div
                                    style={{
                                        backgroundImage: `url(/storage/image/${upImg})`,
                                        display: changeImg ? "block" : "none",
                                    }}
                                    className="prev_imgs"
                                    onClick={(e) => {
                                        imgInpRef.current?.click();
                                    }}
                                >
                                    <input
                                        ref={imgInpRef}
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={workInpImage}
                                    />
                                </div>
                                <div
                                    style={{
                                        backgroundImage: `url(${upImg})`,
                                        display: changeImg ? "none" : "block",
                                    }}
                                    className="prev_imgs"
                                    onClick={(e) => {
                                        imgInpRef.current?.click();
                                    }}
                                ></div>
                            </Card>
                            <div className="prev_p" ref={h3cp}>
                                <h3
                                    onClick={(e) => {
                                        setToggleV("add");
                                        setNameInp(false);
                                    }}
                                    style={{
                                        display: nameInp ? "block" : "none",
                                    }}
                                >
                                    {upName}
                                </h3>
                                <input
                                    type="text"
                                    style={{
                                        fontSize: "18.7px",
                                        display: nameInp ? "none" : "block",
                                        fontWeight: "bold",
                                    }}
                                    value={upName}
                                    onBlur={(e) => {
                                        setNameInp(true);
                                    }}
                                    onChange={(e) => {
                                        setUpName(e.target.value);
                                    }}
                                />
                                <p
                                    onClick={(e) => {
                                        setToggleV("add");
                                        setAwardInp(false);
                                    }}
                                    style={{
                                        display: awardInp ? "block" : "none",
                                    }}
                                >
                                    {upAward}
                                </p>
                                <input
                                    type="text"
                                    style={{
                                        display: awardInp ? "none" : "block",
                                        width: "300px",
                                        fontSize: "16px",
                                    }}
                                    value={upAward}
                                    onChange={(e) => {
                                        setUpAward(e.target.value);
                                    }}
                                    onBlur={(e) => {
                                        setAwardInp(true);
                                    }}
                                />
                                <p
                                    style={{
                                        whiteSpace: "break-spaces",
                                        overflowWrap: "break-word",
                                        display: workExInp ? "block" : "none",
                                    }}
                                    onClick={(e) => {
                                        setToggleV("add");
                                        setWorkExInp(false);
                                    }}
                                >
                                    {upWorkEx}
                                </p>
                                <textarea
                                    wrap="hard"
                                    style={{
                                        display: workExInp ? "none" : "block",
                                        width: "300px",
                                        fontSize: "16px",
                                        height: "100px",
                                    }}
                                    onChange={(e) => {
                                        setUpWorkEx(e.target.value);
                                    }}
                                    onBlur={(e) => {
                                        setWorkExInp(true);
                                    }}
                                    value={upWorkEx}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        padding: "10px 0 0 0",
                                    }}
                                    onClick={(e) => {
                                        setToggleV("add");
                                    }}
                                >
                                    <p>制作期間：</p>
                                    <p
                                        className="spaces"
                                        style={{
                                            display: periodInp
                                                ? "block"
                                                : "none",
                                        }}
                                        onClick={(e) => {
                                            setPeriodInp(false);
                                        }}
                                    >
                                        {upPeriod}
                                        {upPdate}
                                    </p>
                                    <div
                                        className="spaces"
                                        style={{
                                            display: periodInp
                                                ? "none"
                                                : "block",
                                        }}
                                    >
                                        <input
                                            type="number"
                                            value={upPeriod}
                                            style={{
                                                width: "50px",
                                                height: "20px",
                                            }}
                                            onChange={(e) => {
                                                setUpPeriod(e.target.value);
                                            }}
                                            onBlur={(e) => setPeriodInp(true)}
                                        />
                                        <select
                                            style={{ height: "20px" }}
                                            value={upPdate}
                                            onChange={(e) =>
                                                setUpPdate(e.target.value)
                                            }
                                            onBlur={(e) => setPeriodInp(true)}
                                        >
                                            <option value="週間">週間</option>
                                            <option value="ヶ月">ヶ月</option>
                                            <option value="年">年</option>
                                        </select>
                                    </div>
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
                                    display: inpCnt ? "flex" : "none",
                                }}
                                onClick={allReset}
                            >
                                リセット
                            </Button>
                            <Button
                                className="ins_btn"
                                variant="outlined"
                                endIcon={<RotateLeftIcon />}
                                sx={{
                                    backgroundColor: "#fff",
                                    fontSize: "18px",
                                    display: inpCnt ? "none" : "flex",
                                }}
                                onClick={upAllReset}
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
                                    display: inpCnt ? "flex" : "none",
                                }}
                            >
                                追加
                            </Button>
                            <Button
                                className="ins_btn"
                                variant="contained"
                                endIcon={<SendIcon />}
                                onClick={upPut}
                                sx={{
                                    fontSize: "18px",
                                    display: inpCnt ? "none" : "flex",
                                }}
                            >
                                更新
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Main };
