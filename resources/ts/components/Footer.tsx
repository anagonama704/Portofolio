import React from "react";
import "../../css/footer.css";

const Footer = () => {
    const footer: string = "フッター";
    const copy: string = "2022 " + String.fromCharCode(169) + " watanabe kei";

    return (
        <div id="footer">
            <small>{copy}</small>
        </div>
    );
};

export { Footer };
