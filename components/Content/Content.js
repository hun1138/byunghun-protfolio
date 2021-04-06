import { Container, Row, Col } from "react-bootstrap";
import { ContentItem } from "./ContentItem"

export default function Content({ title, data }) {
  const dataList = () => {
    return data.map(e => <ContentItem category={e.category} info={e.info} key={e.category} />);
  };

  return (
    <Container id="AboutMe_id" className="content-margin">
      <Row className="justify-content-center">
        <Col>
          <div className="content-title">{title}</div>
        </Col>
      </Row>
      {dataList()}
      
    </Container>
  );
}
