import { Row, Col } from "react-bootstrap";
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
      <Row>
        <Col md={4}>
          <small>Created by</small>
          <h6>Byunghun Lee</h6>
        </Col>
        <Col md={4}>
          <small>Version</small>
          <h6>version 2.0</h6>
        </Col>
        <Col md={4}>
          <small>Made with</small>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}
