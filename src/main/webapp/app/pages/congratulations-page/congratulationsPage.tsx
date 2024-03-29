import React from "react";
import { translate } from "react-jhipster";
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { Link } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';
import AnimationFile2 from '../../../content/images/animation/animation_2.json';

const CongratulationsComponent = props => {

    const [user, setUser] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [nationality, setNationality] = React.useState(null);

    React.useEffect(() => {
        setUser(props.username);
        setImage(props.imageprofile);
        setNationality(props.nationality);
    }, []);

    return (
        <>
            <Link to="/youreAllSet" className="backAction" />
            <div className="centerPosition">
                <div className="congratulations">
                    <h1>{translate("pages.congratulations.yourDubai")}</h1>
                    <Link to="/afterYourLicense" className="btnAction">{translate("pages.button.continue")}</Link>
                </div>
                <div className="row">
                    <div className="col-3">
                        <p>{translate("pages.congratulations.tryService")}</p>
                        <div className="qrCode" />
                    </div>
                    <div className="col-9">
                        <div className="drivingLicens">
                            {props.imageprofile &&
                                <img src={props.imageprofile} />
                            }
                            <span className="userName">{props.username ? props.username : null}</span>
                            <span className="licenseNo">12345</span>
                            {props.nationality &&
                                <span className="nationality">{props.currentLocale === 'en' ? props.nationality.name.en : props.nationality.name.ar}</span>
                            }
                            <span className="dateBirth">22/05/1990</span>
                            <span className="issueDate">11/12/2021</span>
                            <span className="exDate">11/12/2023</span>
                            <span className="palceIssue">{props.currentLocale === 'en' ? 'Dubai' : 'دبي'}</span>
                        </div>

                        <Player
                            autoplay
                            loop
                            className="congratulationsAnim"
                            src={AnimationFile2}
                            background="transparent">
                        </Player>

                    </div>

                </div>
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

export default connect(mapStateToProps, null)(CongratulationsComponent);