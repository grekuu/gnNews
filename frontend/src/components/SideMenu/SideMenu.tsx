import "./sideMenu.scss";
import ListGroup from "react-bootstrap/ListGroup";
import Poland from "../../images/flags/Poland.webp";
import UK from "../../images/flags/UK.webp";
import US from "../../images/flags/US.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setCountry } from "../../redux/newsSlice";

const SideMenu = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="side-menu">
      <ListGroup>
        <ListGroup.Item active>COUNTRIES</ListGroup.Item>
        <Link to="/country/pl">
          <ListGroup.Item
            action
            className="country-li"
            onClick={() => dispatch(setCountry("pl"))}
          >
            <img src={Poland} alt="Poland" /> Poland
          </ListGroup.Item>
        </Link>
        <Link to="/country/gb">
          <ListGroup.Item
            action
            className="country-li"
            onClick={() => dispatch(setCountry("gb"))}
          >
            <img src={UK} alt="UK" /> United Kingdom
          </ListGroup.Item>
        </Link>
        <Link to="/country/us">
          <ListGroup.Item
            action
            className="country-li"
            onClick={() => dispatch(setCountry("us"))}
          >
            <img src={US} alt="US" /> United States
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
};

export default SideMenu;
