import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ItemCard = ({ list }) => {
  return (
    <Row className="mt-5">
      {list.map((list) => {
        return (
          <Col className="mb-4" sm={12} md={6} lg={4} key={list.id}>
            <Card className="h-100">
              <Card.Img
                className="p-4 pb-0"
                loading="lazy"
                variant="top"
                alt={list.title}
                src={list.download_url}
              />
              <Card.Body className="px-4">
                <Card.Title>{list.title}</Card.Title>
                <Card.Text>Author: {list.author}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between px-4">
                <small className="text-muted">Source: {list.source}</small>
                <small>
                  <a href={list.url} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-download"></i>
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemCard;
