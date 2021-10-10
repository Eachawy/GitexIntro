import React from "react";
import { translate } from "react-jhipster";
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { Link } from "react-router-dom";

const ThankYouComponent = props => {
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
            <Link to="/uploadLicense" className="backAction" />
            <div className="row thankYou">
                <div className="profile">
                    <h3>Your learner’s profile</h3>
                    <div className="imgProfile">
                        {props.imageprofile &&
                            <img src={props.imageprofile} />
                        }
                    </div>
                    <div className="profileData">
                        <div>
                            <label>Name:</label>
                            <span>{props.username ? props.username : null}</span>
                        </div>
                        <div>
                            <label>Nationality:</label>
                            {props.nationality && <span>
                                <span className={`flag-icon flag-icon-${props.nationality.code.toLowerCase()}`} />
                                {props.nationality.name}
                            </span>
                            }

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

const mapStateToProps = ({ profileimage, username, nationality }: IRootState) => ({
    imageprofile: profileimage.currentImage,
    username: username.currentUsarName,
    nationality: nationality.currentNationality
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, null)(ThankYouComponent);