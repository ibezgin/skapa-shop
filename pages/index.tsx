import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SKAPA-WORLD</title>
        <meta name="description" content="SKAPA SHOP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <video
          controls={false}
          autoPlay={true}
          loop={true}
          className={styles.video}
          muted={true}
        >
          <source src="/logo.mp4" type="video/mp4" />
        </video>
        <Link href={"/menu"}>
          <a className={styles.pressStart}>Press Start</a>
        </Link>
        <p className={styles.about}>@2021 SKAPA</p>
      </main>
    </div>
  );
};

export default Home;
