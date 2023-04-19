import { useAppSelector } from '../../redux/hooks';
import { getAllNews } from '../../redux/newsSlice';
import GridItem from '../GridItem/GridItem';
import './newsGrid.scss';

const NewsGrid = () => {
  const news = useAppSelector(getAllNews);

  return (
    <div className="news-container">
      {news.map((article, id) => {
        return <GridItem key={id} {...article}></GridItem>;
      })}
    </div>
  );
};

export default NewsGrid;
