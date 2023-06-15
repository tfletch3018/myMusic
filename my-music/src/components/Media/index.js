import React from 'react';
import prelude1 from "../../images/prelude1.mp4";
import "./style.css";



const Player = () => {
    return (
        <div>
            <video 
             controls>
                <source 
                src={prelude1}
                type="video/mp4"
                />
            </video>
        </div>
    )
}

export default Player;