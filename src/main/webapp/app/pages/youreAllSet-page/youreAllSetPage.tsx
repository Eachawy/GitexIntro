import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const YoureAllSetComponent = props => {
    return (
        <>
            <Link to="/wellDone" className="backAction" />
            <div className="finishLessons">
                <h1>{translate("pages.yourAllSet.wellPick")}</h1>
                <Link to="/congratulations" className="btnAction">{translate("pages.button.continue")}</Link>
            </div>
        </>
    );
}

export default YoureAllSetComponent;