import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ContentItem({ category, subCategory, info, dateStr }) {
  const infoList = () => {
    return (
      <ul>
        {info.map((e) => {
          if (typeof e === "string") {
            return (
              <li key={e} className="content-info-text">
                {e}
              </li>);
          } else {
            return (
              <React.Fragment key={e.title}>
                <li className="content-info-title">
                  {e.title}
                </li>
                <p
                  className="content-info-text"
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {e.text}
                </p>
              </ React.Fragment>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <Row className="justify-content-center" style={{ margin: "15px 0 15px 0" }}>
      <Col xs={10} sm={5} md={4} lg={3}>
        <div className="content-subtitle">{category}</div>
        {subCategory && <div className="content-subCategory">{subCategory}</div>}
        {dateStr && <div className="content-date">{dateStr}</div>}
      </Col>
      <Col xs={12} sm={10} md={6} lg={4} style={{ paddingTop: "0" }}>
        {infoList()}
      </Col>
    </Row>
  );
}
