import React from "react";
import style from "../../styles/downloads.module.scss";

const Button = props => (
    <div className={style.tablecontainer__table__buttoncontainer__button}>
        <a
            href={props.download}
            className={
                style.tablecontainer__table__buttoncontainer__button_link
            }>
            {props.name}
            {props.icon}
            {props.content}
        </a>
    </div>
);

export default Button;
