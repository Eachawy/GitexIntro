import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const YoureAllSetComponent = props => {
    return (
        <>
            <Link to="/wellDone" className="backAction" />
            <div className="finishLessons">
                <h1>You’re all set. <br />We’ll pick you up for your <br />eye and road test.</h1>
                <Link to="/congratulations" className="btnAction">Continue</Link>
            </div>
        </>
    );
}

export default YoureAllSetComponent;