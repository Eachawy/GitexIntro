import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const FinishLessonsComponent = props => {

    React.useEffect(() => {
        document.querySelector('.gitexContainer').classList.add("halfScreenModeright");
        return () => {
            document.querySelector('.gitexContainer').classList.remove("halfScreenModeright");
        }
    }, []);

    return (
        <>
            <Link to="/yourJourney" className="backAction" />
            <div className="row thankYou">
                <div className="message">
                    <h1>{translate("pages.finishLessons.finishAll")}</h1>
                    <Link to="/lectures" className="btnAction">{translate("pages.button.continue")}</Link>
                </div>
                <div className="profile">
                    <div className="animation finishAll">
                        <img src="../../../content/images/animation/finishAll.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FinishLessonsComponent;