import React from "react";
import Figure from "../shared/figure";
import style from "../../styles/index.module.scss";

const Industries = () => (
    <section className={style.industries}>
        <div className={style.industries__container}>
            <div className={style.industries__container__details}>
                <h2 className={style.industries__container__details_title}>
                    {`The SLA 3D Printing Slicer for all industries`}
                </h2>
                <p className={style.industries__container__details_text}>
                    {`Lychee Slicer is designed to fit all types of users in need of printing with a resin 3D printer. Our continuous development cycle allows us to add over the time features that answer the needs of all users and add functions specific to an industry.`}
                </p>
            </div>
            <div className={style.industries__container__gallery}>
                <Figure
                    style={style.industries__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/lychee-slicer-dark-figurines.jpg"
                    }
                    captiontext={"3D Model : "}
                    captionlink={
                        "https://www.myminifactory.com/users/DarkFigurines"
                    }
                    captionlink_text={"Dark Figurines"}
                    aftertitle={<h3>{`Figurines and Minis`}</h3>}
                />
                <Figure
                    style={style.industries__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/lychee-slicer-jewelry-ring.jpg"
                    }
                    captiontext={"3D Model : "}
                    captionlink={
                        "https://fr.3dexport.com/free-3dmodel-jewellery-ring-192865.htm"
                    }
                    captionlink_text={"Nirvanna"}
                    aftertitle={<h3>{`Jewelry Design`}</h3>}
                />
                <Figure
                    style={style.industries__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/dental-lychee-slicer.jpg"
                    }
                    captiontext={"3D Model : "}
                    captionlink={"https://3d-expert.fr/"}
                    captionlink_text={"3D Expert.fr"}
                    aftertitle={<h3>{`Dental and Orthodontics`}</h3>}
                />
                <Figure
                    style={style.industries__container__gallery__imagecontainer}
                    imgsource={
                        "https://mango3d.io/wp-content/uploads/2020/08/lychee-slicer-cad-3d-model.jpg"
                    }
                    aftertitle={<h3>{`Product Design / Makers`}</h3>}
                />
            </div>
        </div>
        <div className={style.industries__divider} />
    </section>
);
export default Industries;
