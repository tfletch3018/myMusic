import React from 'react';
import "./style.css";

const Player = () => {
    return (
        <div>
            <video 
             controls>
                <source 
                src="https://user-images-32128cdd-5075-45d5-99fb-e76753fa11a4.s3.us-east-2.amazonaws.com/PreludeInC%23Minor.MOV"
                type="video/mp4"
                />
            </video>
        </div>
    )
}

export default Player;