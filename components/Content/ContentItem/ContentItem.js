import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ContentItem({ category, subCategory, info, dateStr }) {
  const infoList = () => {
    return (
      <ul>
        {info.map((e, i) => {
          if (typeof e === "string") {
            return (
              <li key={e + i} className="content-info-text">
                {e}
              </li>
            );
          } else {
            return (
              <React.Fragment key={e.title + i}>
                <li className="content-info-title">{e.title}</li>
                <p
                  className="content-info-text"
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {e.text}
                </p>
              </React.Fragment>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <Row className="justify-content-center" style={{ margin: "15px 0 15px 0" }}>
      <Col xs={12} sm={10} md={6} lg={4} style={{ paddingBottom: "15px" }}>
        <div className="content-subtitle">{category}</div>
        {subCategory && (
          <div className="content-subCategory">{subCategory}</div>
        )}
        {dateStr && <div className="content-date">{dateStr}</div>}
      </Col>
      <Col xs={12} sm={10} md={6} lg={4}>
        {infoList()}
      </Col>
    </Row>
  );
}
