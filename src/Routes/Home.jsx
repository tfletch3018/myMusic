import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import "../index.css";

function Home() {
    return (
        <div className="">
           

                <Container>
                    <Row>
                    <h1 className="home">myMusic</h1>
                    </Row>
                </Container>

                <Container>
                <p className="text-center">Welcome to myMusic, an app that I designed to create a place where I can share my love for music with you.  Thank you for coming through and I hope you enjoy! </p>

                </Container>

          
        </div>
    );
}

export default Home;