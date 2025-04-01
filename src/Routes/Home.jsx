import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Collapse from "../components/Collapse";
import social from "../profile.js"
import bookCoverPage from "../images/bookCoverPage.jpg";
import "../index.css";

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="home">Featured</h1>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
                <div className="center">
                    <img className="book shimmer" src={bookCoverPage} alt="" />
                </div>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
            <Row className="">
                        <p className="center">Discover...</p>
                        <Collapse />
                    </Row>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
                <p className="text-center">{social.pitch} </p>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
                <p id="foot" className="text-center">2025 © Copyright <strong>{social.copyright}</strong>. All Rights Reserved</p>
            </Container>
        </div>
    );
}

export default Home;