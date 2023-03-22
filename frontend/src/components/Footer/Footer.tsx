import "./footer.scss";
import Nav from 'react-bootstrap/Nav';
import Time from "../Date/Time";

const Footer = () => {
  return <Nav className="footer" activeKey="/home">
    <Nav.Item>
      <Time></Time>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
  </Nav>;
};

export default Footer;
