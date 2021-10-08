import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const MovingComponent = props => {
    return (
        <div className="movingDubai">
            <h1>Moving to Dubai?</h1>
            <h3>Apply for your driving license before you travel.</h3>
            <Link to="/username" className="btnAction">Get Started</Link>
        </div>
    );
}

export default MovingComponent;