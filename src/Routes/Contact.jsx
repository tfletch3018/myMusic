import React from "react";
import Container from "react-bootstrap/Container"
// import Container from "../components/Container";
import Row from "../components/Row";
import social from "../profile.js"
import myFaFab from "../images/myFaFab.jpg"
import "../index.css";

function Contact() {
    return (
        <div>
            <Container fluid style={{ marginBottom: 100 }}>
                <Row>
                    <h1 className="home merienda-flair">letsLinkUp</h1>
                </Row>
            </Container>

            <Container>
                    <div id="link" className="linked">
                    <div className="fabs">
                        {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                        {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                        {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                        {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}
                        {social.tiktok && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.tiktok}><i className="fab fa-tiktok"></i></a>}<br/>
                    </div>
                    <div className="center">
                        {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                        {social.portfolio && <a title="View my portfolio" rel="noopener noreferrer" target="_blank" href={social.portfolio}><img src={myFaFab} id="myFaFab" alt="" /></a>}
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Contact;