import React from "react";
import Button from "../../components/shared/button";
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
                link={`${baseUrl}${props.name}+Setup+${props.dlversion}.exe`}
                icon={icon}
                container_style={
                    style.tablecontainer__table__buttoncontainer__button
                }
                style={
                    style.tablecontainer__table__buttoncontainer__button_link
                }
            />
            <Button
                content={`Mac OS`}
                link={`${baseUrl}${props.name}-${props.dlversion}.dmg`}
                icon={icon}
                container_style={
                    style.tablecontainer__table__buttoncontainer__button
                }
                style={
                    style.tablecontainer__table__buttoncontainer__button_link
                }
            />
            <Button
                content={`Linux Deb`}
                link={`${baseUrl}${props.name}_${props.dlversion}_amd64.deb`}
                icon={icon}
                container_style={
                    style.tablecontainer__table__buttoncontainer__button
                }
                style={
                    style.tablecontainer__table__buttoncontainer__button_link
                }
            />
            <Button
                content={`Linux tar.gz`}
                link={`${baseUrl}${props.name}-${props.dlversion}.tar.gz`}
                icon={icon}
                container_style={
                    style.tablecontainer__table__buttoncontainer__button
                }
                style={
                    style.tablecontainer__table__buttoncontainer__button_link
                }
            />
            <Button
                content={`Linus App Img`}
                link={`${baseUrl}${props.name}-${props.dlversion}.AppImage`}
                icon={icon}
                container_style={
                    style.tablecontainer__table__buttoncontainer__button
                }
                style={
                    style.tablecontainer__table__buttoncontainer__button_link
                }
            />
        </div>
    </div>
);

export default Table;
