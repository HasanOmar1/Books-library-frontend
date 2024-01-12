import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import "./Header.css";

function Header() {
  const { currentUser } = useNewUsersContext();
  const navigate = useNavigate();

  const loggedUser = localStorage.getItem("user");

  function handleLogOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="Header">
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

            {!loggedUser && (
              <>
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
              </>
            )}

            {loggedUser && (
              <>
                <Nav.Link as="li" href="#home" onClick={handleLogOut}>
                  <Link to={"/"} className="nav-link">
                    Log-out
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
