import style from "../styles/header.module.scss"
import React, {useState, useEffect} from "react";


export default function Header() {

    const [burger, setBurger] = useState(false);
    const [isMobile, setIsMobile] = useState();
    const [firstLoad, setFirstLoad] = useState(true)

    const handleClick = () => {
        setBurger(!burger);
        setFirstLoad(false);
    }

    useEffect(() => {
        
        function handleResize(){
            const winWidth = window.innerWidth;
            if(winWidth >= 1025){
                setIsMobile(false)
                setBurger(false)
                setFirstLoad(true)
            } else {
                setIsMobile(true)
                setBurger(false)
            }
            return winWidth;
        }
        
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, [])

    return(
        <div className={style.nav_container}>
            <nav className={style.navbar}>
                <a href={"#"}>
                    <img src={"https://mango3d.io/wp-content/uploads/2020/08/mango_logo_web2.png"} className={style.navbar__img}></img>
                </a>
                <ul className={isMobile? firstLoad? style.navbar__ul_fl : !burger? style.navbar__ul_close : style.navbar__ul : style.navbar__ul_desktop}>
                    <li className={style.navbar__li}><a href={`#`}>We do</a></li>
                    <li className={`${style.navbar__li} ${style.navbar__dropdown_controller}`}>
                        <a href ={`#`}>Lychee Slicer</a> 
                            <ul className={style.navbar__dropdown}>
                                <li><a href={`#`}>Overview</a></li>
                                <li><a href={`#`}>New features</a></li>
                                <li><a href={`#`}>Compare</a></li>
                                <li><a href={`#`}>3D Printers</a></li>
                                <li><a href={`#`}>Requirements</a></li>
                            </ul>
                    </li>
                    <li className={style.navbar__li}>
                        <a href={`#`}>Download</a>
                    </li>
                    <li className={style.navbar__li}>
                        <a href={`#`}>Pricing</a>
                    </li>
                    <li className={style.navbar__li}>
                        <a href={`#`}>OEM Slicer</a>
                    </li>
                    <li className={style.navbar__li}>
                        <a href={`#`}>News</a>
                    </li>
                </ul>
                <div>
                    <i id="burgerbutton" className={style.navbar__burgericon + " fas fa-bars"} onClick={handleClick}></i>
                </div>
            </nav>
        </div>
    )
}