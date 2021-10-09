import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import Slider from "react-slick";


const LecturesComponent = props => {
    const settings = {
        // // dots: true,
        // infinite: false,
        // className: "center",
        // centerMode: true,
        // speed: 500,
        // slidesToShow: 3,
        // // slidesToScroll: 1,
        // rows: 1,
        // // slidesPerRow: 2
        className: "center",
        // centerMode: true,
        infinite: false,
        centerPadding: "0px",
        slidesToShow: 2,
        speed: 500,
        // dots: true,
    };
    return (
        <>
            <Link to="/finishLessons" className="backAction" />
            <div className="yourLectures">
                <h2>Overview of the 8 RTA mandatory lectures</h2>
                <Slider {...settings}>
                    <div>
                        <div className="lec">
                            <h6>Lecture 1</h6>
                            <p>Attitude and Responsibilities of the Driver</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec">
                            <h6>Lecture 2</h6>
                            <p>Knowledge of Traffic Rules and Regulations</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec">
                            <h6>Lecture 3</h6>
                            <p>Characteristics of Road Users</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec">
                            <h6>Lecture 4</h6>
                            <p>Driver Condition</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec">
                            <h6>Lecture 5</h6>
                            <p>Driver Condition</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec">
                            <h6>Lecture 6</h6>
                            <p>Traffic Accidents, Case Studies and What to do in an Accident</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/" className="lec continue">
                            <h3>Continue</h3>
                        </Link>
                    </div>

                </Slider>
            </div>
        </>
    );
}

export default LecturesComponent;