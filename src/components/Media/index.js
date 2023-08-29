import React from 'react';
import "./style.css";

const Player = () => {
    return (
        <div>
            <video id="shimmer"
                controls>
                <source
                    src="https://user-images-32128cdd-5075-45d5-99fb-e76753fa11a4.s3.us-east-2.amazonaws.com/PreludeInG%23Minor.MOV"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
const Player2 = () => {
    return (
        <div>
            <video id="shimmer"
                controls>
                <source
                    src="https://user-images-32128cdd-5075-45d5-99fb-e76753fa11a4.s3.us-east-2.amazonaws.com/MapleLeafRag.MOV"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
const Player3 = () => {
    return (
        <div>
            <video id="shimmer"
                controls>
                <source
                    src="https://user-images-32128cdd-5075-45d5-99fb-e76753fa11a4.s3.us-east-2.amazonaws.com/Humoresque.MOV"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
const Player4 = () => {
    return (
        <div>
            <video id="shimmer"
                controls>
                <source
                    src="https://user-images-32128cdd-5075-45d5-99fb-e76753fa11a4.s3.us-east-2.amazonaws.com/PreludeInC%23Minor.MOV"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export {
    Player,
    Player2,
    Player3,
    Player4
};