import React from "react";
import Head from "next/head";
import Footer from "../components/shared/footer";
import Top from "../components/index/top";
import Header from "../components/shared/header";
import Overview from "../components/index/overview";
import Industries from "../components/index/industries";
import Support from "../components/index/support";
import Rtoperations from "../components/index/rtoperations";
import Compatibility from "../components/index/compatibility";

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    {`Overview of Lychee Slicer for SLA 3D printers - Mango 3D`}
                </title>
            </Head>
            <Header />
            <Top />
            <Overview />
            <Industries />
            <Support />
            <Rtoperations />
            <Compatibility />
            <Footer />
        </div>
    );
}
