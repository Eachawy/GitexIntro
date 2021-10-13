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
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
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
                            <h2>Your RTA profile</h2>
                            {props.imageprofile &&
                                <img src={props.imageprofile} />
                            }
                            <p>{props.username ? props.username : null}</p>
                            <p>+971 52 123 45 67</p>
                            <p>gmomal@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle1.svg" />
                            <h6>
                                For Esco
                                <span>2021</span>
                            </h6>
                            <Link to="/congratulations" className="rent">
                                <h6>Rent</h6>
                                <p>From AED 2,200/mo</p>
                            </Link>
                            <Link to="/driveSafe" className="buy">
                                <h6>Buy</h6>
                                <p>From AED 60,000</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle2.svg" />
                            <h6>
                                Car two
                                <span>2021</span>
                            </h6>
                            <Link to="/congratulations" className="rent">
                                <h6>Rent</h6>
                                <p>From AED 2,200/mo</p>
                            </Link>
                            <Link to="/driveSafe" className="buy">
                                <h6>Buy</h6>
                                <p>From AED 60,000</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle3.svg" />
                            <h6>
                                Car Three
                                <span>2021</span>
                            </h6>
                            <Link to="/congratulations" className="rent">
                                <h6>Rent</h6>
                                <p>From AED 2,200/mo</p>
                            </Link>
                            <Link to="/driveSafe" className="buy">
                                <h6>Buy</h6>
                                <p>From AED 60,000</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle1.svg" />
                            <h6>
                                For Esco
                                <span>2021</span>
                            </h6>
                            <Link to="/congratulations" className="rent">
                                <h6>Rent</h6>
                                <p>From AED 2,200/mo</p>
                            </Link>
                            <Link to="/driveSafe" className="buy">
                                <h6>Buy</h6>
                                <p>From AED 60,000</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle2.svg" />
                            <h6>
                                Car two
                                <span>2021</span>
                            </h6>
                            <Link to="/congratulations" className="rent">
                                <h6>Rent</h6>
                                <p>From AED 2,200/mo</p>
                            </Link>
                            <Link to="/driveSafe" className="buy">
                                <h6>Buy</h6>
                                <p>From AED 60,000</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="car">
                            <img src="../../../content/images/vehicles/vehicle3.svg" />
                            <h6>
                                Car Three
                                <span>2021</span>
                            </h6>
                            <Link to="/congratulations" className="rent">
                                <h6>Rent</h6>
                                <p>From AED 2,200/mo</p>
                            </Link>
                            <Link to="/driveSafe" className="buy">
                                <h6>Buy</h6>
                                <p>From AED 60,000</p>
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