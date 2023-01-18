import React from "react";
import { TextField, Card } from "@mui/material";
import "../../css/contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <Card id="co_card">
                <form action="" method="">
                    <div className="forms">
                        <h2>contact</h2>
                        <TextField
                            className="u_name"
                            label="お名前"
                            name="username"
                            multiline
                            maxRows={5}
                            variant="filled"
                        />
                        <TextField
                            className="u_name"
                            label="お名前"
                            name="username"
                            multiline
                            maxRows={5}
                            variant="filled"
                        />
                        <TextField
                            className="u_name"
                            label="お名前"
                            name="username"
                            multiline
                            maxRows={5}
                            variant="filled"
                        />
                    </div>
                </form>
            </Card>
        </div>
    );
};
export { Contact };
