import style from "../styles/footer.module.scss"

export default function Footer(){
    return (
        <div className={style.container}>
            <div className={style.container__content}>
                <div className={style.container__content__citation}>
                    <p>
                    "We design and develop experiences that make people's life easier."
                    </p>
                </div>
                <div className={style.container__content__colonnes}>
                    <div className={style.container__content__colonnes_about}>
                        <p>
                        Mango is a company with at its core a team of developers and electronics engineers passionate about 3D printing and related technologies, who develop software and hardware solutions for individuals, professionals and manufacturers. 
                        Mango is based in Belgium and France.
                        </p>
                    </div>
                    <div className={style.container__content__colonnes_legals}>
                        <p>Copyright 2020 © Mango3d.<br/>
                        All rights reserved, Mango, Lychee and the associated logos are registered trademarks of Mango SAS. All other trademarks are the property of their respective owners.</p>
                    </div>
                    <ul className={style.container__content__colonnes_links}>
                        <li><a href={"#"}>Contact us</a></li>
                        <li><a href={"#"}>Privacy policy</a></li>
                        <li><a href={"#"}>Terms and Conditions</a></li>
                    </ul>
                </div>
                <ul className={style.container__content__socials}>
                        <li><a href={"#"}><i class="fab fa-discord fa-3x"></i></a></li>
                        <li><a href={"#"}><i class="fab fa-instagram fa-3x"></i></a></li>
                        <li><a href={"#"}><i class="fab fa-twitter fa-3x"></i></a></li>
                        <li><a href={"#"}><i class="fab fa-facebook-f fa-3x"></i></a></li>
                        <li><a href={"#"}><i class="fab fa-facebook-square fa-3x"></i></a></li>
                        <li><a href={"#"}><i class="fab fa-youtube fa-3x"></i></a></li>
                        <li><a href={"#"}><i class="fas fa-rss fa-3x"></i></a></li>
                </ul>
            </div>
        </div>
    )
}