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
                <p className="text-center homepage">Welcome to myMusic, an experimental app that I designed to create a storage place that enables me to easily share my love for music.  Thank you for coming through and I hope you enjoy the videos! </p>

                </Container>

          
        </div>
    );
}

export default Home;