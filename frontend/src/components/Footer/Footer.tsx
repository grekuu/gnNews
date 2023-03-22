import "./footer.scss";
import Nav from "react-bootstrap/Nav";
import Time from "../Date/Time";
import { useAppSelector } from "../../redux/hooks";
import { getAllNews } from "../../redux/newsSlice";

const Footer = () => {
  const news = useAppSelector(getAllNews);

  return (
    <Nav className="footer" activeKey="/home">
      <Nav.Item className="footer-item">
        <Time></Time>
      </Nav.Item>
      <Nav.Item className="footer-item">
        Visible number of articles: {news.length}
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
