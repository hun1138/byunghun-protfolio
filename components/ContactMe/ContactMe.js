import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../../styles/ContactMe.module.css";

export default function ContactMe() {
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    setWindowHeight(window.screen.availHeight - 240);
  }, [])

  return (
    <Container style={{minHeight: windowHeight}}>
      <Row className={`justify-content-center align-items-center ${styles.introStyle}`}>
        <Col xs={9} sm={6} md={5} lg={4} xl={3}>
        <div className={styles.helloStyle}>안녕하세요!</div>
            <h5 style={{fontWeight: "lighter"}}>도전을 좋아하는 개발자,</h5>
            <h5 style={{fontWeight: "lighter"}}><div className={styles.nameStyle}>이병훈</div> 입니다</h5>
            </Col>
      </Row>
        <Row className={`justify-content-center align-items-center ${styles.contentMargin}`}>
          <Col xs={7} sm={6} md={5} lg={4} xl={3}>
            <Image
              src="/my-img/my-circle-cropped.png"
              width={1080}
              height={1080}
              layout="intrinsic"
              alt="Byunghun's image"
            />
          </Col>
          <Col xs={9} sm={7} md={6} lg={5} xl={4} className={styles.infoMargin}>
            <h3>Contact & Channel</h3>

            <ul className={styles.listStyle}>
              <li><i className="fas fa-phone-square fa-lg" style={{color: "#34A853"}}></i> : 010-4453-3946</li>
              <li><i className="fas fa-envelope-square fa-lg" style={{color: "#BB001B"}}></i> : qwsdxc313@gmail.com</li>
              <li><i className="fab fa-github fa-lg"></i> : <a href="https://github.com/hun1138">https://github.com/hun1138</a></li>
              <li><i className="fas fa-medal fa-lg" style={{color: "#D07651"}}></i> Baekjoon Online Judge ID</li>
              <ul>
                <li><a href="https://www.acmicpc.net/user/hun1138">hun1138</a></li>
                <li><a href="https://www.acmicpc.net/user/qwsdxc313">qwsdxc313</a></li>
                <li><a href="https://www.acmicpc.net/user/myungchi1138">myungchi1138</a></li>
              </ul>
            </ul>
          </Col>
        </Row>
    </Container>
  );
}
