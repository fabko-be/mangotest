import React from "react";
import Head from "next/head";
import Footer from "../components/shared/footer";
import Top from "../components/index/top";
import Header from "../components/shared/header";
import style from "../styles/index.module.scss";

export default function Home() {
    return (
        <div>
            <Head />
            <Header />
            <Top />
            <div className={style.container} />
            <Footer />
        </div>
    );
}
