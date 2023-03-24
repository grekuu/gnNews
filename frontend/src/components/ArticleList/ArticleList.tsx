import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllNews, News } from "../../redux/newsSlice";
import "./articleList.scss";
import { useTranslation } from "react-i18next";

const ArticleList = () => {
  const news = useAppSelector(getAllNews) as News[];
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<News | null>(null);
  const { t } = useTranslation();

  const handleArticleClick = (article: News) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  return (
    <ListGroup as="ul" className="article-list-container">
      <ListGroup.Item as="li" active>
        {t("News.1")}
      </ListGroup.Item>
      {news.map((article, id) => {
        return (
          <div key={id}>
            <ListGroup.Item
              action
              as="li"
              className="article-item"
              onClick={() => handleArticleClick(article)}
            >
              <b>{article.title}</b> <br />
              {t("Author.1")}
              {article.author} <br />
              {t("Source.1")}
              {article.source.name}
              <br />
            </ListGroup.Item>
          </div>
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
                  : `${t("No_content_to_display.1")}`}
              </p>
              <p>
                {t("Author.1")} {selectedArticle.author}
              </p>
              <a href={selectedArticle.url} target="_blank">
                {t("Link_to_page.1")}
              </a>
            </>
          )}
        </Modal.Body>
      </Modal>
    </ListGroup>
  );
};

export default ArticleList;
