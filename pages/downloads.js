import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Top from "../components/downloads/top"
import Iframe from "../components/downloads/iframe"
import Table from "../components/downloads/table"
import style from "../styles/downloads.module.scss"
import Link from "next/link"



export default function Downloads(props) {
    const fullName = props.lychee.name.en;
    const name = fullName.replace(" ", "");
    console.log(name)

    return(
        <div>
            <title>Download the latest version of Lychee Slicer 3 for SLA/Resin 3D Printers</title>
            <Header />
            <div  className={style.container}>
                <Top/>
                <div className={style.tablecontainer}>
                    <Table version={`Stable - current version: ${props.lychee.url.latest}`} nummber={props.lychee.url.latest}/>
                    <Table version={`Public beta - curent version: ${props.lychee.url.beta}`}/>
                </div>
                <Iframe />
            </div>
            <Footer />
        </div>
    )
}

Downloads.getInitialProps= async() => {

    const res = await fetch(`https://api.mango3d.io/applications/a8ee1146-8d03-4b69-8a67-59009a3f9ee7`);
    const data = await res.json();
    console.log(data);
    return {lychee: data}
    }

