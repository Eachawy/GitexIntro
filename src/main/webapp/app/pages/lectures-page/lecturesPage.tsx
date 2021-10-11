import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import $ from 'jquery';

const LecturesComponent = props => {
    const [slider, setSlider] = React.useState(null);
    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "0px",
        slidesToShow: 4,
        speed: 700,
        /*eslint object-shorthand: "error"*/
        beforeChange: (currentSlide: any, nextSlide: any) => {
            $(`.slick-track > div[data-index="${nextSlide}"]`).find('.lec').addClass('checked');
            nextSlide === 5 ? $(`.slick-track > div[data-index="${nextSlide + 1}"]`).find('.lec').addClass('checked') : null;
        },
    };
    const intervalFN = setInterval(() => {
        slider ? slider.slickNext() : null;
    }, 1000);
    setTimeout(() => {
        clearInterval(intervalFN);
    }, 6000);
    return (
        <>
            <Link to="/finishLessons" className="backAction" />
            <div className="yourLectures">
                <h2>Overview of the 8 RTA mandatory lectures</h2>
                <Slider ref={(slide: any) => { setSlider(slide) }} {...settings}>
                    <div>
                        <div className="empty" />
                    </div>
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
                    <div>
                        <div className="empty" />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default LecturesComponent;