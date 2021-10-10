import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const MovingComponent = props => {
    return (
        <div className="movingDubai">
            <h1>RTA SwiftDrive</h1>
            <h3>Start driving in Dubai within 3 days!</h3>
            <Link to="/username" className="btnAction">Get Started</Link>
        </div>
    );
}

export default MovingComponent;