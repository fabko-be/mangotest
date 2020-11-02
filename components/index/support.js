import React from "react";
import style from "../../styles/index.module.scss";
import Figure from "../shared/figure";

const Support = () => (
    <section className={style.support}>
        <div className={style.support__divider_top} />
        <div className={style.support__container}>
            <div className={style.support__container__details}>
                <h2 className={style.support__container__details_title}>
                    {`Advanced Support Management`}
                </h2>
                <p className={style.support__container__details_text}>
                    {`Our development heavily focuses on improving supports algorithms to produce optimum results for easy and quick prints. We also provide smart and powerful tools for advanced users who need full control over their supports.`}
                </p>
            </div>
            <div className={style.support__container__gallery}>
                <Figure
                    title={<h3>{`Parenting & Bracing`}</h3>}
                    style={style.support__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_auto_bracing2.gif"
                    }
                    description={
                        <p>{`Automatically create connections between supports for improved strength and saving resin cost.`}</p>
                    }
                />
                <Figure
                    title={<h3>{`Island Detector`}</h3>}
                    style={style.support__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_island2.gif"
                    }
                    description={
                        <p>{`Find easily areas that require supports with the detection of islands. Spot them in seconds.`}</p>
                    }
                />
                <Figure
                    title={<h3>{`Mirror Support`}</h3>}
                    style={style.support__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_mirror_support.jpg"
                    }
                    description={
                        <p>{`Place your supports symmetrically with the help of the mirror option saving you production time.`}</p>
                    }
                />
                <Figure
                    title={<h3>{`Overhand Preview`}</h3>}
                    style={style.support__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_overhang2.gif"
                    }
                    description={
                        <p>{`Lychee shows you in real-time areas that need supports. Add supports to reduce or remove these areas.`}</p>
                    }
                />
                <Figure
                    title={<h3>{`Dynamic Raft`}</h3>}
                    style={style.support__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/feature_raft.jpg"
                    }
                    description={
                        <p>{`Several raft shapes that fit your model can be added to ensure a strong bed adhesion.`}</p>
                    }
                />
            </div>
        </div>
        <div className={style.support__divider_bottom} />
    </section>
);

export default Support;
