import React from 'react';
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import { Calendar } from 'primereact/calendar';
import moment from 'moment';

const RoadTestDateComponent = props => {

    const [appointmentDates, setAppointmentDates] = React.useState<any>(null);
    const [notAvalibaleDates, setNotAvalibaleDates] = React.useState<any>(null);
    const [dateFrom, setDateFrom] = React.useState<any>(null);
    const [dateTo, setDateTo] = React.useState<any>(null);

    React.useEffect(() => {
        document.querySelector('.gitexContainer').classList.add("halfScreenModeright");
        return () => {
            document.querySelector('.gitexContainer').classList.remove("halfScreenModeright");
        }
    }, []);

    const onSelectedDay = e => {
        setAppointmentDates(e.value);
        props.onSelectedDate(e);
        $('.listOfAppointment > div').removeClass('selected');
    };

    return (
        <>

            <Link to="/takeYourTest" className="backAction" />
            <div className="row thankYou">
                <div className="message">
                    <h1>
                        Well done for <br />passing your <br />knowledge <br />test on your <br />first try.
                    </h1>
                    <Link to="/wellDone" className="btnAction">{translate("pages.button.continue")}</Link>
                </div>
                <div className="profile">
                    <Calendar
                        value={appointmentDates}
                        onChange={onSelectedDay}
                        inline={true}
                        showWeek={false}
                        monthNavigator={true}
                        yearNavigator={true}
                        yearRange="2010:2030"
                        disabledDates={notAvalibaleDates}
                        disabledDays={[7]}
                        minDate={dateFrom ? dateFrom : new Date(moment('01-01-2020').format('MM-DD-YYYY'))}
                        maxDate={dateTo ? dateTo : new Date(moment('01-01-2020').format('MM-DD-YYYY'))}
                    />
                </div>
            </div>
        </>
    );
}


export default RoadTestDateComponent;