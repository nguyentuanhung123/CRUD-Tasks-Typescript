import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Code83 - Tasks</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Item as={Link} className="nav-link" to="/">Home</Nav.Item>
                        <Nav.Item as={Link} className="nav-link" to="/tasks">Tasks</Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;