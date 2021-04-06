import { Container, Row, Col, ListGroup } from "react-bootstrap";

import { Content } from "../Content";

export default function Education() {
  const data = [
    {
      category: "숭실대학교 컴퓨터학부",
      info: [
        {
          title: "ACM-ICPC",
          text: `- 세계 대학생 프로그래밍 대회
          - ACM-ICPC 교내 예선 최고 3등 (본선 진출권 획득), 평균 5등 유지
          - 알고리즘 스터디 약 2년간 운영`,
        },
        {
          title: "SCCC 소모임",
          text: `- 숭실대학교 소모임
          - SCCC는 ACM-ICPC 대회 준비 소모임 입니다.`,
        },
        {
          title: "XANG 소모임",
          text: `- 숭실대학교 소모임
          - 학술, 친목 소모임 입니다.
          `,
        },
        {
          title: "GDG (Google Developers Group) 동아리",
          text: `- 숭실대학교 중앙동아리
          - GDG는 구글이 멘토가 되어 학생들에게 여러 정보를 주는 동아리 입니다.`,
        },
      ],
      dateStr: "2011.03 ~ 2020.02",
    },
    {
      category: "실용 중심의 인고지능 개발자 양성과정 2기 교육과정",
      info: [
        {
          title: "인공지능 국비과정 교육 수료",
          text: `- 시각장애인 보행도우미 앱 개발`,
        },
      ],
      dateStr: "2019.05 ~ 2019.11",
    },
  ];
  return (
    <Container
      id="Education_id"
      className="content-margin content-scroll-margin"
    >
      <Content title={"Education"} data={data} />
    </Container>
  );
}
