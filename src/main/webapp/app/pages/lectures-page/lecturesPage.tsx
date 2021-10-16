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
                <h2>{translate("pages.yourLectures.overviewRTA")}</h2>
                <Slider ref={(slide: any) => { setSlider(slide) }} {...settings}>
                    <div>
                        <div className="empty" />
                    </div>
                    <div>
                        <div className="lec _1">
                            <h6>{translate("pages.yourLectures.lecture1")}</h6>
                            <p>{translate("pages.yourLectures.attitudeResponsibilities")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _2">
                            <h6>{translate("pages.yourLectures.lecture2")}</h6>
                            <p>{translate("pages.yourLectures.knowledgeTraffic")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _3">
                            <h6>{translate("pages.yourLectures.lecture3")}</h6>
                            <p>{translate("pages.yourLectures.characteristics")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _4">
                            <h6>{translate("pages.yourLectures.lecture4")}</h6>
                            <p>{translate("pages.yourLectures.driverCondition")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _5">
                            <h6>{translate("pages.yourLectures.lecture5")}</h6>
                            <p>{translate("pages.yourLectures.drivingEnvironment")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _6">
                            <h6>{translate("pages.yourLectures.lecture6")}</h6>
                            <p>{translate("pages.yourLectures.freewaysTraffic")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _7">
                            <h6>{translate("pages.yourLectures.lecture7")}</h6>
                            <p>{translate("pages.yourLectures.driverCondition")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="lec _8">
                            <h6>{translate("pages.yourLectures.lecture8")}</h6>
                            <p>{translate("pages.yourLectures.trafficAccidents")}</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/takeYourTest" className="lec continue">
                            <h6>{translate("pages.button.continue")}</h6>
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