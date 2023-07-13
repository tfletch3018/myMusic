import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import social from "../profile.js"
import "../index.css";

function Contact() {
    return (
        <div className="">
           

                <Container fluid style={{ marginBottom: 100 }}>
                    <Row>
                    <h1 className="home">letsLinkUp</h1>
                    </Row>
                </Container>

                <Container>
                {/* <p className="text-center">Something Here</p> */}
                <div className="d-flex justify-content-center align-items-center flex-column">

                <div className="fabs inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                <div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                </div>
                </Container>

          
        </div>
    );
}

export default Contact;