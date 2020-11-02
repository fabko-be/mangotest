import React from "react";
import Head from "next/head";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import Top from "../components/downloads/top";
import Iframe from "../components/downloads/iframe";
import Table from "../components/downloads/table";
import style from "../styles/downloads.module.scss";

export default function Downloads(props) {
    const fullName = props.lychee.name.en;
    const name = fullName.replace(" ", "");

    return (
        <div>
            <Head>
                <title>
                    {`Download the latest version of Lychee Slicer 3 for SLA/Resin 3D
                    Printers`}
                </title>
            </Head>
            <Header />
            <div className={style.container}>
                <Top />
                <div className={style.tablecontainer}>
                    <Table
                        version={`Stable - current version: ${props.lychee.url.latest}`}
                        name={name}
                        dlversion={props.lychee.url.latest}
                    />
                    <Table
                        version={`Public beta - curent version: ${props.lychee.url.beta}`}
                        name={name}
                        dlversion={props.lychee.url.beta}
                    />
                </div>
                <div className={style.warningcontainer}>
                    <h2>{`Windows Users Please Read`}</h2>
                    <p>{`When launching the installer, you will get a security warning from Windows Smart Screen. Please skip this message by clicking on the “More Info” text.`}</p>
                </div>
            </div>
            <div className={style.iframecontainer}>
                <div className={style.iframecontainer__iframe}>
                    <div className={style.iframecontainer__iframe_content}>
                        <Iframe />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Downloads.getInitialProps = async () => {
    const res = await fetch(
        `https://api.mango3d.io/applications/a8ee1146-8d03-4b69-8a67-59009a3f9ee7`,
    );
    const data = await res.json();
    return {lychee: data};
};
