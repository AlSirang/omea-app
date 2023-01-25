import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "assets/logos/logo-main.svg";
import logoGoldIcon from "assets/logos/logo-gold.svg";

export default function Header() {
  const navigation = useNavigate();

  const onEnterApp = () => {
    navigation("/dapp");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="pt-0"
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
            <Nav.Link href="#deets">Whitepaper</Nav.Link>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link href="#deets">Audit</Nav.Link>
            <Nav.Link href="#deets">Contract</Nav.Link>

            <button onClick={onEnterApp} className="btn btn-primary">
              <strong>Enter App</strong>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
