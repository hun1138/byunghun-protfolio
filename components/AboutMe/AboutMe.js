import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/AboutMe.module.css";

import { Content } from "../Content";

export default function AboutMe() {
  const aboutData = [
    {
      category: "Introduction",
      info: [
        "알고리즘을 좋아하는 개발자입니다",
        "새로운 기술을 공부하고 사용하는 것을 좋아합니다",
        "팀원들과 같이 있는 것을 좋아합니다",
        "하나에 빠져서 몰두하는 것을 좋아합니다",
        "늘 더 효율적인 방법이 있는지 생각합니다",
        "TDD를 좋아합니다",
      ],
    },
  ];
  return (
    <Container id="AboutMe_id" className="content-margin content-scroll-margin">
      <Content title={"About Me"} data={aboutData} />
    </Container>
  );
}
