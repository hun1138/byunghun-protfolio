import { Container, Row, Col, ListGroup } from "react-bootstrap";

import { Content } from "../Content";

export default function WorkExperience() {
  const data = [
    {
      category: "CSLEE",
      subCategory: "정규직",
      info: [
        {
          title: "웹 기반 빅데이터 전처리 서비스 개발",
          text: `개발 서비스:
          - 웹 기반 빅데이터 전처리 서비스인 "빅재미" 개발
          - 빅데이터 전처리, 시각화, 학습을 웹으로 할 수 있게 하는 서비스

          업무:
          - 초기 버전인 버전 1.0 의 사용자 니즈를 반영하여 사용성 개선과 더 나은 UI/UX를 적용한 서비스 버전 2.0 개발.`,
        },
      ],
      dateStr: "2020.02 ~ 2020.06",
    },
    {
      category: "Travelio",
      subCategory: "인턴",
      info: [
        {
          title: "웹 프론트엔드 개발",
          text: `개발 서비스:
          - 인공지능 추천을 탑재한 숙박업 모바일 및 웹 서비스 프론트엔드 개발
          - 최종 목표는 여행에 필요한 서비스(숙박, 항공, 교통 등)을 사용자 데이터 기반으로 추천해주는 서비스이다.

          업무:
          - React를 이용하여 파트너 포탈 웹 프론트엔드 개발`,
        },
        {
          title: "크로스 플랫폼 앱 개발",
          text: `개발 서비스:
          - 모바일 예약 관리 서비스 앱 개발

          업무:
          - React-Native 를 이용하여 모바일 예약 관리 앱 개발`,
        },
      ],
      dateStr: "2019.01 ~ 2019.03",
    },
    {
      category: "Saeronsni",
      subCategory: "인턴",
      info: [
        {
          title: "카메라 제어 안드로이드 앱 유지보수",
          text: `개발 서비스:
          - 군함에 탑재되는 대형 감시카메라를 원격 조종할 수 있는 안드로이드 앱 분석 및 유지보수

          업무:
          - 기존에 개발되어 있던 안드로이드 앱을 다른 회사 사람들이 알아보기 쉽게 코드를 분석하여 문서화
          - 요구사항에 맞는 기능 개선`,
        },
      ],
      dateStr: "2016.01 ~ 2016.02",
    },
    {
      category: "사이버사령부",
      subCategory: "군복무",
      info: [
        {
          title: "웹 위협 관제 체계",
          text: `프로젝트 설명 :
          웹 페이지 크롤링하여 관리 (군법상 설명 생략)`,
        },
      ],
      dateStr: "2012.11 ~ 2014.08",
    },
  ];
  return (
    <Container id="WorkExperience_id" className="content-margin">
      <Content title={"Work Experience"} data={data} />
    </Container>
  );
}
