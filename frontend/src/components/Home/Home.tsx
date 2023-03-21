import "./home.scss";
import Container from "react-bootstrap/esm/Container";
import News from "../News/News";
import SideMenu from "../SideMenu/SideMenu";
//5be44a79b15a4c10941c670b9765972e
const Home = () => {
  return (
    <Container className="home-container">
      <SideMenu></SideMenu>
      <News></News>
    </Container>
  );
};

export default Home;
