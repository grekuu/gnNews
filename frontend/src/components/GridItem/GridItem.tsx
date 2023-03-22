import "./gridItem.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { News } from "../../redux/newsSlice";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const GridItem = ({
  title,
  source,
  publishedAt,
  urlToImage,
  content,
  author,
  url,
}: News) => {
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Card className="article">
        {urlToImage ? (
          <Card.Img variant="top" src={urlToImage} className="card-img" />
        ) : (
          <Placeholder className="card-img" />
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {t("Source.1")} {source.name}
          </Card.Text>
          <Card.Text className="button-padding">
            {t("Published_at.1")} {publishedAt}
          </Card.Text>
          <Button
            variant="primary"
            className="see-more-btn"
            onClick={() => setShowModal(true)}
          >
            {t("More.1")}
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p>{content ? content : `${t("No_content_to_display.1")}`}</p>
          <p>
            {t("Author.1")} {author}
          </p>
          <a href={url}>{t("Link_to_page.1")}</a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GridItem;
