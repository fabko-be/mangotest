import React from "react";

const Button = props => (
    <div className={props.container_style}>
        <a href={props.link} className={props.style}>
            {props.icon}
            {props.content}
        </a>
    </div>
);

export default Button;
