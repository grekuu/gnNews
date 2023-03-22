import "./gridItem.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { News } from "../../redux/newsSlice";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Placeholder } from "react-bootstrap";

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
          <Card.Text>Source: {source.name}</Card.Text>
          <Card.Text className="button-padding">
            Published at: {publishedAt}
          </Card.Text>
          <Button
            variant="primary"
            className="see-more-btn"
            onClick={() => setShowModal(true)}
          >
            More
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
          <p>{content ? content : "No content to display"}</p>
          <p>Author: {author}</p>
          <a href={url}>Link to page</a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GridItem;
