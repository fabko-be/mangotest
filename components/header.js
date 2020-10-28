import style from "../styles/header.module.scss"

export default function Header() {
    return(
        <div className={style.nav_container}>
            <nav className={style.navbar}>
                <a href={"#"}>
                    <img src={"https://mango3d.io/wp-content/uploads/2020/08/mango_logo_web2.png"} className={style.navbar__img}></img>
                </a>
                <ul className={style.navbar__ul}>
                    <li className={style.navbar__li}><a href={`#`}>We do</a></li>
                    <li className={`${style.navbar__li} ${style.navbar__dropdown_controller}`}>
                        <a href ={`#`}>Lychee Slicer</a> 
                            <ul className={style.navbar__dropdown}>
                                <li><a href={`#`}>Overview</a></li>
                                <li><a href={`#`}>New features</a></li>
                                <li><a href={`#`}>Compare</a></li>
                                <li><a href={`#`}>3D Printers</a></li>
                                <li><a href={`#`}>Reuirements</a></li>
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
            </nav>
        </div>
    )
}