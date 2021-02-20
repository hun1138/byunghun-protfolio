import Image from "next/image";
import { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import styles from "../../styles/Introduction.module.css";

export default function Introduction() {
  const [introIdx, setIntroIdx] = useState(0);
  const [introStr, setIntroStr] = useState("");

  const introList = [
    "Junior",
    "Javascript",
    "Python",
    "Front-End",
    "Back-End",
    "Full Stack",
  ];

  useEffect(() => {
    typewriter(introList[introIdx]);
  }, [introIdx]);

  function typewriter(strTemp) {
    let t = 0;
    const ms = 200;

    for (let i = 1; i <= strTemp.length; i++, t++) {
      setTimeout(() => {
        setIntroStr((introStr) => strTemp.slice(0, i));
      }, t * ms);
    }

    t += 7;

    for (let i = strTemp.length; i >= 0; i--, t++) {
      setTimeout(() => {
        setIntroStr((introStr) => strTemp.slice(0, i));
      }, t * ms);
    }

    setTimeout(() => {
      setIntroIdx((introIdx + 1) % 6);
    }, t * ms);
  }

  return (
    <Row id="Introduction_id">
      <Col className={styles.colPadding}>
        <Image
          src="/background-img/desert-cut.jpg"
          width={2560}
          height={616}
          layout="responsive"
          alt="Introduction background image"
        />
        <div className={styles.centered}>
          <h3>안녕하세요,</h3>

          <h4>{introStr} 개발자</h4>
          <h1>
            <strong>이병훈</strong> 입니다
          </h1>
        </div>
      </Col>
    </Row>
  );
}
