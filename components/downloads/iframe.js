import React from "react"
import style from "../../styles/downloads.module.scss"

export default function Iframe() {
    // console.log("test")
    return(
        <div className={style.iframe}>
            <iframe width="100%" height="800" src="https://mango3d.io/change-log-lychee-slicer/" frameBorder="0"></iframe>
        </div>
    )
}