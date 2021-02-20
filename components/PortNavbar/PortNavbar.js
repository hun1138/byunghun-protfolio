import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "../../styles/PortNavbar.module.css";

export default function PortNavbar() {
  return (
    <Navbar className={styles.navbarBackground} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#Introduction_id">
          Byunghun Lee's Portfolio
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="#AboutMe_id">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#TechStack_id">Tech Stack</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Timeline_id">Timeline</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
