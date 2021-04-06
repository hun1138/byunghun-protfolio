import { Row, Col } from "react-bootstrap";

export default function ContentItem({ category, info }) {

    const infoList = () => {
        return (
            <ul>
                {info.map(e => <li key={e} style={{fontWeight: "300", fontSize: "0.875rem"}}>{e}</li>)}
            </ul>
        )
    };

  return (
      <Row className="justify-content-center" style={{ margin: "15px 0 15px 0"}}>
        <Col xs={10} sm={5} md={4} lg={3}>
          <div className="content-subtitle">{category}</div>
        </Col>
        <Col xs={12} sm={10} md={6} lg={4}>
          {infoList()}
        </Col>
      </Row>
  );
}
