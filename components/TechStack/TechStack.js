import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
import { TechStackItem } from "./TechStackItem";

export default function TechStack() {
  /*
  Language : C, C++, C#, Java, Python, Javascript, Typescript, Flex, Actionscript, MySQL, HTML5, CSS3
Framework : Flask, Django, VueJS, ReactJS, React-Native, NextJS, ExpressJS, Spring boot
Tool : Unity, GIthub, Android, Trello, Slack, Nexacro
Other : CNN, YOLO, tensorflow, AWS Lambda
  */
  return (
    <Container id="TechStack_id" className="content-margin">
      <Col md={12} className="content-title">
        <h2>Tech Stack</h2>
      </Col>

      <CardColumns>
        <CardDeck onMouseEnter={() => console.log("javascript")}>
          <TechStackItem
            imgSrc={"/tech-logo-img/js-logo.png"}
            title={"Javascript"}
            content={"card content 1"}
          />
          <TechStackItem
            imgSrc={"/tech-logo-img/ts-logo.png"}
            title={"card title 2"}
            content={"card content 2"}
          />
        </CardDeck>
        <TechStackItem
          imgSrc={"/tech-logo-img/python-logo.png"}
          title={"card title 3"}
          content={"card content 3"}
        />
        <TechStackItem
          imgSrc={"/tech-logo-img/Java-Logo.png"}
          title={"card title 7"}
          content={"card content 5"}
        />
        <CardDeck>
          <TechStackItem
            imgSrc={"/tech-logo-img/c-logo.png"}
            title={"card title 4"}
            content={"card content 4"}
          />
          <TechStackItem
            imgSrc={"/tech-logo-img/cpp-logo.png"}
            title={"card title 5"}
            content={"card content 5"}
          />
          <TechStackItem
            imgSrc={"/tech-logo-img/csharp-logo.png"}
            title={"card title 6"}
            content={"card content 5"}
          />
        </CardDeck>

        <TechStackItem
          imgSrc={"/tech-logo-img/unity-logo.png"}
          title={"card title 9"}
          content={"card content 5"}
        />

        <TechStackItem
          imgSrc={"/tech-logo-img/mysql-logo.png"}
          title={"card title 9"}
          content={"card content 5"}
        />
        <TechStackItem
          imgSrc={"/tech-logo-img/tf-logo.png"}
          title={"card title 9"}
          content={"card content 5"}
        />
        <TechStackItem
          imgSrc={"/tech-logo-img/aws-logo.png"}
          title={"card title 9"}
          content={"card content 5"}
        />

        <CardDeck>
          <TechStackItem
            imgSrc={"/tech-logo-img/slack-logo.png"}
            title={"card title 9"}
            content={"card content 5"}
          />
          <TechStackItem
            imgSrc={"/tech-logo-img/trello-logo.jpeg"}
            title={"card title 9"}
            content={"card content 5"}
          />
        </CardDeck>
        <TechStackItem
          imgSrc={"/tech-logo-img/github-logo.png"}
          title={"card title 8"}
          content={"card content 5"}
        />
      </CardColumns>
    </Container>
  );
}
