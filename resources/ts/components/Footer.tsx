import React from "react";

const Footer = () => {
    const footer: string = "フッター";
    const copy: string = "2022" + String.fromCharCode(169) + "watanabe kei";

    return (
        <div className="footer">
            <p>{footer}</p>
            <small>{copy}</small>
        </div>
    );
};

export { Footer };
