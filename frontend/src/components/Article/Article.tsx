import "./article.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { News } from "../../redux/newsSlice";

const Article = ({ title, source, publishedAt }: News) => {
  return (
    <Card className="article">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Source: {source.name}</Card.Text>
        <Card.Text>Published at: {publishedAt}</Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
};

export default Article;
