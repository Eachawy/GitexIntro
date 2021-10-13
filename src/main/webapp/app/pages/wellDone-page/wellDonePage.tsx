import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const WellDoneComponent = props => {
    return (
        <>
            <Link to="/takeYourTest" className="backAction" />
            <div className="finishLessons">
                <h1>Well done!<br />You did it on your first try.</h1>
                <Link to="/youreAllSet" className="btnAction">Book your road test</Link>
            </div>
        </>
    );
}

export default WellDoneComponent;