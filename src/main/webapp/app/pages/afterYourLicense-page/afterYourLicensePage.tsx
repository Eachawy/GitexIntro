import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const AfterYourLicenseComponent = props => {
    return (
        <>
            <Link to="/congratulations" className="backAction" />
            <div className="finishLessons">
                <h1>{translate("pages.afterYourLicense.yourCarRightAway")}</h1>
                <Link to="/selectYourCar" className="btnAction">{translate("pages.button.selectCar")}</Link>
            </div>
        </>
    );
}

export default AfterYourLicenseComponent;