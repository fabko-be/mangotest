import React from "react"
import Button from "../../components/downloads/button"
import style from "../../styles/downloads.module.scss"

const Table = props => {


    return(
            <div className={style.tablecontainer__table}>
                <div className={style.tablecontainer__table__title}>
                    {props.version}
                </div>
                <div className={style.tablecontainer__table__buttoncontainer}>
                    <Button content={`Windows 64-Bit`} download={props.number} icon={<i className="fas fa-cloud-download-alt" style={{paddingRight: "10px"}}></i>}/>
                    <Button content={`Mac OS`} download={props.number} icon={<i className="fas fa-cloud-download-alt" style={{paddingRight: "10px"}}></i>}/>
                    <Button content={`Linux Deb`} download={props.number}  icon={<i className="fas fa-cloud-download-alt" style={{paddingRight: "10px"}}></i>}/>
                    <Button content={`Linux tar.gz`} download={props.number}  icon={<i className="fas fa-cloud-download-alt" style={{paddingRight: "10px"}}></i>}/>
                    <Button content={`Linus App Img`} download={props.number}  icon={<i className="fas fa-cloud-download-alt" style={{paddingRight: "10px"}}></i>}/>
                </div>
            </div>
    )
}

export default Table;