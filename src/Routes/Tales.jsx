import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import bookCoverPage1 from "../images/bookCoverPage1.jpg";
import social from "../profile.js";
import "../index.css";

function Tales() {

    return (
        <div>
            <Container fluid style={{ marginTop: 50 }}>

                <Container>
                    <div className="center">
                        <Link to="/home">
                            <button className="modalBtn">Go Back</button>
                        </Link>
                    </div>
                </Container>

                <Container fluid style={{ marginTop: 50 }}>

                    <div className='myCover'>

                        <div className=''>
                            <img id="scaled"
                                className="shimmer"
                                src={bookCoverPage1}
                                alt="" />
                        </div>

                        <div className=''>
                            <p className='description'>
                                A coming of age tale depicting young love. Finding it, fighting for it, losing it,
                                and learning from it all. Follow Chloe as she experiences important life lessons
                                about love, relationships, and coping with loss.
                            </p>
                            <p className='description'>
                                A story that is dedicated to anyone who has ever felt a sense of isolation...
                                a reminder that you are not alone. While the circumstances of our strifes may
                                shift and evolve, it is only human arrogance that convices us that we are "the first"
                                or "the only..." The truth is, human beings have been experiencing the vast array
                                of emotional states of being, from exuberance to utter despair, adapting and surviving, long before
                                any of us alive today took a first breath.
                            </p>
                            <p className='description'>
                                Chloe is humbled as she learns the true meaning of the phrase "...and this too shall pass". 
                                She finds comfort and strength in the realization that she is not the first to face this 
                                particular dilema and that she is not alone. She is enlightened and profoundly impacted 
                                by the idea that each one of us has her own tale as old as time.
                            </p>

                        </div>
                    </div>

                </Container>

                <Container fluid style={{ marginTop: 50, marginBottom: 50, }}>
                    <Row>
                        <div className="center">
                            <a href={social.amazon}>
                                <button className="modalBtn">Get the Book!</button></a>
                        </div>
                    </Row>
                </Container>

            </Container>
        </div>
    )
}

export default Tales;