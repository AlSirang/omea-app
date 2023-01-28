import { Container, Nav, Navbar } from "react-bootstrap";
import { Banner, DappButton, LandingPageButton } from "./units";
import logoIcon from "assets/logos/logo-main.svg";
import logoGoldIcon from "assets/logos/logo-gold.svg";
import "src/styles/header.css";

export default function Header({ isDappPage }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="pt-0 d-block"
    >
      <Container className="pb-2 header-container">
        <Navbar.Brand href="/">
          <img
            src={logoIcon}
            height="50"
            alt="omea logo"
            className="d-none d-md-block"
          />
          <img
            src={logoGoldIcon}
            height="50"
            alt="omea logo"
            className="d-block d-md-none"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="gap-3">
            <Nav.Link className="header-link" href="#deets">
              Whitepaper
            </Nav.Link>
            <Nav.Link className="header-link" href="#deets">
              About Us
            </Nav.Link>
            <Nav.Link className="header-link" href="#deets">
              Audit
            </Nav.Link>
            <Nav.Link className="header-link" href="#deets">
              Contract
            </Nav.Link>

            <Nav.Item>
              {isDappPage && <DappButton />}
              {!isDappPage && <LandingPageButton />}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {!isDappPage && <Banner />}
    </Navbar>
  );
}
