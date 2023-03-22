import "./home.scss";
import Container from "react-bootstrap/esm/Container";
import News from "../News/News";
import SideMenu from "../SideMenu/SideMenu";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAsyncNews, getCountry } from "../../redux/newsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const country = useAppSelector(getCountry);

  useEffect(() => {
    dispatch(fetchAsyncNews(country));
  }, [dispatch, country]);

  return (
    <Container className="home-container">
      <SideMenu></SideMenu>
      <News></News>
    </Container>
  );
};

export default Home;
