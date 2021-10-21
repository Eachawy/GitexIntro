import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const YoureAllSetComponent = props => {

    React.useEffect(() => {
        document.querySelector('.gitexContainer').classList.add("halfScreenModeright");
        return () => {
            document.querySelector('.gitexContainer').classList.remove("halfScreenModeright");
        }
    }, []);

    return (
        <>
            <Link to="/wellDone" className="backAction" />
            <div className="row thankYou">
                <div className="message">
                    <h1>{translate("pages.yourAllSet.wellPick")}</h1>
                    <Link to="/congratulations" className="btnAction">{translate("pages.button.continue")}</Link>
                </div>
                <div className="profile">
                    <div className="animation youAreAllSet">
                        <img src="../../../content/images/animation/youAreAllSet.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default YoureAllSetComponent;