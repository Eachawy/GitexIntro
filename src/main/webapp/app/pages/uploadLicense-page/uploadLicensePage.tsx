import React from "react";
import { translate } from "react-jhipster";
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { Link } from "react-router-dom";

const UploadLicenseComponent = props => {

    const [image, setImage] = React.useState(null);

    React.useEffect(() => {
        setImage(props.imageprofile);
    }, []);
    return (
        <>
            <Link to="/takePhoto" className="backAction" />
            <div className="uploadLicense">
                <h1>Upload license</h1>
                <p>Take a photo of your home country driving license</p>
                <div className="license">
                    <div className="lic_front">
                        {props.imageprofile &&
                            <img src={props.imageprofile} />
                        }
                    </div>
                    <div className="lic_back" />
                </div>
                <Link to="/thankYou" className="btnAction">Submit</Link>
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

export default connect(mapStateToProps, null)(UploadLicenseComponent);