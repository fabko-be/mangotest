import React from "react";
import style from "../../styles/index.module.scss";

const Top = () => (
    <div className={style.top}>
        <img src={"lychee_small.png"} className={style.top__image} />
        <div className={style.top__title}>
            <h1>{`lychee slycer 3`}</h1>
            <h2>
                {`A POWERFUL AND VERSATILE SLICER FOR SLA RESIN 3D PRINTERS`}
            </h2>
        </div>
    </div>
);

export default Top;
