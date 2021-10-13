import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import Slider from "react-slick";



const YourJourneyComponent = props => {
    const [slider, setSlider] = React.useState(null);

    const settings = {
        dots: false,
        infinite: false,
        className: "center",
        speed: 700,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
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
    }

    // const intervalFN = setInterval(() => {
    //     slider ? slider.slickNext() : null;
    // }, 1000);
    return (
        <>
            <Link to="/thankYou" className="backAction" />
            <div className="yourJourney">
                <h2>Your journey to obtaining a Dubai driving license</h2>
                <Slider ref={(slide: any) => { setSlider(slide) }} {...settings}>

                    <div>
                        <div className="empty" />
                    </div>

                    <div>
                        <div className="j_1">
                            <h3>Theory Lessons</h3>
                            <p>Complete your 8-hour lessons online</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_2">
                            <h3>Knowledge Test</h3>
                            <p>Book and pass the RTA knowledge test online</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_3">
                            <h3>Eye Test</h3>
                            <p>Have your eyes tested at RTA authorized centers in Dubai</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_4">
                            <h3>Practical Training</h3>
                            <p>Attend your training in Dubai if you intend to book classes</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_5">
                            <h3>Road Test</h3>
                            <p>Book ahead and pass the RTA road test in Dubai</p>
                        </div>
                    </div>
                    <div>
                        <div className="j_6">
                            <h3>Obtain Driving License</h3>
                        </div>
                    </div>
                    <div>
                        <Link to="/finishLessons" className="continue">
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

export default YourJourneyComponent;