import { Container, Row, Col, ListGroup } from "react-bootstrap";

import styles from "../../../styles/Timeline.module.css";

export default function TimelineItem({ date, title, content }) {
  return (
    <li className={styles["timeline-item"]}>
      <div className={styles["timeline-info"]}>
        <span>{date}</span>
      </div>
      <div className={styles["timeline-marker"]}></div>
      <div className={styles["timeline-content"]}>
        <h5 className={styles["timeline-title"]}>{title}</h5>
        <p className={styles["content-color"]}>{content}</p>
      </div>
    </li>
  );
}
