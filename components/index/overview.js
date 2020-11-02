import React from "react";
import Button from "../shared/button";
import style from "../../styles/index.module.scss";

const Overview = () => (
    <section className={style.overview}>
        <div className={style.overview__container}>
            <div className={style.overview__container__details}>
                <p className={style.overview__container__details_text}>
                    {`With Lychee, prepare your 3D models for 3D printing: define the best orientation, create supports automatically, or manually, preview before sending them to your 3D printer.`}
                </p>
                <p className={style.overview__container__details_text}>
                    {`The Slicer is the mandatory companion for your SLA/resin 3D Printer, whatever it is a Photon-S from Anycubic, a Mars Pro from Elegoo, or many other 3D printers. It helps you prepare your model with ease and precision, slice your models with accuracy and give you a lot of cool features like real-time hollowing, island detector, advanced support edition, and more.`}
                </p>
            </div>
            <div className={style.overview__container__presentation}>
                <figure
                    className={
                        style.overview__container__presentation__imagecontainer
                    }>
                    <img
                        src={
                            "https://mango3d.io/wp-content/uploads/2020/08/lychee-slicer-overview-interface.png"
                        }
                    />
                    <figcaption>
                        {`3D model : `}
                        <a href={"https://www.patreon.com/ArtisanGuild"}>
                            {`Artisan Guild`}
                        </a>
                    </figcaption>
                </figure>
                <div
                    className={
                        style.overview__container__presentation__textcontainer
                    }>
                    <div
                        className={
                            style.overview__container__presentation__textcontainer__sub
                        }>
                        <h3
                            className={
                                style.overview__container__presentation__textcontainer__sub_title
                            }>
                            {`EASY TO USE INTERFACE`}
                        </h3>
                        <p
                            className={
                                style.overview__container__presentation__textcontainer__sub_content
                            }>
                            {`With its easy to use interface, available in many languages, you will get to work with Lychee Slicer in just a few minutes.`}
                        </p>
                    </div>
                    <div
                        className={
                            style.overview__container__presentation__textcontainer__sub
                        }>
                        <h3
                            className={
                                style.overview__container__presentation__textcontainer__sub_title
                            }>
                            {`FULL AUTOMATIC MODE WITH MAGIC MENU`}
                        </h3>
                        <p
                            className={
                                style.overview__container__presentation__textcontainer__sub_content
                            }>
                            {`Thanks to the Magic Menu, you can automate the preparation of your model. Save time by automating the orientation, Supports addition, optimizing, and adding a raft to ensure printability.`}
                        </p>
                    </div>
                    <div
                        className={
                            style.overview__container__presentation__textcontainer__sub
                        }>
                        <h3
                            className={
                                style.overview__container__presentation__textcontainer__sub_title
                            }>
                            {`POWERFUL AUTOMATIC SUPPORTS`}
                        </h3>
                        <p
                            className={
                                style.overview__container__presentation__textcontainer__sub_content
                            }>
                            {`3D print Supports, these tiny pillars, are a crucial element for successful prints. But mastering these supports can be science by itself. Lychee provides very powerful and smart automatic supports algorithms.`}
                        </p>
                    </div>
                    <div
                        className={
                            style.overview__container__presentation__textcontainer__sub
                        }>
                        <h3
                            className={
                                style.overview__container__presentation__textcontainer__sub_title
                            }>
                            {`BE IN CONTROL`}
                        </h3>
                        <p
                            className={
                                style.overview__container__presentation__textcontainer__sub_content
                            }>
                            {`Lychee Slicer offers more demanding users the control over the whole 3D printing preparation process and, in particular, the Supports control. With advanced tools and settings, it is possible to create Supports for the most challenging 3D models.`}
                        </p>
                    </div>
                    <div
                        className={
                            style.overview__container__presentation__textcontainer__sub
                        }>
                        <h3
                            className={
                                style.overview__container__presentation__textcontainer__sub_title
                            }>
                            {`3D PRINTED SUPPORTED`}
                        </h3>
                        <p
                            className={
                                style.overview__container__presentation__textcontainer__sub_content
                            }>
                            {`Chances are your printer is supported by Lychee: Anycubic Photon S, Longer Orange 30, Elegoo Mars Pro, to name a few. And we’re adding more regularly.`}
                        </p>
                    </div>
                </div>
            </div>
            <Button
                container_style={style.overview__container__buttoncontainer}
                style={style.overview__container__buttoncontainer_button}
                icon={<i className={"fal fa-search"} />}
                content={`What's new in Lychee Slicer 3`}
            />
        </div>
        <div className={style.overview__divider} />
    </section>
);

export default Overview;
