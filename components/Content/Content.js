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
        <Col xs={12} sm={10} md={12} lg={8}>
          <div className="content-title">{title}</div>
        </Col>
      </Row>
      {dataList()}
    </Container>
  );
}
