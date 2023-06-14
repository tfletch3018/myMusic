import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../index.css";
// import MediaComponent from "../components/Media";

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
                        <p className="foot">Prelude in C# Minor</p>
                        {/* <MediaComponent /> */}
                    </Col>

                        <Col size="md-6">
                            <p className="foot">Some other dope piece</p>
                            {/* <MediaComponent /> */}
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Videos;