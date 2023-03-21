import { useAppSelector } from "../../redux/hooks";
import { getAllNews } from "../../redux/newsSlice";
import Article from "../Article/Article";
import "./news.scss";

const News = () => {
  const news = useAppSelector(getAllNews);

  return (
    <div className="news-container">
      {news.map((article, id) => {
        return <Article key={id} {...article}></Article>;
      })}
    </div>
  );
};

export default News;
