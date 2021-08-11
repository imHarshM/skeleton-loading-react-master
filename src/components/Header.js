import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="header" collapseOnSelect fixed="top" expand="xl" variant="dark">
      <Container>
        <Navbar.Brand>Skeleton Animation</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
