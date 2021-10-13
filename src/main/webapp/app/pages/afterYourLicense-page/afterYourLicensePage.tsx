import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const AfterYourLicenseComponent = props => {
    return (
        <>
            <Link to="/congratulations" className="backAction" />
            <div className="finishLessons">
                <h1>After your license, get<br /> your car right away</h1>
                <Link to="/selectYourCar" className="btnAction">Select a car</Link>
            </div>
        </>
    );
}

export default AfterYourLicenseComponent;