import { Container, Row, Col, ListGroup } from "react-bootstrap";

import styles from "../../../styles/Timeline.module.css";

export default function TimelineMarker({ date }) {
  return (
    <li className={`${styles["timeline-item"]} ${styles.period}`}>
      <div className={styles["timeline-info"]}></div>
      <div className={styles["timeline-marker"]}></div>
      <div className={styles["timeline-content"]}>
        <h3 className={styles["timeline-title"]}>{date}</h3>
      </div>
    </li>
  );
}
