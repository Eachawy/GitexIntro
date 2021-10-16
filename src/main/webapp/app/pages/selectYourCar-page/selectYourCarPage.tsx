import React from "react";
import { translate } from "react-jhipster";
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import $ from 'jquery';

const SelectYourCarComponent = props => {
    const [slider, setSlider] = React.useState(null);
    const settings = {
        dots: false,
        infinite: false,
        className: "center",
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <>
            <Link to="/afterYourLicense" className="backAction" />
            <div className="yourCar">
                <Slider ref={(slide: any) => { setSlider(slide) }} {...settings}>
                    <div>
                        <div className="empty" />
                    </div>
                    <div>
                        <div className="profile">
                            <h2>{translate("pages.selectYourPage.yourRTAProfile")}</h2>
                            {props.imageprofile &&
                                <img src={props.imageprofile} />
                            }
                            <p>{props.username ? props.username : null}</p>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle1.jpeg" />
                            <h6>
                                {translate("pages.selectYourPage.carOne")}
                                <span>2021</span>
                            </h6>
                            <Link to="/DriveSafeNoVehicle" className="rent">
                                <h6>{translate("pages.selectYourPage.rent")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "2,200"
                                })}</p>
                            </Link>
                            <Link to="/selectPlate" className="buy">
                                <h6>{translate("pages.selectYourPage.buy")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "60,000"
                                })}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle2.jpeg" />
                            <h6>
                                {translate("pages.selectYourPage.carOne")}
                                <span>2021</span>
                            </h6>
                            <Link to="/DriveSafeNoVehicle" className="rent">
                                <h6>{translate("pages.selectYourPage.rent")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "2,200"
                                })}</p>
                            </Link>
                            <Link to="/selectPlate" className="buy">
                                <h6>{translate("pages.selectYourPage.buy")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "60,000"
                                })}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle3.png" />
                            <h6>
                                {translate("pages.selectYourPage.carThree")}
                                <span>2021</span>
                            </h6>
                            <Link to="/DriveSafeNoVehicle" className="rent">
                                <h6>{translate("pages.selectYourPage.rent")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "2,200"
                                })}</p>
                            </Link>
                            <Link to="/selectPlate" className="buy">
                                <h6>{translate("pages.selectYourPage.buy")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "60,000"
                                })}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle1.jpeg" />
                            <h6>
                                {translate("pages.selectYourPage.carOne")}
                                <span>2021</span>
                            </h6>
                            <Link to="/DriveSafeNoVehicle" className="rent">
                                <h6>{translate("pages.selectYourPage.rent")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "2,200"
                                })}</p>
                            </Link>
                            <Link to="/selectPlate" className="buy">
                                <h6>{translate("pages.selectYourPage.buy")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "60,000"
                                })}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle2.jpeg" />
                            <h6>
                                {translate("pages.selectYourPage.carTwo")}
                                <span>2021</span>
                            </h6>
                            <Link to="/DriveSafeNoVehicle" className="rent">
                                <h6>{translate("pages.selectYourPage.rent")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "2,200"
                                })}</p>
                            </Link>
                            <Link to="/selectPlate" className="buy">
                                <h6>{translate("pages.selectYourPage.buy")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "60,000"
                                })}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle3.png" />
                            <h6>
                                {translate("pages.selectYourPage.carThree")}
                                <span>2021</span>
                            </h6>
                            <Link to="/DriveSafeNoVehicle" className="rent">
                                <h6>{translate("pages.selectYourPage.rent")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "2,200"
                                })}</p>
                            </Link>
                            <Link to="/selectPlate" className="buy">
                                <h6>{translate("pages.selectYourPage.buy")}</h6>
                                <p>{translate("pages.selectYourPage.from1", {
                                    amount: "60,000"
                                })}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="empty" />
                    </div>
                    <div>
                        <div className="empty" />
                    </div>
                </Slider>
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

export default connect(mapStateToProps, null)(SelectYourCarComponent);