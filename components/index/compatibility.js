import React from "react";
import style from "../../styles/index.module.scss";
import Button from "../shared/button";

const Compatibility = () => (
    <section className={style.compatibility}>
        <div className={style.compatibility__divider} />
        <div className={style.compatibility__container}>
            <div className={style.compatibility__container__details}>
                <h2 className={style.compatibility__container__details_title}>
                    {`Lychee 3D printers compatibility list`}
                </h2>
                <p className={style.compatibility__container__details_text}>
                    {`Lychee Slicer supports a growing list of 3D Printers natively: prepare, optimize, and slice before exporting in a native format for your 3D printer. There is a high chance that your 3D printer is supported.`}
                </p>
                <Button
                    container_style={
                        style.compatibility__container__details__buttoncontainer
                    }
                    link={"#"}
                    style={
                        style.compatibility__container__details__buttoncontainer_button
                    }
                    content={`List of supported 3D printers`}
                    icon={<i className={"fal fa-search"} />}
                />
            </div>
        </div>
    </section>
);
export default Compatibility;
