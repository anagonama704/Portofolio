import React, { useState } from "react";
import {
    TextField,
    Card,
    Button,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    FormControl,
} from "@mui/material";
import { AiOutlineSlack } from "react-icons/ai";
import { BsSlack } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Radio from "@mui/material/Radio";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import "../../css/contact.css";

const Contact = () => {
    // axios
    //     .get("http://localhost:8000/portfolio/Contact")
    //     .then(function (response) {
    //         console.log(response.request);
    //         console.log(response.status);
    //     });

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");

    const handleClick = () => {
        // axios
        //     .post("http://localhost:8000/api/mails", {
        //         username: name,
        //     })
        //     .then((response) => {
        //         console.log(response);
        //     });
        if (name && mail && text) {
            const params = new URLSearchParams();
            params.append("username", name);
            params.append("mails", mail);
            params.append("content", text);

            axios
                .post("http://localhost:8000/api/mails", params)
                .then(function (response: any) {
                    console.log(response);
                })
                .catch(function (error: any) {
                    console.log(error);
                });

            alert("送信完了");
            setName("");
            setMail("");
            setText("");
        } else {
            alert("全て入力してください");
        }
    };

    const sendSlackMessage = () => {
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
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
        });
        // const payload = {
        //     text: text,
        // };
        // try {
        //     axios.post(
        //         "https://hooks.slack.com/services/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",
        //         payload
        //     );
        // } catch (error) {
        //     console.log(error);
        // }
    };

    //xapp-1-A04LH0W3DC4-4694452254211-62e799fe1d12ccd8c558e155dbfc213c263d8395c20e5f1ad2009ad3017596c8

    return (
        <div id="contact">
            <Card id="co_card">
                <form action="http://localhost:8000/api/mails" method="post">
                    <div className="forms">
                        <h2>Contact</h2>
                        <div className="center">
                            <TextField
                                className="u_name"
                                label="お名前"
                                name="username"
                                multiline
                                maxRows={5}
                                variant="filled"
                                style={{
                                    margin: "20px 0 30px 0",
                                }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                className="mail"
                                label="メールアドレス"
                                name="mails"
                                multiline
                                maxRows={5}
                                variant="filled"
                                style={{
                                    margin: "0 0 30px 0",
                                }}
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                            <TextField
                                className="content"
                                label="お問い合わせ内容"
                                name="content"
                                multiline
                                maxRows={3}
                                variant="outlined"
                                style={{
                                    backgroundColor: "#00000010",
                                    margin: "0 0 30px 0",
                                }}
                                size="medium"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
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
                                        >
                                            <FormControlLabel
                                                sx={{
                                                    width: "300px",
                                                }}
                                                value="mail"
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
                                                value="slack"
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
                                    // type="submit"
                                    onClick={sendSlackMessage}
                                    className="sbm_btn"
                                    size="medium"
                                >
                                    ss送信する
                                </Button>
                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    // type="submit"
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
