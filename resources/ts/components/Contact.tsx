import React, { ReactEventHandler, useState } from "react";
import {
    TextField,
    Card,
    Button,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    FormControl,
} from "@mui/material";
import IconButton from "@mui/material";
import { Clear } from "@mui/icons-material";
import { AiOutlineSlack } from "react-icons/ai";
import { BsSlack } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Radio from "@mui/material/Radio";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import "../../css/contact.css";

const Contact = () => {
    //useStateの初期化
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");
    const [rValue, setRValue] = useState("");
    //ラジオボタンの値取得
    const radioState = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setRValue(event.target.value);
    };

    const handleClick = () => {
        //送信方法の分岐
        if (rValue == "gmail") {
            if (name && mail && text) {
                //g-mailでの送信
                const params = new URLSearchParams();
                params.append("username", name);
                params.append("mails", mail);
                params.append("content", text);
                //MailControllerとの通信
                axios
                    .post("http://localhost:8000/api/mails", params)
                    .then(function (response: any) {
                        console.log(response);
                    })
                    .catch(function (error: any) {
                        console.log(error);
                    });

                alert("送信完了");
                //値の初期化
                setName("");
                setMail("");
                setText("");
                setRValue("");
            } else {
                alert("全て入力してください");
            }
        } else if (rValue == "slack") {
            if (name && mail && text) {
                //Slackでの送信
                const payload = {
                    text:
                        "お名前：" +
                        name +
                        "様" +
                        "\nメールアドレス：" +
                        mail +
                        "\nお問い合わせ内容：" +
                        text,
                };
                const url =
                    "https://hooks.slack.com/services/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";
                //SlackAPIとの通信
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(payload),
                });

                alert("送信完了");
                //値の初期化
                setName("");
                setMail("");
                setText("");
                setRValue("");
            } else {
                alert("全て入力してください");
            }
        } else {
            alert("送信方法を選択してください");
        }
    };

    //xapp-1-A04LH0W3DC4-4694452254211-62e799fe1d12ccd8c558e155dbfc213c263d8395c20e5f1ad2009ad3017596c8

    return (
        <div id="contact">
            <Card id="co_card">
                <form method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="forms">
                        <h2>Contact</h2>
                        <div className="center">
                            <TextField
                                className="u_name"
                                label="お名前"
                                name="username"
                                variant="outlined"
                                style={{
                                    backgroundColor: "#00000010",
                                    margin: "20px 0 30px 0",
                                }}
                                value={name}
                                InputProps={{
                                    endAdornment: (
                                        <Button
                                            className="crear"
                                            sx={{
                                                visibility: name
                                                    ? "visible"
                                                    : "hidden",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "transparent",
                                                },
                                            }}
                                            onClick={() => {
                                                setName("");
                                            }}
                                        >
                                            <Clear
                                                sx={{
                                                    color: "#999",
                                                }}
                                            />
                                        </Button>
                                    ),
                                }}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                className="mail"
                                label="メールアドレス"
                                name="mails"
                                variant="outlined"
                                style={{
                                    backgroundColor: "#00000010",
                                    margin: "0 0 30px 0",
                                }}
                                value={mail}
                                InputProps={{
                                    endAdornment: (
                                        <Button
                                            className="crear"
                                            sx={{
                                                visibility: mail
                                                    ? "visible"
                                                    : "hidden",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "transparent",
                                                },
                                            }}
                                            onClick={() => {
                                                setMail("");
                                            }}
                                            variant="text"
                                            style={{
                                                backgroundColor: "transparent",
                                            }}
                                        >
                                            <Clear
                                                sx={{
                                                    color: "#999",
                                                }}
                                            />
                                        </Button>
                                    ),
                                }}
                                onChange={(e) => {
                                    setMail(e.target.value);
                                }}
                            />
                            <TextField
                                className="content"
                                label="お問い合わせ内容"
                                name="content"
                                multiline
                                rows={3}
                                variant="outlined"
                                style={{
                                    backgroundColor: "#00000010",
                                    margin: "0 0 30px 0",
                                }}
                                size="medium"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                InputProps={{
                                    endAdornment: (
                                        <Button
                                            className="crear"
                                            sx={{
                                                visibility: text
                                                    ? "visible"
                                                    : "hidden",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "transparent",
                                                },
                                            }}
                                            onClick={() => {
                                                setText("");
                                            }}
                                            variant="text"
                                            style={{
                                                backgroundColor: "transparent",
                                            }}
                                        >
                                            <Clear
                                                sx={{
                                                    color: "#999",
                                                }}
                                            />
                                        </Button>
                                    ),
                                }}
                            />
                        </div>
                        <div className="btn_g">
                            <div className="selects">
                                <FormControl>
                                    <FormLabel>送信方法</FormLabel>
                                    <div className="select">
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                            value={rValue}
                                            onChange={radioState}
                                        >
                                            <FormControlLabel
                                                id="slack"
                                                sx={{
                                                    width: "300px",
                                                }}
                                                value="slack"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex">
                                                        <BsSlack size={20} />
                                                        <p>Slackで送信</p>
                                                    </div>
                                                }
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                id="gmail"
                                                value="gmail"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex">
                                                        <SiGmail size={20} />
                                                        <p>Gmailで送信</p>
                                                    </div>
                                                }
                                            />
                                        </RadioGroup>
                                    </div>
                                </FormControl>
                            </div>
                            <div className="btn">
                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={handleClick}
                                    className="sbm_btn"
                                >
                                    送信する
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};
export { Contact };
