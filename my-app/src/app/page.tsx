import React from "react";
import './globals.css';
import Head from "next/head";
import Navbar from "./beranda/components/Navbar";
import Hero from "./beranda/components/Hero";
import Hallo from "./beranda/components/Hallo";
import Layanan from "./beranda/components/Layanan";
import DaftarSection from "./beranda/components/DaftarSection";
import Footer from "./beranda/components/footer";

export default function Home() {
  return (
    <>
    <Head>
      <title>UMKM GEBANG PUTIH</title>
    </Head>

    <div>
      <Navbar />
      <Hero />
      <Hallo />
      <Layanan />
      <DaftarSection />
      <Footer />
    </div>
    </>
   
  );
}
