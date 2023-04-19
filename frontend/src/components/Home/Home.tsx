import './home.scss';
import Container from 'react-bootstrap/esm/Container';
import NewsGrid from '../NewsGrid/NewsGrid';
import SideMenu from '../SideMenu/SideMenu';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAsyncNews, getCountry, getListView } from '../../redux/newsSlice';
import ArticleList from '../ArticleList/ArticleList';

const Home = () => {
  const dispatch = useAppDispatch();
  const country = useAppSelector(getCountry);
  const listView = useAppSelector(getListView);

  useEffect(() => {
    dispatch(fetchAsyncNews(country ? country : 'us'));
  }, [dispatch, country]);

  return (
    <Container className="home-container">
      <SideMenu />
      {listView ? <ArticleList /> : <NewsGrid />}
    </Container>
  );
};

export default Home;
