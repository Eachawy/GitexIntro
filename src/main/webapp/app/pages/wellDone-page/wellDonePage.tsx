import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const WellDoneComponent = props => {
    return (
        <>
            <Link to="/takeYourTest" className="backAction" />
            <div className="finishLessons">
                <h1>{translate("pages.wellDone.youDid")}</h1>
                <Link to="/youreAllSet" className="btnAction">{translate("pages.button.bookYourRoad")}</Link>
            </div>
        </>
    );
}

export default WellDoneComponent;