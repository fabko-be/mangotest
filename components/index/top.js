import React from "react";
import style from "../../styles/index.module.scss";
import Button from "../../components/shared/button";

const Top = () => (
    <div className={style.top}>
        <img src={"lychee_small.png"} className={style.top__image} />
        <div className={style.top__title}>
            <h1>{`lychee slycer 3`}</h1>
            <h2>
                {`A POWERFUL AND VERSATILE SLICER FOR SLA RESIN 3D PRINTERS`}
            </h2>
        </div>
        <div className={style.top__buttonscontainer}>
            <Button
                container_style={style.top__buttonscontainer__buttoncontainer}
                style={style.top__buttonscontainer__buttoncontainer_button}
                content={`Get Lychee Slicer 3 Free Edition`}
                link={`#`}
            />
            <Button
                container_style={style.top__buttonscontainer__buttoncontainer}
                style={style.top__buttonscontainer__buttoncontainer_button}
                content={`Compare Versions`}
                link={`#`}
            />
        </div>
    </div>
);

export default Top;
