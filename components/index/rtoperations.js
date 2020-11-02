import React from "react";
import style from "../../styles/index.module.scss";
import Figure from "../shared/figure";

const Rtoperations = () => (
    <section className={style.rtoperations}>
        <div className={style.rtoperations__container}>
            <div className={style.rtoperations__container__details}>
                <h2 className={style.rtoperations__container__details_title}>
                    {`Realtime operations`}
                </h2>
                <p className={style.rtoperations__container__details_text}>
                    {`Because printing a model can take hours (or days!), it is crucial to anticipate the 3D printing constraints, and being sure the optimizations you are doing, like hollowing, are done the right way. Lychee Slicer provides several tools and functions that are working realtime: check the result right away and reduce the risks of printing failures.`}
                </p>
            </div>
            <div className={style.rtoperations__container__gallery}>
                <Figure
                    title={<h3>{`Realtime Holowwing`}</h3>}
                    details={
                        <p>{`You can hollow your model directly in Lychee without using any other 3D software. Everything is real-time in the slicer view.`}</p>
                    }
                    style={
                        style.rtoperations__container__gallery__imagecontainer
                    }
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_hollowing-3.gif"
                    }
                />
                <Figure
                    title={<h3>{`Drain Holes`}</h3>}
                    details={
                        <p>{`Add drainage holes quickly and dynamically. You do not need to use an external 3D software.`}</p>
                    }
                    style={
                        style.rtoperations__container__gallery__imagecontainer
                    }
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_holes.jpg"
                    }
                />
                <Figure
                    title={<h3>{`Realtime Preview`}</h3>}
                    details={
                        <p>{`Preview your slices in real-time in the 3D view of the slicer, allowing you to check for potential 3D model imperfections.`}</p>
                    }
                    style={
                        style.rtoperations__container__gallery__imagecontainer
                    }
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_realtime_preview2.gif"
                    }
                />
            </div>
        </div>
    </section>
);

export default Rtoperations;
