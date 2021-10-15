import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { Link } from 'react-router-dom';
import { translate } from 'react-jhipster';


const PreviewComponent = props => {

    return (
        <>
            <Link to="/selectPlate" className="backAction" />
            <div className="preview">
                <div className="row">
                    <div className="card profile">
                        <h2>{translate("pages.selectYourPage.yourRTAProfile")}</h2>
                        {props.imageprofile &&
                            <img src={props.imageprofile} />
                        }
                        <p>{props.username ? props.username : null}</p>
                        <p>+971 52 123 45 67</p>
                        <p>gmomal@gmail.com</p>
                    </div>
                    <div className="card car">
                        <img src="../../../content/images/vehicles/vehicle1.jpeg" />
                        <h6>
                            {translate("pages.selectYourPage.carOne")}
                            <span>2021</span>
                            <p>{translate("pages.selectYourPage.from1", {
                                amount: "60,000"
                            })}</p>
                        </h6>
                    </div>
                    <div className="card">
                        <div className="plateComponent">
                            <div className="plate expo luxu">
                                <span>AA</span>
                                <div>24876</div>
                            </div>
                            <span className="lbl">{translate("pages.selectPlate.paid")}</span>
                        </div>
                    </div>
                </div>
                <Link to="/driveSafe" className="btnAction">{translate("pages.button.continue")}</Link>
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

export default connect(mapStateToProps, null)(PreviewComponent);