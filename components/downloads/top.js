import React from "react"
import style from "../../styles/downloads.module.scss"


const Top = () => {


    return(
        <div className={style.top}>
            <img src={"lychee_small.png"} className={style.top__image}></img>
            <div className={style.top__title}>
                <h1 className={style.top__title_main}>Download Lychee Slicer</h1>
                <h3 className={style.top__title_sub}>Get the latest version of Lychee Slicer, for Windows and Mac OS</h3>
            </div>
            <div className={style.top__details}>
                <p>
                    <strong>
                    Download the latest installer for Lychee Slicer. Use it for free or subscribe to our Pro version from within the application.<br></br>
                    Lychee Slicer also include an auto-update system for an easy upgrade to the latest version when installed.
                    </strong>
                </p>
            </div>
        </div>
    )
}

export default Top;