import React from "react";
import { translate } from "react-jhipster";

import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { setNationality } from 'app/pages/nationality-page/nationality.reducer';

import { AutoComplete } from 'primereact/autocomplete';
import { Link } from "react-router-dom";

const NationalityComponent = props => {

    const [selectedCountry, setSelectedCountry] = React.useState<any>(null);
    const [filteredCountries, setFilteredCountries] = React.useState<any>(null);
    const [countries, setCountries] = React.useState<any>(
        [
            { "name": "Afghanistan", "code": "af" },
            { "name": "Åland Islands", "code": "ax" },
            { "name": "Albania", "code": "al" },
            { "name": "Algeria", "code": "dz" },
            { "name": "American Samoa", "code": "as" },
            { "name": "Andorra", "code": "ad" },
            { "name": "Angola", "code": "ao" },
            { "name": "Anguilla", "code": "ai" },
            { "name": "Antarctica", "code": "aq" },
            { "name": "Antigua and Barbuda", "code": "ag" },
            { "name": "Argentina", "code": "ar" },
            { "name": "Armenia", "code": "am" },
            { "name": "Aruba", "code": "aw" },
            { "name": "Australia", "code": "au" },
            { "name": "Austria", "code": "at" },
            { "name": "Azerbaijan", "code": "az" },
            { "name": "Bahamas", "code": "bs" },
            { "name": "Bahrain", "code": "bh" },
            { "name": "Bangladesh", "code": "bd" },
            { "name": "Barbados", "code": "bb" },
            { "name": "Belarus", "code": "by" },
            { "name": "Belgium", "code": "be" },
            { "name": "Belize", "code": "bz" },
            { "name": "Benin", "code": "bj" },
            { "name": "Bermuda", "code": "bm" },
            { "name": "Bhutan", "code": "bt" },
            { "name": "Bolivia", "code": "bo" },
            { "name": "Bosnia and Herzegovina", "code": "ba" },
            { "name": "Botswana", "code": "bw" },
            { "name": "Bouvet Island", "code": "bv" },
            { "name": "Brazil", "code": "br" },
            { "name": "British Indian Ocean Territory", "code": "io" },
            { "name": "Brunei Darussalam", "code": "bn" },
            { "name": "Bulgaria", "code": "bg" },
            { "name": "Burkina Faso", "code": "bf" },
            { "name": "Burundi", "code": "bi" },
            { "name": "Cambodia", "code": "kh" },
            { "name": "Cameroon", "code": "cm" },
            { "name": "Canada", "code": "ca" },
            { "name": "Cape Verde", "code": "cv" },
            { "name": "Cayman Islands", "code": "ky" },
            { "name": "Central African Republic", "code": "cf" },
            { "name": "Chad", "code": "td" },
            { "name": "Chile", "code": "cl" },
            { "name": "China", "code": "cn" },
            { "name": "Christmas Island", "code": "cx" },
            { "name": "Cocos (Keeling) Islands", "code": "cc" },
            { "name": "Colombia", "code": "co" },
            { "name": "Comoros", "code": "km" },
            { "name": "Congo", "code": "cg" },
            { "name": "Congo, The Democratic Republic of the", "code": "cd" },
            { "name": "Cook Islands", "code": "ck" },
            { "name": "Costa Rica", "code": "cr" },
            { "name": "Cote D\"Ivoire", "code": "ci" },
            { "name": "Croatia", "code": "hr" },
            { "name": "Cuba", "code": "cu" },
            { "name": "Cyprus", "code": "cy" },
            { "name": "Czech Republic", "code": "cz" },
            { "name": "Denmark", "code": "dk" },
            { "name": "Djibouti", "code": "dj" },
            { "name": "Dominica", "code": "dm" },
            { "name": "Dominican Republic", "code": "do" },
            { "name": "Ecuador", "code": "ec" },
            { "name": "Egypt", "code": "eg" },
            { "name": "El Salvador", "code": "sv" },
            { "name": "Equatorial Guinea", "code": "gq" },
            { "name": "Eritrea", "code": "er" },
            { "name": "Estonia", "code": "ee" },
            { "name": "Ethiopia", "code": "et" },
            { "name": "Falkland Islands (Malvinas)", "code": "fk" },
            { "name": "Faroe Islands", "code": "fo" },
            { "name": "Fiji", "code": "fj" },
            { "name": "Finland", "code": "fi" },
            { "name": "France", "code": "fr" },
            { "name": "French Guiana", "code": "gf" },
            { "name": "French Polynesia", "code": "pf" },
            { "name": "French Southern Territories", "code": "tf" },
            { "name": "Gabon", "code": "ga" },
            { "name": "Gambia", "code": "gm" },
            { "name": "Georgia", "code": "ge" },
            { "name": "Germany", "code": "de" },
            { "name": "Ghana", "code": "gh" },
            { "name": "Gibraltar", "code": "gi" },
            { "name": "Greece", "code": "gr" },
            { "name": "Greenland", "code": "gl" },
            { "name": "Grenada", "code": "gd" },
            { "name": "Guadeloupe", "code": "gp" },
            { "name": "Guam", "code": "gu" },
            { "name": "Guatemala", "code": "gt" },
            { "name": "Guernsey", "code": "gg" },
            { "name": "Guinea", "code": "gn" },
            { "name": "Guinea-Bissau", "code": "gw" },
            { "name": "Guyana", "code": "gy" },
            { "name": "Haiti", "code": "ht" },
            { "name": "Heard Island and Mcdonald Islands", "code": "hm" },
            { "name": "Holy See (Vatican City State)", "code": "va" },
            { "name": "Honduras", "code": "hn" },
            { "name": "Hong Kong", "code": "hk" },
            { "name": "Hungary", "code": "hu" },
            { "name": "Iceland", "code": "is" },
            { "name": "India", "code": "in" },
            { "name": "Indonesia", "code": "id" },
            { "name": "Iran, Islamic Republic Of", "code": "ir" },
            { "name": "Iraq", "code": "IQ" },
            { "name": "Ireland", "code": "IE" },
            { "name": "Isle of Man", "code": "IM" },
            { "name": "Israel", "code": "IL" },
            { "name": "Italy", "code": "IT" },
            { "name": "Jamaica", "code": "JM" },
            { "name": "Japan", "code": "JP" },
            { "name": "Jersey", "code": "JE" },
            { "name": "Jordan", "code": "JO" },
            { "name": "Kazakhstan", "code": "KZ" },
            { "name": "Kenya", "code": "KE" },
            { "name": "Kiribati", "code": "KI" },
            { "name": "Korea, Democratic People\"S Republic of", "code": "KP" },
            { "name": "Korea, Republic of", "code": "KR" },
            { "name": "Kuwait", "code": "KW" },
            { "name": "Kyrgyzstan", "code": "KG" },
            { "name": "Lao People\"S Democratic Republic", "code": "LA" },
            { "name": "Latvia", "code": "LV" },
            { "name": "Lebanon", "code": "LB" },
            { "name": "Lesotho", "code": "LS" },
            { "name": "Liberia", "code": "LR" },
            { "name": "Libyan Arab Jamahiriya", "code": "LY" },
            { "name": "Liechtenstein", "code": "LI" },
            { "name": "Lithuania", "code": "LT" },
            { "name": "Luxembourg", "code": "LU" },
            { "name": "Macao", "code": "MO" },
            { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
            { "name": "Madagascar", "code": "MG" },
            { "name": "Malawi", "code": "MW" },
            { "name": "Malaysia", "code": "MY" },
            { "name": "Maldives", "code": "MV" },
            { "name": "Mali", "code": "ML" },
            { "name": "Malta", "code": "MT" },
            { "name": "Marshall Islands", "code": "MH" },
            { "name": "Martinique", "code": "MQ" },
            { "name": "Mauritania", "code": "MR" },
            { "name": "Mauritius", "code": "MU" },
            { "name": "Mayotte", "code": "YT" },
            { "name": "Mexico", "code": "MX" },
            { "name": "Micronesia, Federated States of", "code": "FM" },
            { "name": "Moldova, Republic of", "code": "MD" },
            { "name": "Monaco", "code": "MC" },
            { "name": "Mongolia", "code": "MN" },
            { "name": "Montserrat", "code": "MS" },
            { "name": "Morocco", "code": "MA" },
            { "name": "Mozambique", "code": "MZ" },
            { "name": "Myanmar", "code": "MM" },
            { "name": "Namibia", "code": "NA" },
            { "name": "Nauru", "code": "NR" },
            { "name": "Nepal", "code": "NP" },
            { "name": "Netherlands", "code": "NL" },
            { "name": "Netherlands Antilles", "code": "AN" },
            { "name": "New Caledonia", "code": "NC" },
            { "name": "New Zealand", "code": "NZ" },
            { "name": "Nicaragua", "code": "NI" },
            { "name": "Niger", "code": "NE" },
            { "name": "Nigeria", "code": "NG" },
            { "name": "Niue", "code": "NU" },
            { "name": "Norfolk Island", "code": "NF" },
            { "name": "Northern Mariana Islands", "code": "MP" },
            { "name": "Norway", "code": "NO" },
            { "name": "Oman", "code": "OM" },
            { "name": "Pakistan", "code": "PK" },
            { "name": "Palau", "code": "PW" },
            { "name": "Palestinian Territory, Occupied", "code": "PS" },
            { "name": "Panama", "code": "PA" },
            { "name": "Papua New Guinea", "code": "PG" },
            { "name": "Paraguay", "code": "PY" },
            { "name": "Peru", "code": "PE" },
            { "name": "Philippines", "code": "PH" },
            { "name": "Pitcairn", "code": "PN" },
            { "name": "Poland", "code": "PL" },
            { "name": "Portugal", "code": "PT" },
            { "name": "Puerto Rico", "code": "PR" },
            { "name": "Qatar", "code": "QA" },
            { "name": "Reunion", "code": "RE" },
            { "name": "Romania", "code": "RO" },
            { "name": "Russian Federation", "code": "RU" },
            { "name": "RWANDA", "code": "RW" },
            { "name": "Saint Helena", "code": "SH" },
            { "name": "Saint Kitts and Nevis", "code": "KN" },
            { "name": "Saint Lucia", "code": "LC" },
            { "name": "Saint Pierre and Miquelon", "code": "PM" },
            { "name": "Saint Vincent and the Grenadines", "code": "VC" },
            { "name": "Samoa", "code": "WS" },
            { "name": "San Marino", "code": "SM" },
            { "name": "Sao Tome and Principe", "code": "ST" },
            { "name": "Saudi Arabia", "code": "SA" },
            { "name": "Senegal", "code": "SN" },
            { "name": "Serbia and Montenegro", "code": "CS" },
            { "name": "Seychelles", "code": "SC" },
            { "name": "Sierra Leone", "code": "SL" },
            { "name": "Singapore", "code": "SG" },
            { "name": "Slovakia", "code": "SK" },
            { "name": "Slovenia", "code": "SI" },
            { "name": "Solomon Islands", "code": "SB" },
            { "name": "Somalia", "code": "SO" },
            { "name": "South Africa", "code": "ZA" },
            { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
            { "name": "Spain", "code": "ES" },
            { "name": "Sri Lanka", "code": "LK" },
            { "name": "Sudan", "code": "SD" },
            { "name": "Suriname", "code": "SR" },
            { "name": "Svalbard and Jan Mayen", "code": "SJ" },
            { "name": "Swaziland", "code": "SZ" },
            { "name": "Sweden", "code": "SE" },
            { "name": "Switzerland", "code": "CH" },
            { "name": "Syrian Arab Republic", "code": "SY" },
            { "name": "Taiwan, Province of China", "code": "TW" },
            { "name": "Tajikistan", "code": "TJ" },
            { "name": "Tanzania, United Republic of", "code": "TZ" },
            { "name": "Thailand", "code": "TH" },
            { "name": "Timor-Leste", "code": "TL" },
            { "name": "Togo", "code": "TG" },
            { "name": "Tokelau", "code": "TK" },
            { "name": "Tonga", "code": "TO" },
            { "name": "Trinidad and Tobago", "code": "TT" },
            { "name": "Tunisia", "code": "TN" },
            { "name": "Turkey", "code": "TR" },
            { "name": "Turkmenistan", "code": "TM" },
            { "name": "Turks and Caicos Islands", "code": "TC" },
            { "name": "Tuvalu", "code": "TV" },
            { "name": "Uganda", "code": "UG" },
            { "name": "Ukraine", "code": "UA" },
            { "name": "United Arab Emirates", "code": "AE" },
            { "name": "United Kingdom", "code": "GB" },
            { "name": "United States", "code": "US" },
            { "name": "United States Minor Outlying Islands", "code": "UM" },
            { "name": "Uruguay", "code": "UY" },
            { "name": "Uzbekistan", "code": "UZ" },
            { "name": "Vanuatu", "code": "VU" },
            { "name": "Venezuela", "code": "VE" },
            { "name": "Viet Nam", "code": "VN" },
            { "name": "Virgin Islands, British", "code": "VG" },
            { "name": "Virgin Islands, U.S.", "code": "VI" },
            { "name": "Wallis and Futuna", "code": "WF" },
            { "name": "Western Sahara", "code": "EH" },
            { "name": "Yemen", "code": "YE" },
            { "name": "Zambia", "code": "ZM" },
            { "name": "Zimbabwe", "code": "ZW" }
        ]);


    const searchCountry = (event: { query: string }) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const itemTemplate = (item: any, i: any) => {
        return (
            <div className={'countryItem'} key={i}>
                <span className={`flag-icon flag-icon-${item.code.toLowerCase()}`} />
                <div>{item.name}</div>
            </div>
        );
    }

    const onAutoCompleteChanged = (e: any) => {
        setSelectedCountry(e.value);
    }

    const onNext = () => {
        props.setNationality(selectedCountry);
    }


    return (
        <>
            <Link to="/username" className="backAction" />
            <div className={`userForm ${selectedCountry ? 'active' : null}`}>
                <label>{translate("pages.user.nationality")}</label>
                <AutoComplete
                    value={selectedCountry}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                    forceSelection
                    itemTemplate={itemTemplate}
                    onChange={(e) => onAutoCompleteChanged(e)}
                    placeholder={'Search Country'}
                />
                {selectedCountry &&
                    <Link to="/takePhoto" className="btnAction" onClick={onNext}>{translate("pages.button.next")}</Link>
                }
            </div>
        </>
    );
}

const mapStateToProps = ({ nationality }: IRootState) => ({
    currentNationality: nationality
});
const mapDispatchToProps = { setNationality };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NationalityComponent);