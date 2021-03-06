import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const TakeYourTestComponent = props => {

    React.useEffect(() => {
        document.querySelector('.gitexContainer').classList.add("halfScreenModeright");
        return () => {
            document.querySelector('.gitexContainer').classList.remove("halfScreenModeright");
        }
    }, []);


    return (
        <>

            <Link to="/lectures" className="backAction" />
            <div className="row thankYou">
                <div className="message">
                    <h1>{translate("pages.takeYourTest.fromYourOwn")}</h1>
                    <Link to="/wellDone" className="btnAction">{translate("pages.button.continue")}</Link>
                </div>
                <div className="profile">
                    <div className="animation">
                        <img src="../../../content/images/animation/takeYourTest.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}


export default TakeYourTestComponent;