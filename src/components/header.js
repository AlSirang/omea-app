import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "assets/logos/logo-main.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();

  const onEnterApp = () => {
    navigation("/dapp");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logoIcon} height="50" alt="omea logo" />
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
