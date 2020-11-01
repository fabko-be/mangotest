import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Body from "../components/body";
import Header from "../components/header";

export default function Home() {
    return (
        <div>
            <Head />
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
