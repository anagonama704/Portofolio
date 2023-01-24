import React from "react";
import { TextField, Card, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "../../css/contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <Card id="co_card">
                <form action="http://localhost:8000/api/mails" method="post">
                    <div className="forms">
                        <h2>contact</h2>
                        <div className="center">
                            <TextField
                                className="u_name"
                                label="お名前"
                                name="username"
                                multiline
                                maxRows={5}
                                variant="filled"
                                style={{
                                    margin: "50px 0 0 0",
                                }}
                            />
                            <TextField
                                className="mail"
                                label="メールアドレス"
                                name="mails"
                                multiline
                                maxRows={5}
                                variant="filled"
                                style={{
                                    margin: "30px 0 0 0",
                                }}
                            />
                            <TextField
                                className="content"
                                label="お問い合わせ内容"
                                name="content"
                                multiline
                                maxRows={5}
                                variant="outlined"
                                style={{
                                    backgroundColor: "#00000010",
                                    margin: "50px 0 0 0",
                                }}
                                size="medium"
                            />
                        </div>
                        <div id="btn">
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                                type="submit"
                                className="sbm_btn"
                            >
                                送信する
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};
export { Contact };
