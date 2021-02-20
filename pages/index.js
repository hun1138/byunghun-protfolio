import Head from "next/head";
import { PortNavbar } from "../components";
import { Introduction } from "../components";
import { AboutMe, TechStack, Timeline } from "../components";
import { Footer } from "../components";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Byunghun Lee" />
        <meta
          name="description"
          content="안녕하세요, Junior 개발자의 포트폴리오입니다"
        />
        <meta
          name="keywords"
          content="portfolio, web, developer, front end, back end, javascript, python, react, vue"
        />

        <title>Byunghun's Portfolio - Developer</title>
        <link rel="icon" href="/favicon-img/color-B.png" />
      </Head>

      <PortNavbar />
      <Introduction />

      <main>
        <AboutMe />
        <TechStack />
        <Timeline />
      </main>

      <Footer />
    </>
  );
}
