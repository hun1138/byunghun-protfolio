import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";

import styles from "../../../styles/Timeline.module.css";

export default function TechStackItem({ imgSrc, title, content }) {
  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      {/*
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>*/}
    </Card>
  );
}
