import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const FinishLessonsComponent = props => {
    return (
        <>
            <Link to="/yourJourney" className="backAction" />
            <div className="finishLessons">
                <h1>{translate("pages.finishLessons.finishAll")}</h1>
                <Link to="/lectures" className="btnAction">{translate("pages.button.continue")}</Link>
            </div>
        </>
    );
}

export default FinishLessonsComponent;