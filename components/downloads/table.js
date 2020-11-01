import React from "react";
import Button from "../../components/downloads/button";
import style from "../../styles/downloads.module.scss";

const icon = (
    <i className={"fas fa-cloud-download-alt"} style={{paddingRight: "10px"}} />
);
const baseUrl = "https://mango-lychee.s3.eu-west-3.amazonaws.com/";

const Table = props => (
    <div className={style.tablecontainer__table}>
        <div className={style.tablecontainer__table__title}>
            {props.version}
        </div>
        <div className={style.tablecontainer__table__buttoncontainer}>
            <Button
                content={`Windows 64-Bit`}
                download={`${baseUrl}${props.name}+Setup+${props.dlversion}.exe`}
                icon={icon}
            />
            <Button
                content={`Mac OS`}
                download={`${baseUrl}${props.name}-${props.dlversion}.dmg`}
                icon={icon}
            />
            <Button
                content={`Linux Deb`}
                download={`${baseUrl}${props.name}_${props.dlversion}_amd64.deb`}
                icon={icon}
            />
            <Button
                content={`Linux tar.gz`}
                download={`${baseUrl}${props.name}-${props.dlversion}.tar.gz`}
                icon={icon}
            />
            <Button
                content={`Linus App Img`}
                download={`${baseUrl}${props.name}-${props.dlversion}.AppImage`}
                icon={icon}
            />
        </div>
    </div>
);

export default Table;
