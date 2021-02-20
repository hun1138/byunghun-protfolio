import Image from "next/image";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function ContactMe() {
  return (
    <Card>
      <Card.Header>Contact Me</Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <Image
              src="/my-img/my-full.jpg"
              width={400}
              height={300}
              layout="intrinsic"
              alt="Byunghun's image"
            />
          </Col>
          <Col md={6} className="my-auto">
            <Card.Text>Name : 이병훈</Card.Text>
            <Card.Text>University : 숭실대학교 컴퓨터학부</Card.Text>
            <Card.Text>Mobile : 010-4453-3946</Card.Text>
            <Card.Text>E-mail : qwsdxc313@gmail.com</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
