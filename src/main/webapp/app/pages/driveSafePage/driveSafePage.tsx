import React from "react";
import { translate } from "react-jhipster";
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { Link } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';
import AnimationFile3 from '../../../content/images/animation/animation_3.json';

const DriveSafeComponent = props => {

    const [user, setUser] = React.useState(null);
    const [nationality, setNationality] = React.useState(null);

    React.useEffect(() => {
        setUser(props.username);
        setNationality(props.nationality);
    }, []);

    return (
        <>
            <Link to="/Preview" className="backAction" />
            <div className="row driveSafe">
                <div className="col">
                    <h1>{translate("pages.driveSafe.driveSafepar")}{props.username ? props.username : null}</h1>
                    <div className="vehicleLicense">
                        <span className="platenum">AA / 12345</span>
                        <span className="placeIssue">Dubai</span>
                        <span className="plateType">--</span>
                        <span className="tcNo">12345678</span>
                        <span className="username">{props.username ? props.username : null}</span>
                        {props.nationality &&
                            <span className="nationality">{props.currentLocale === 'en' ? props.nationality.name.en : props.nationality.name.ar}</span>
                        }

                        <span className="regData">11/11/2012</span>
                        <span className="expDate">11/11/2012</span>
                        <span className="ins">D.M</span>
                        <span className="insExp">11/11/2021</span>
                        <span className="insType">--</span>
                        <span className="policeNo">33984</span>
                        <span className="mortagege">--</span>
                    </div>
                    <Link to="/" className="btnAction">{translate("pages.button.done")}</Link>
                </div>
                <Player
                    autoplay
                    loop
                    className="driveSafeAnim"
                    src={AnimationFile3}
                    background="transparent">
                </Player>
            </div>
        </>
    );
}

const mapStateToProps = ({ profileimage, username, nationality, locale }: IRootState) => ({
    imageprofile: profileimage.currentImage,
    username: username.currentUsarName,
    nationality: nationality.currentNationality,
    currentLocale: locale.currentLocale
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, null)(DriveSafeComponent);