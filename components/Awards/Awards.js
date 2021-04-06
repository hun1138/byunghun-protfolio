import { Container, Row, Col, ListGroup } from "react-bootstrap";

import { Content } from "../Content";

export default function Awards() {
  const data = [
    {
      category: "MIDAS CHALLENGE",
      subCategory: "우수상",
      info: [
        "MIDAS IT 주최 해커톤에서 응용부분 우수상 수상",
        "팀 리더, 핵심 기술 개발",
        "Java 사용",
      ],
      dateStr: "2018.7"
    },
    {
      category: "숭실대학교 IT대학 소프트웨어 공모전",
      subCategory: "동상",
      info: [
        '"똑수증"이라는 안드로이드 앱으로 NFC통신을 이용하여 영수증을 폰으로 받는 서비스 개발',
        "팀 리더, Android 개발",
        "Java 사용",
      ],
      dateStr: "2017.09"
    },
    {
      category: "한국 정보올림피아드 고등부 전국본선",
      subCategory: "장려상",
      info: ["C언어 사용"],
      dateStr: "2010.07"
    },
    {
      category: "한국 정보올림피아드 고등부 지역본선",
      subCategory: "금상",
      info: ["대전지역 1위", "C언어 사용"],
      dateStr: "2010.04"
    },
    {
      category: "한국 정보올림피아드 고등부 지역본선",
      subCategory: "동상",
      info: ["대전지역 5위", "C언어 사용"],
      dateStr: "2009.04"
    },
  ];
  return (
    <Container id="Awards_id" className="content-margin content-scroll-margin">
      <Content title={"Awards"} data={data} />
    </Container>
  );
}
