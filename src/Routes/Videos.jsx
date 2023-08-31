import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../index.css";
import { Player, Player2, Player3, Player4 } from "../components/Media/index";

function Videos() {
    return (
        <div className="">

            <Container fluid style={{ marginTop: 10 }}>
                <Row>
                    <h1 className="home">myVideos</h1>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 20, marginBottom: 20 }}>
                <Row>

                    <Col size="md-6">
                        <p>Prelude in G# Minor</p>
                        <p className="foot">by Sergei Rachmaninoff</p>
                        <Player />
                    </Col>

                    <Col size="md-6">
                        <p>The Maple Leaf Rag </p>
                        <p className="foot">by Scott Joplin</p>
                        <Player2 />
                    </Col>

                    <Col size="md-6">
                        <p>The Humoresque</p>
                        <p className="foot">by Sergei Rachmaninoff</p>
                        <Player3 />
                    </Col>

                    <Col size="md-6">
                        <p>Prelude in C# Minor</p>
                        <p className="foot">by Sergei Rachmaninoff</p>
                        <Player4 />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Videos;