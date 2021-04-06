import { Container, Row, Col } from "react-bootstrap";
import { ContentItem } from "./ContentItem";

export default function Content({ title, data }) {
  const dataList = () => {
    return data.map((e, i) => (
      <ContentItem
        category={e.category}
        subCategory={e.subCategory}
        dateStr={e.dateStr}
        info={e.info}
        key={e.category + i}
      />
    ));
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
