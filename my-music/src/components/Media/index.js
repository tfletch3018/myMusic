import React from 'react';
import prelude1 from "../../images/prelude1.mp4";
import test from "../../images/test.jpeg";
import "./style.css";



const Player = () => {
    return (
        <div>
            <video 
            width="50%"
             height="50%" 
             controls>
                <source 
                src={prelude1}
                type="video/mp4"
                poster={test}
        primaryColor="var(--amethystOrchid)" />
            </video>
        </div>
    )
}

export default Player;