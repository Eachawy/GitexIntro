import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';
import AnimationFile1 from '../../../content/images/animation/animation_1.json';

const MovingComponent = props => {
    return (
        <>
            <div className="movingDubai">
                <h1>RTA SwiftDrive</h1>
                <h3>Start driving in Dubai within 3 days using our,blockchain powered platform!</h3>
                <Link to="/username" className="btnAction">Get Started</Link>
            </div>
            <Player
                autoplay
                loop
                className="movingDubaiAnim"
                src={AnimationFile1}
                background="transparent">
            </Player>
        </>
    );
}

export default MovingComponent;