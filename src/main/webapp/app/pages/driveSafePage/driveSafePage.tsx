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
            <Link to="/selectYourCar" className="backAction" />
            <div className="row driveSafe">
                <div className="col">
                    <h1>Drive safe, <br />Gustave</h1>
                    <div className="vehicleLicense">
                        <span>{props.username ? props.username : null}</span>
                        {props.nationality.name}
                    </div>
                    <Link to="/" className="btnAction">Done</Link>
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

const mapStateToProps = ({ profileimage, username, nationality }: IRootState) => ({
    imageprofile: profileimage.currentImage,
    username: username.currentUsarName,
    nationality: nationality.currentNationality
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, null)(DriveSafeComponent);