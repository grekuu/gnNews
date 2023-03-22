import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllNews, News } from "../../redux/newsSlice";
import "./articleList.scss";

const ArticleList = () => {
  const news = useAppSelector(getAllNews) as News[];
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  return (
    <ListGroup as="ul" className="article-list-container">
      <ListGroup.Item as="li" active>
        News
      </ListGroup.Item>
      {news.map((article, id) => {
        return (
          <ListGroup.Item
            action
            as="li"
            key={id}
            className="article-item"
            onClick={() => handleArticleClick(article)}
          >
            {article.title}
          </ListGroup.Item>
        );
      })}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {selectedArticle && (
            <>
              <p>
                {selectedArticle.content
                  ? selectedArticle.content
                  : "No content to display"}
              </p>
              <p>Author: {selectedArticle.author}</p>
              <a href={selectedArticle.url}>Link to page</a>
            </>
          )}
        </Modal.Body>
      </Modal>
    </ListGroup>
  );
};

export default ArticleList;
