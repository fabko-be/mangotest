/* eslint-disable react/jsx-max-depth */
import style from "../styles/header.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useState, useEffect} from "react";

export default function Header() {
    //Déclaration des states burger si le burger est ouvert ou non, isMobile pour basculer l'affichage du header en mobile / desktop et firstLoad pour détecter le premier chargement ou non du style en mobile

    const [burger, setBurger] = useState(false);
    const [isMobile, setIsMobile] = useState();
    const [firstLoad, setFirstLoad] = useState(true);
    const [path, setPath] = useState();

    // basculement des states au clique sur le burger
    const handleBurgerClick = () => {
        setBurger(!burger);
        setFirstLoad(false);
    };
    // fonction de retour en haut de page au clique sur l'élément "scrollUp"
    const handleToTopFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const router = useRouter();

    useEffect(() => {
        // Récup de l'élément scroolUp
        const scrollUpButton = document.querySelector("#scrollUp");

        // Ecoute et mise à jour des states en fonction de la largeur de l'écran : return la largeur du viewport
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

        // déclaration de la fonction pour basculement des class suivant la position de la fenêtre si le scroll est actif
        function scrollFunction() {
            if (
                document.body.scrollTop > 30 ||
                document.documentElement.scrollTop > 30
            ) {
                scrollUpButton.classList.remove(style.totophidden);
                scrollUpButton.classList.remove(style.invisible);
                scrollUpButton.classList.add(style.totop);
            } else {
                scrollUpButton.classList.remove(style.invisible);
                scrollUpButton.classList.remove(style.totop);
                scrollUpButton.classList.add(style.totophidden);
            }
        }
        window.onscroll = function () {
            scrollFunction();
        };

        setPath(router.pathname);
        // Premier chargement des state au chargement de la page
        handleResize();
        // Lancement de la fonction sur la fenêtre change de taille
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={style.header}>
            {/* <div className={style.nav_container}> */}
            <nav className={style.navbar}>
                <a href={"#"}>
                    <img
                        src={
                            "https://mango3d.io/wp-content/uploads/2020/08/mango_logo_web2.png"
                        }
                        className={style.navbar__img}
                    />
                </a>
                {/* Il était un peu tard !!! */}
                <ul
                    className={
                        isMobile
                            ? firstLoad
                                ? style.navbar__ul_fl
                                : !burger
                                ? style.navbar__ul_close
                                : style.navbar__ul
                            : style.navbar__ul_desktop
                    }>
                    <li className={style.navbar__li}>
                        <a href={`#`}>{`We do`}</a>
                    </li>
                    <li
                        className={`${style.navbar__li} ${style.navbar__dropdown_controller}`}>
                        <Link href={`/`}>
                            <a style={{color: path === "/" ? "orange" : ""}}>
                                {`Lychee Slicer`}
                            </a>
                        </Link>
                        <span
                            className={style.navbar__dropdown_controller_icon}
                            style={{color: path === "/" ? "orange" : ""}}>
                            {``}
                        </span>
                        <ul className={style.navbar__dropdown}>
                            <li>
                                <Link href={`/`}>
                                    <a
                                        style={{
                                            color: path === "/" ? "orange" : "",
                                        }}>
                                        {`Overview`}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a href={`#`}>{`New features`}</a>
                            </li>
                            <li>
                                <a href={`#`}>{`Compare`}</a>
                            </li>
                            <li>
                                <a href={`#`}>{`3D Printers`}</a>
                            </li>
                            <li>
                                <a href={`#`}>{`Requirements`}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={style.navbar__li}>
                        <Link href={`/downloads`}>
                            <a
                                style={{
                                    color:
                                        path === "/downloads" ? "orange" : "",
                                }}>
                                {`Downloads`}
                            </a>
                        </Link>
                    </li>
                    <li className={style.navbar__li}>
                        <a href={`#`}>{`Pricing`}</a>
                    </li>
                    <li className={style.navbar__li}>
                        <a href={`#`}>{`OEM Slicer`}</a>
                    </li>
                    <li className={style.navbar__li}>
                        <a href={`#`}>{`News`}</a>
                    </li>
                </ul>
                <div className={style.navbar__burgercontainer}>
                    <i
                        id={"burgerbutton"}
                        className={`${style.navbar__burgericon} fas fa-bars`}
                        onClick={handleBurgerClick}
                    />
                </div>
            </nav>
            <div
                id={"scrollUp"}
                className={style.invisible}
                onClick={handleToTopFunction}>
                {" "}
                {`^`}{" "}
            </div>
            {/* </div> */}
        </header>
    );
}
