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
            <div className="congratulations">
                <h1>Congratulations on getting<br /> your Dubai driving license</h1>
                <Link to="/afterYourLicense" className="btnAction">Continue</Link>
            </div>
            <div className="row">
                <div className="col-3">
                    <p>Try this service on RTA.ae</p>
                    <div className="qrCode" />
                </div>
                <div className="col-9">
                    <div className="drivingLicens">
                        {props.imageprofile &&
                            <img src={props.imageprofile} />
                        }
                        <span className="userName">{props.username ? props.username : null}</span>
                        <span className="licenseNo">12345</span>
                        <span className="nationality">{props.nationality.name}</span>
                        <span className="dateBirth">22/05/1990</span>
                        <span className="issueDate">11/12/2021</span>
                        <span className="exDate">11/12/2023</span>
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
        </>
    );
}


const mapStateToProps = ({ profileimage, username, nationality }: IRootState) => ({
    imageprofile: profileimage.currentImage,
    username: username.currentUsarName,
    nationality: nationality.currentNationality
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, null)(CongratulationsComponent);