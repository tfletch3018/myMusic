import React from "react";
import Container from "../components/Container";
import "../index.css";
import { Player, Player1, Player2, Player3, Player4, Player5 } from "../components/Media/index";

function Videos() {
    return (
        <div className="">

            <Container fluid style={{ marginTop: 10 }}>
                <h1 className="home">myMusic</h1>
            </Container>


            <Container fluid style={{ marginTop: 20, marginBottom: 20 }}>

                <div className="grid-container">

                    <div>
                        <p>Tender Love</p>
                        <p className="foot">by James Harris III & Terry Lewis</p>
                        <Player />
                    </div>

                    <div>
                        <p>Amazing Grace</p>
                        <p className="foot">Arranged by Abigail L. Johnson</p>
                        <Player1 />
                    </div>

                    <div>
                        <p>Prelude in G# Minor</p>
                        <p className="foot">by Sergei Rachmaninoff</p>
                        <Player2 />
                    </div>

                    <div>
                        <p>The Maple Leaf Rag </p>
                        <p className="foot">by Scott Joplin</p>
                        <Player3 />
                    </div>

                    <div>
                        <p>The Humoresque</p>
                        <p className="foot">by Sergei Rachmaninoff</p>
                        <Player4 />
                    </div>

                    <div>
                        <p>Prelude in C# Minor</p>
                        <p className="foot">by Sergei Rachmaninoff</p>
                        <Player5 />
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default Videos;