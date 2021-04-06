import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <Container id="AboutMe_id" className="content-margin">
      <Row className="justify-content-center">
      <Col>
        <div className="content-title">About Me</div>
      </Col>
      </Row>
      
      <Row className="justify-content-center">
      <Col xs={12} sm={10} md={6} lg={4}>
        <div className="content-subtitle">Introduction</div>
        </Col>
        <Col xs={12} sm={10} md={6} lg={4}>
          <ul>
            <li>알고리즘을 좋아하는 개발자 입니다</li>
            <li>새로운 기술을 공부하고 사용하는것을 좋아합니다</li>
            <li>팀원들과 같이 있는것을 좋아합니다</li>
            <li>하나에 빠져서 몰두하는것을 좋아합니다</li>
            <li>늘 더 효율적인 방법이 있는지 생각합니다</li>
            <li>TDD를 좋아합니다</li>
          </ul>
          
          
        </Col>
      </Row>
    </Container>
  );
}
