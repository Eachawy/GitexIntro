import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import $ from 'jquery';

const LecturesComponent = props => {
    const [slider, setSlider] = React.useState(null);
    const settings = {
        dots: false,
        infinite: false,
        className: "center",
        speed: 700,
        slidesToShow: 7,
        slidesToScroll: 1,
        /*eslint object-shorthand: "error"*/
        beforeChange: (currentSlide: any, nextSlide: any) => {
            $(`.slick-track > div[data-index="${nextSlide}"]`).find('.lec').addClass('active');
            nextSlide === 7 ? $(`.slick-track > div[data-index="${nextSlide + 1}"]`).find('.lec').addClass('active') : null;
        },
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

    const intervalFN = setInterval(() => {
        slider ? slider.slickNext() : null;
    }, 1000);
    setTimeout(() => {
        clearInterval(intervalFN);
    }, 10000);
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
                        <div className="lec _1">
                            <h6>Lecture 1</h6>
                            <p>Attitude and Responsibilities of the Driver</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _2">
                            <h6>Lecture 2</h6>
                            <p>Knowledge of Traffic Rules and Regulations</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _3">
                            <h6>Lecture 3</h6>
                            <p>Characteristics of Road Users</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _4">
                            <h6>Lecture 4</h6>
                            <p>Driver Condition</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _5">
                            <h6>Lecture 5</h6>
                            <p>The Driving Environment</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _6">
                            <h6>Lecture 6</h6>
                            <p>Driving on Freeways, Traffic Violations {'&'} Route Planning</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _7">
                            <h6>Lecture 7</h6>
                            <p>Driver Condition</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _8">
                            <h6>Lecture 8</h6>
                            <p>Traffic Accidents, Case Studies and What to do in an Accident</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/takeYourTest" className="lec continue">
                            <h3>Continue</h3>
                        </Link>
                    </div>
                    <div>
                        <div className="empty" />
                    </div>
                    <div>
                        <div className="empty" />
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

export default LecturesComponent;