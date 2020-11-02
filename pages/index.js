import React from "react";
import Head from "next/head";
import Footer from "../components/shared/footer";
import Top from "../components/index/top";
import Header from "../components/shared/header";
import Overview from "../components/index/overview";
import Industries from "../components/index/industries";
import Support from "../components/index/support";
import Rtoperations from "../components/index/rtoperations";

export default function Home() {
    return (
        <div>
            <Head />
            <Header />
            <Top />
            <Overview />
            <Industries />
            <Support />
            <Rtoperations />
            <Footer />
        </div>
    );
}
