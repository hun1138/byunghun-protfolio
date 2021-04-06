import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "../../styles/PortNavbar.module.css";

export default function PortNavbar() {
  return (
    <Navbar className={styles.navbarBackground} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#ContactMe_id">
          Byunghun Lee's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#AboutMe_id">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#TechStack_id">Tech Stack</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#WorkExperience_id">Work Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Awards_id">Awards</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Education_id">Education</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
