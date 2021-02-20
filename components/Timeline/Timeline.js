import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { TimelineItem } from "./TimelineItem";
import { TimelineMarker } from "./TimelineMarker";

import styles from "../../styles/Timeline.module.css";

export default function Timeline() {
  /*content={"this is content1"}*/
  return (
    <Container id="Timeline_id" className="content-margin">
      <Row className={styles["example-split"]}>
        <Col md={12} className="content-title">
          <h2>Timeline</h2>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
          <ul className={`${styles.timeline} ${styles["timeline-split"]}`}>
            <TimelineMarker date={"2009"} />
            <TimelineItem
              date={"2009.04"}
              title={"정보올림피아드 고등부 지역본선 동상"}
            />

            <TimelineMarker date={"2010"} />
            <TimelineItem
              date={"2010.04"}
              title={"정보올림피아드 고등부 지역본선 금상"}
            />
            <TimelineItem
              date={"2010.07"}
              title={"정보올림피아드 고등부 전국본선 장려상"}
            />

            <TimelineMarker date={"2011"} />
            <TimelineItem
              date={"2011.03"}
              title={"SCCC(ACM-ICPC 대회 준비 대학교 소모임) 활동"}
            />
            <TimelineItem date={"2011.09"} title={"ACM-ICPC 한국 50위 이내"} />

            <TimelineMarker date={"2012"} />
            <TimelineItem
              date={"2012.03"}
              title={"GDG(Google Developers Group 동아리) 활동"}
            />
            <TimelineItem
              date={"2012.09"}
              title={"ACM-ICPC 한국 30위 이내(본선 진출권 획득)"}
            />

            <TimelineMarker date={"Army"} />
            <TimelineItem
              date={"2012.11 - 2014.08"}
              title={"국군 사이버사령부 연구개발병 군복무"}
            />

            <TimelineMarker date={"2015"} />
            <TimelineItem
              date={"2015.04"}
              title={"POS 기기 프로그램 외주 개발"}
            />

            <TimelineMarker date={"2016"} />
            <TimelineItem date={"2016.01 - 2016.03"} title={"Saeronsni 인턴"} />

            <TimelineMarker date={"2017"} />
            <TimelineItem
              date={"2017.09"}
              title={"숭실대학교 소프트웨어 공모전 동상"}
            />
            <TimelineItem date={"2017.11"} title={"고객 관리 앱 외주 개발"} />

            <TimelineMarker date={"2018"} />
            <TimelineItem
              date={"2018.07"}
              title={"2018 MIDAS Challenge 해커톤 응용부분 우수상"}
            />

            <TimelineMarker date={"2019"} />
            <TimelineItem date={"2019.01 - 2019.03"} title={"Travelio 인턴"} />
            <TimelineItem
              date={"2019.05 - 2019.11"}
              title={"혁신성장 실용중심의 인공지능 인재양성 프로그램 2기 수료"}
            />

            <TimelineMarker date={"2020"} />
            <TimelineItem date={"2020.02 - 2020.06"} title={"CSLEE 근무"} />
            <TimelineItem date={"2020.06 ~"} title={"모바일 게임 개발"} />
            <TimelineItem date={"2020.12 ~"} title={"모바일 서비스 개발"} />
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
