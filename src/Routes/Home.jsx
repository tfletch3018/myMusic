import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import social from "../profile.js"
import "../index.css";

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="home">myMusic</h1>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
                <p className="text-center homepage">{social.pitch} </p>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
                <p id="not-dark" className="text-center">2023 © Copyright <strong>{social.copyright}</strong>. All Rights Reserved</p>
            </Container>
        </div>
    );
}

export default Home;