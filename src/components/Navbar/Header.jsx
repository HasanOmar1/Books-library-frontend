import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              Books
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as="li" href="#home">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link as="li" href="#login">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </Nav.Link>

            <Nav.Link as="li" href="#sign-up">
              <Link to={"/sign-up"} className="nav-link">
                Sign-up
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
