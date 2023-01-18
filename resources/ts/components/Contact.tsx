import React from "react";
import { TextField, Card } from "@mui/material";
import "../../css/contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <Card id="co_card">
                <h2>contact</h2>
                <TextField
                    id="filled-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={5}
                    variant="filled"
                />
            </Card>
        </div>
    );
};
export { Contact };
