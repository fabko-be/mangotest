import style from "../../styles/footer.module.scss";
import React, {useState, useEffect} from "react";

export default function Footer() {
    // Déclaration des states au premier rendu
    const [burger, setBurger] = useState(false);
    const [isMobile, setIsMobile] = useState();
    const [firstLoad, setFirstLoad] = useState(true);

    // Fonction sur le click de l'icone burger
    // Basculement des states
    const handleClick = () => {
        setBurger(!burger);
        setFirstLoad(false);
    };

    useEffect(() => {
        // Déclaration de la fonction de basculement des states en fonction de la taille du viewport
        // Renvoie la largeur de celui-ci
        function handleResize() {
            const winWidth = window.innerWidth;
            if (winWidth >= 1025) {
                setIsMobile(false);
                setBurger(false);
                setFirstLoad(true);
            } else {
                setIsMobile(true);
                setBurger(false);
            }
            return winWidth;
        }
        // Appel de la fonction au premier rendu pour pouvoir basculer automatiquement les states au besoin en fonction de la taille de l'écran
        handleResize();
        // Event listener sur le DOM, lance la fonction au changement de taille
        window.addEventListener("resize", handleResize);
        // Clean du listener après chaque resize
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <footer className={style.container}>
            <div className={style.container__content}>
                <div className={style.container__content__citation}>
                    <p>
                        {`"We design and develop experiences that make people's
                        life easier."`}
                    </p>
                </div>
                <div className={style.container__content__colonnes}>
                    <div className={style.container__content__colonnes_about}>
                        <p>
                            {` Mango is a company with at its core a team of
                            developers and electronics engineers passionate
                            about 3D printing and related technologies, who
                            develop software and hardware solutions for
                            individuals, professionals and manufacturers. Mango
                            is based in Belgium and France.`}
                        </p>
                    </div>
                    <div className={style.container__content__colonnes_legals}>
                        <p>
                            {`Copyright 2020 © Mango3d.`}
                            <br />
                            {`All rights reserved, Mango, Lychee and the
                            associated logos are registered trademarks of Mango
                            SAS. All other trademarks are the property of their
                            respective owners.`}
                        </p>
                    </div>
                    <ul className={style.container__content__colonnes_links}>
                        <li>
                            <a href={"#"}>{`Contact us`}</a>
                        </li>
                        <li>
                            <a href={"#"}>{`Privacy policy`}</a>
                        </li>
                        <li>
                            <a href={"#"}>{`Terms and Conditions`}</a>
                        </li>
                    </ul>
                </div>
                <div className={style.container__content__burgercontainer}>
                    <i
                        style={{display: !isMobile ? "none" : ""}}
                        className={`${style.container__content__burgericon} fas fa-bars`}
                        onClick={handleClick}
                    />
                </div>
                <ul
                    // J'étais fatigué !!!
                    // Mais en gros, si je suis sur une fenêtre plus petite que 1025px ET que c'est le premier chargement alors
                    // Appliqué la class container__content__socials_fl
                    // si ce n'est pas le premier chargement et que le burger est fermé alors appliquer la class container__content__socials_close
                    // Si burger est ouvert charger la class container__content__socials
                    // et si on n'est pas sur mobile alors charger la classe container__content__socials_desktop
                    // Au final, c'est easy \o/
                    className={
                        isMobile
                            ? firstLoad
                                ? style.container__content__socials_fl
                                : !burger
                                ? style.container__content__socials_close
                                : style.container__content__socials
                            : style.container__content__socials_desktop
                    }>
                    <li>
                        <a href={"#"}>
                            <i className={"fab fa-discord fa-2x"} />
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <i className={"fab fa-instagram fa-2x"} />
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <i className={"fab fa-twitter fa-2x"} />
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <i className={"fab fa-facebook-f fa-2x"} />
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <i className={"fab fa-facebook-square fa-2x"} />
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <i className={"fab fa-youtube fa-2x"} />
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <i className={"fas fa-rss fa-2x"} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
