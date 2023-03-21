import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { BsList, BsGridFill } from "react-icons/bs";
import "./header.scss";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Header = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const popUpClicked = () => setShowPopUp(!showPopUp);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>News</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button className="header-button" variant="light">
              <BsList />
            </Button>
            <Button
              className="header-button"
              variant="light"
              onClick={popUpClicked}
            >
              PopUp
            </Button>
            <Modal show={showPopUp} onHide={popUpClicked}>
              <Modal.Header closeButton>
                <Modal.Title>PopUp</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Największa trudność: Fork jako prywatne repo <br />
                Największa frajda: Wykorzystanie Bootstrapa do całości aplikacji
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={popUpClicked}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
