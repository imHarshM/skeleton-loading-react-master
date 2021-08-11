import React from "react";
import { Container, Col, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar variant="dark" fixed="bottom" className="footer text-center p-2">
      <Container>
        <Col className="small py-2">
          Copyright &copy;2021 | Made with{" "}
          <span role="img" aria-label="love">
            {" "}
            ❤️{" "}
          </span>
          by{" "}
          <a
            className="text-white text-decoration-none"
            href="https://github.com/imharshm"
            rel="noopener noreferrer"
            target="_blank"
          >
            imharshm
          </a>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
