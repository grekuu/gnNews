import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { BsList, BsGridFill } from "react-icons/bs";
import "./header.scss";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeView, getListView } from "../../redux/newsSlice";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const popUpClicked = () => setShowPopUp(!showPopUp);

  const dispatch = useAppDispatch();

  const listView = useAppSelector(getListView);

  const { t, i18n } = useTranslation();

  function handleClick(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>{t("News.1")}</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="header-right">
              <Button className="header-button" variant="light">
                {listView ? (
                  <BsGridFill onClick={() => dispatch(changeView(!listView))} />
                ) : (
                  <BsList onClick={() => dispatch(changeView(!listView))} />
                )}
              </Button>
              <Button
                className="header-button"
                variant="light"
                onClick={popUpClicked}
              >
                PopUp
              </Button>
              <DropdownButton
                id="dropdown-basic-button"
                title={t("Language.1")}
                variant="light"
              >
                <Dropdown.Item
                  className="language-dropdown-item"
                  onClick={() => handleClick("en")}
                >
                  English
                </Dropdown.Item>
                <Dropdown.Item
                  className="language-dropdown-item"
                  onClick={() => handleClick("pl")}
                >
                  Polish
                </Dropdown.Item>
              </DropdownButton>
            </div>
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
