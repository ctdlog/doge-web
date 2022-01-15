import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="Info">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Doge-Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">홈</Nav.Link>
              <Nav.Link href="/accountInfo">회원 정보</Nav.Link>
              <Nav.Link href="/account?register=customer">회원가입</Nav.Link>
              <Nav.Link href="/login">로그인</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Info;
