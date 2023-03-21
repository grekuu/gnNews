import "./sideMenu.scss";
import ListGroup from "react-bootstrap/ListGroup";
import Poland from "../../../public/images/flags/Poland.webp";
import UK from "../../../public/images/flags/UK.webp";
import US from "../../../public/images/flags/US.png";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <ListGroup>
        <ListGroup.Item active>COUNTRIES</ListGroup.Item>
        <ListGroup.Item action className="country-li">
          <img src={Poland} alt="Poland" /> Poland
        </ListGroup.Item>
        <ListGroup.Item action className="country-li">
          <img src={UK} alt="UK" />
          United Kingdom
        </ListGroup.Item>
        <ListGroup.Item action className="country-li">
          <img src={US} alt="US" />
          United States
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SideMenu;
