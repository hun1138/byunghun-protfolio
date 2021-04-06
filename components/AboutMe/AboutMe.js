import Image from "next/image";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { ContactMe } from "../ContactMe";
import styles from "../../styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <Container id="AboutMe_id" className="content-margin">
      <Col md={12} className="content-title">
        <h2>About Me</h2>
      </Col>
      <Row className="justify-content-md-center">
        {/*
        <Col sm={6}>
          <ContactMe />
        </Col>
        6*/}
        <Col sm={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>알고리즘을 좋아하는 개발자 입니다</ListGroup.Item>
            <ListGroup.Item>
              새로운 기술을 공부하고 사용하는것을 좋아합니다
            </ListGroup.Item>
            <ListGroup.Item>팀원들과 같이 있는것을 좋아합니다</ListGroup.Item>
            <ListGroup.Item>
              하나에 빠져서 몰두하는것을 좋아합니다
            </ListGroup.Item>
            <ListGroup.Item>
              늘 더 효율적인 방법이 있는지 생각합니다
            </ListGroup.Item>
            <ListGroup.Item>TDD를 좋아합니다</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
