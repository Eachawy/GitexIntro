import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const UploadLicenseComponent = props => {


    return (
        <>
            <Link to="/takePhoto" className="backAction" />
            <div className="uploadLicense">
                <h1>Upload license</h1>
                <p>Take a photo of your home country driving license</p>
                <div className="license">
                    <div className="lic_front" />
                    <div className="lic_back" />
                </div>
                <Link to="/thankYou" className="btnAction">Submit</Link>
            </div>
        </>
    );
}

export default UploadLicenseComponent;