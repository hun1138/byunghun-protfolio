import { Container, Row, Col, ListGroup } from "react-bootstrap";

import { Content } from "../Content";

export default function Awards() {
  const data = [
    {
      category: "Introduction",
      info: [
        "알고리즘을 좋아하는 개발자 입니다",
        "새로운 기술을 공부하고 사용하는것을 좋아합니다",
        "팀원들과 같이 있는것을 좋아합니다",
        "하나에 빠져서 몰두하는것을 좋아합니다",
        "늘 더 효율적인 방법이 있는지 생각합니다",
        "TDD를 좋아합니다",
      ],
    },
  ];
  return (
    <Container id="Awards_id" className="content-margin">
      <Content title={"Education"} data={data} />
    </Container>
  );
}
