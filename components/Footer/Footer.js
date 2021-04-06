import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  /*
    made with
    bootstrap version
    node version
    reactjs version
    nextjs version

    again contact
    */
  return (
    <footer className={styles.footer}>
      <Container>
      <Row className="justify-content-center">
        <Col xs={4} sm={3} md={2} lg={2} xl={2}>
          <small>Created by</small>
          <h6>Byunghun Lee</h6>
        </Col>
        <Col xs={4} sm={3} md={2} lg={2} xl={2}>
          <small>Version</small>
          <h6>version 2.0</h6>
        </Col>
        <Col xs={4} sm={3} md={2} lg={2} xl={2}>
          <small>Made with</small>
          <ul style={{paddingLeft: "20px"}}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
          </ul>
        </Col>
      </Row>
      </Container>
    </footer>
  );
}
