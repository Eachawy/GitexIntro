import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const ThankYouComponent = props => {
    return (
        <>
            <Link to="/takePhoto" className="backAction" />
            <div className="thankYou">
                <div className="profile">
                    <h3>Your learner’s profile</h3>
                    <div className="imgProfile">
                        <img src="../../../content/images/avatar/1.svg" />
                    </div>
                    <div className="profileData">
                        <div>
                            <label>Name:</label>
                            <span>Gustave Momal</span>
                        </div>
                        <div>
                            <label>Nationality:</label>
                            <span>Angola</span>
                        </div>
                        <div>
                            <label>Traffic code:</label>
                            <span>0123456</span>
                        </div>
                        <div>
                            <label>License:</label>
                        </div>
                        <div className="license">
                            <div className="lic_front" />
                            <div className="lic_back" />
                        </div>
                    </div>
                </div>
                <div className="message">
                    <h1>Thank you, Gustave</h1>
                    <Link to="/yourJourney" className="btnAction">Continue</Link>
                </div>
            </div>
        </>
    );
}

export default ThankYouComponent;