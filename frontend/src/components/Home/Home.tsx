import "./home.scss";
import Container from "react-bootstrap/esm/Container";
import News from "../News/News";
import SideMenu from "../SideMenu/SideMenu";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAsyncNews, getCountry } from "../../redux/newsSlice";
import ArticleList from "../ArticleList/ArticleList";

const Home = () => {
  const dispatch = useAppDispatch();
  const country = useAppSelector(getCountry);

  useEffect(() => {
    dispatch(fetchAsyncNews(country ? country : "pl"));
  }, [dispatch, country]);

  return (
    <Container className="home-container">
      <SideMenu></SideMenu>
      {/* <News></News> */}
      <ArticleList></ArticleList>
    </Container>
  );
};

export default Home;
