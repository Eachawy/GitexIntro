import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const AfterYourLicenseComponent = props => {

    React.useEffect(() => {
        document.querySelector('.gitexContainer').classList.add("halfScreenModeright");
        return () => {
            document.querySelector('.gitexContainer').classList.remove("halfScreenModeright");
        }
    }, []);

    return (
        <>
            <Link to="/congratulations" className="backAction" />
            <div className="row thankYou">
                <div className="message">
                    <h1>{translate("pages.afterYourLicense.yourCarRightAway")}</h1>
                    <Link to="/selectYourCar" className="btnAction">{translate("pages.button.selectCar")}</Link>
                </div>
                <div className="profile">
                    <div className="animation afterYourlicense">
                        <img src="../../../content/images/animation/afterYour.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AfterYourLicenseComponent;