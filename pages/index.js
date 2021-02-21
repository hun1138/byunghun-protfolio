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
          content="byunghun lee, 이병훈, portfolio, 포트폴리오, web, 웹, developer, 개발자, front end, 프론트엔드, 프론트앤드, back end, 백엔드, 백앤드, javascript, 자바스크립트, python, 파이썬, 파이선, react, 리엑트, 리액트, vue, 뷰"
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