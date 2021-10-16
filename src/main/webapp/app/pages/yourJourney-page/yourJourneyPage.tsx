import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';


const YourJourneyComponent = props => {
    const [slider, setSlider] = React.useState(null);

    const settings = {
        dots: false,
        infinite: false,
        // className: "center",
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
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
        // rtl: props.currentLocale === "ar" ? true : false
    }

    return (
        <>
            <Link to="/thankYou" className="backAction" />
            <div className="yourJourney">
                <h2>{translate("pages.ypurJourney.journeyObtaining")}</h2>
                <Slider ref={(slide: any) => { setSlider(slide) }} {...settings}>
                    <div>
                        <div className="empty" />
                    </div>

                    <div>
                        <div className="j_1">
                            <h3>{translate("pages.ypurJourney.theoryLessons")}</h3>
                            <p>{translate("pages.ypurJourney.completeYour")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_2">
                            <h3>{translate("pages.ypurJourney.knowledgeTest")}</h3>
                            <p>{translate("pages.ypurJourney.bookPass")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_3">
                            <h3>{translate("pages.ypurJourney.eyeTest")}</h3>
                            <p>{translate("pages.ypurJourney.yourEyes")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_5">
                            <h3>{translate("pages.ypurJourney.roadTest")}</h3>
                            <p>{translate("pages.ypurJourney.bookAhead")}</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_6">
                            <h3>{translate("pages.ypurJourney.obtainDriving")}</h3>
                        </div>
                    </div>
                    <div>
                        <Link to="/finishLessons" className="continue">
                            <h6>{translate("pages.button.continue")}</h6>
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


const mapStateToProps = ({ username, locale }: IRootState) => ({
    currentUser: username,
    currentLocale: locale.currentLocale
});


type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, null)(YourJourneyComponent);