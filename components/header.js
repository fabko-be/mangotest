import style from "../styles/header.module.scss"
import React, {useState, useEffect} from "react";


export default function Header() {

    const [burger, setBurger] = useState(false);
    const [isMobile, setIsMobile] = useState();
    const [firstLoad, setFirstLoad] = useState(true)

    const handleBurgerClick = () => {
        setBurger(!burger);
        setFirstLoad(false);
    }

    const handleToTopFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    useEffect(() => {

        const scrollUpButton = document.getElementById("scrollUp");
        
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

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                scrollUpButton.classList.remove(style.totophidden);
                scrollUpButton.classList.add(style.totop);
            } else {
                scrollUpButton.classList.remove(style.totop);
                scrollUpButton.classList.add(style.totophidden);
            //   scrollUpButton.style.display = "none";
            }
          }
        
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, [])

    return(
        <header className={style.nav_container}>
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
                <div className={style.navbar__burgercontainer}>
                    <i id="burgerbutton" className={style.navbar__burgericon + " fas fa-bars"} onClick={handleBurgerClick}></i>
                </div>
            </nav>
            <div id={"scrollUp"} className={style.toTop} onClick={handleToTopFunction}> ^ </div>
        </header>
    )
}