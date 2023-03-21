import "./home.scss";
import Container from "react-bootstrap/esm/Container";
import News from "../News/News";
import SideMenu from "../SideMenu/SideMenu";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchAsyncNews } from "../../redux/newsSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncNews());
  }, [dispatch]);

  return (
    <Container className="home-container">
      <SideMenu></SideMenu>
      <News></News>
    </Container>
  );
};

export default Home;
