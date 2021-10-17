import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";
import { Calendar } from 'primereact/calendar';
import moment from 'moment';


const WellDoneComponent = props => {

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
                    <h1>{translate("pages.wellDone.youDid")}</h1>
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
                        minDate={dateFrom ? dateFrom : new Date(moment('11-01-2021').format('MM-DD-YYYY'))}
                        maxDate={dateTo ? dateTo : new Date(moment('12-31-2022').format('MM-DD-YYYY'))}
                    />
                    <Link to="/youreAllSet" className="btnAction">{translate("pages.button.bookYourRoad")}</Link>
                </div>
            </div>
        </>
    );
}

export default WellDoneComponent;