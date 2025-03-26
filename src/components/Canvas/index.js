import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas"
import { NavLink } from "react-router-dom";
import myLogo from "../Canvas/myLogo.ico";
import "./style.css";

function OffCanvas () {

    return (
        <>
        {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid id="canvasNav">
                        <Navbar.Brand href="#">
                            <img src={myLogo} id="logo" alt="" />

                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <NavLink to="/"
                                        href="/"
                                    >
                                  Home
                                    </NavLink>{" "}
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to="/home"
                                        href="/home"
                                    >
                                        myMusic
                                    </NavLink>
                                    <NavLink
                                        to="/videos"
                                        href="/videos"
                                    >
                                        myVideos
                                    </NavLink>
                                    <NavLink
                                        to="/contact"
                                        href="/contact"
                                    >
                                        letsLinkUp
                                    </NavLink>
                           </Nav>
                           </Offcanvas.Body>
                           </Navbar.Offcanvas>
                           </Container>
                           </Navbar>
        ))}

        </>
    );
}

export default OffCanvas;