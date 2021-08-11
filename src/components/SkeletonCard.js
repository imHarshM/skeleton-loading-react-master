import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <SkeletonTheme>
      <Row className="mt-5">
        {[...Array(5)].map((_list, index) => (
          <Col className="mb-4" sm={12} md={6} lg={4} key={index}>
            <Card className="h-100">
              <Card.Text className="p-4 pb-0 mb-1">
                <Skeleton variant="rect" height={280} />
              </Card.Text>
              <Card.Body className="px-4">
                <Skeleton />
                <Skeleton width="30%" />
              </Card.Body>
              <Card.Footer className="px-4">
                <Skeleton width="40%" />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
