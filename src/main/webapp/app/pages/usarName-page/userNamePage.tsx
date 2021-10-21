import React from "react";
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { setUserName } from 'app/pages/usarName-page/userName.reducer';
import { translate } from "react-jhipster";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import layout from "simple-keyboard-layouts/build/layouts/arabic";
import { setNationality } from 'app/pages/nationality-page/nationality.reducer';
import { AutoComplete } from 'primereact/autocomplete';


const UserNameComponent = props => {

    const [value, setValue] = React.useState("");
    const [layoutName, setLayoutName] = React.useState("default");
    const [keyboardMode, setKeyboardMode] = React.useState(false);
    let keyboard = null;

    const [selectedCountry, setSelectedCountry] = React.useState<any>(null);
    const [filteredCountries, setFilteredCountries] = React.useState<any>(null);
    const [countries, setCountries] = React.useState<any>(
        [
            { "name": { "en": "Afghanistan", "ar": "أفغانستان" }, "code": "af" },
            { "name": { "en": "Åland Islands", "ar": "جزر آلاند" }, "code": "ax" },
            { "name": { "en": "Albania", "ar": "ألبانيا" }, "code": "al" },
            { "name": { "en": "Algeria", "ar": "الجزائر" }, "code": "dz" },
            { "name": { "en": "American Samoa", "ar": "ساموا الأمريكية" }, "code": "as" },
            { "name": { "en": "Andorra", "ar": "أندورا" }, "code": "ad" },
            { "name": { "en": "Angola", "ar": "أنغولا" }, "code": "ao" },
            { "name": { "en": "Anguilla", "ar": "أنغيلا" }, "code": "ai" },
            { "name": { "en": "Antarctica", "ar": "أنتاركتيكا" }, "code": "aq" },
            {
                "name": { "en": "Antigua and Barbuda", "ar": "أنتيغوا وبربودا" },
                "code": "ag"
            },
            { "name": { "en": "Argentina", "ar": "الأرجنتين" }, "code": "ar" },
            { "name": { "en": "Armenia", "ar": "أرمينيا" }, "code": "am" },
            { "name": { "en": "Aruba", "ar": "أروبا" }, "code": "aw" },
            { "name": { "en": "Australia", "ar": "أستراليا" }, "code": "au" },
            { "name": { "en": "Austria", "ar": "النمسا" }, "code": "at" },
            { "name": { "en": "Azerbaijan", "ar": "أذربيجان" }, "code": "az" },
            { "name": { "en": "Bahamas", "ar": "جزر البهاما" }, "code": "bs" },
            { "name": { "en": "Bahrain", "ar": "البحرين" }, "code": "bh" },
            { "name": { "en": "Bangladesh", "ar": "بنغلاديش" }, "code": "bd" },
            { "name": { "en": "Barbados", "ar": "بربادوس" }, "code": "bb" },
            { "name": { "en": "Belarus", "ar": "بيلاروسيا" }, "code": "by" },
            { "name": { "en": "Belgium", "ar": "بلجيكا" }, "code": "be" },
            { "name": { "en": "Belize", "ar": "بليز" }, "code": "bz" },
            { "name": { "en": "Benin", "ar": "بنن" }, "code": "bj" },
            { "name": { "en": "Bermuda", "ar": "برمودا" }, "code": "bm" },
            { "name": { "en": "Bhutan", "ar": "بوتان" }, "code": "bt" },
            { "name": { "en": "Bolivia", "ar": "بوليفيا" }, "code": "bo" },
            {
                "name": { "en": "Bosnia and Herzegovina", "ar": "البوسنة والهرسك" },
                "code": "ba"
            },
            { "name": { "en": "Botswana", "ar": "بوتسوانا" }, "code": "bw" },
            { "name": { "en": "Bouvet Island", "ar": "جزيرة بوفيت" }, "code": "bv" },
            { "name": { "en": "Brazil", "ar": "البرازيل" }, "code": "br" },
            {
                "name": {
                    "en": "British Indian Ocean Territory",
                    "ar": "إقليم المحيط البريطاني الهندي"
                },
                "code": "io"
            },
            {
                "name": { "en": "Brunei Darussalam", "ar": "بروناي دار السلام" },
                "code": "bn"
            },
            { "name": { "en": "Bulgaria", "ar": "بلغاريا" }, "code": "bg" },
            { "name": { "en": "Burkina Faso", "ar": "بوركينا فاسو" }, "code": "bf" },
            { "name": { "en": "Burundi", "ar": "بوروندي" }, "code": "bi" },
            { "name": { "en": "Cambodia", "ar": "كمبوديا" }, "code": "kh" },
            { "name": { "en": "Cameroon", "ar": "الكاميرون" }, "code": "cm" },
            { "name": { "en": "Canada", "ar": "كندا" }, "code": "ca" },
            { "name": { "en": "Cape Verde", "ar": "الرأس الأخضر" }, "code": "cv" },
            { "name": { "en": "Cayman Islands", "ar": "جزر كايمان" }, "code": "ky" },
            {
                "name": {
                    "en": "Central African Republic",
                    "ar": "جمهورية افريقيا الوسطى"
                },
                "code": "cf"
            },
            { "name": { "en": "Chad", "ar": "تشاد" }, "code": "td" },
            { "name": { "en": "Chile", "ar": "شيلي" }, "code": "cl" },
            { "name": { "en": "China", "ar": "الصين" }, "code": "cn" },
            {
                "name": { "en": "Christmas Island", "ar": "جزيرة الكريسماس" },
                "code": "cx"
            },
            {
                "name": { "en": "Cocos (Keeling) Islands", "ar": "جزر كوكوس (كيلينغ)" },
                "code": "cc"
            },
            { "name": { "en": "Colombia", "ar": "كولومبيا" }, "code": "co" },
            { "name": { "en": "Comoros", "ar": "جزر القمر" }, "code": "km" },
            { "name": { "en": "Congo", "ar": "الكونغو" }, "code": "cg" },
            {
                "name": {
                    "en": "Congo, The Democratic Republic of the",
                    "ar": "جمهورية الكونغو الديمقراطية"
                },
                "code": "cd"
            },
            { "name": { "en": "Cook Islands", "ar": "جزر كوك" }, "code": "ck" },
            { "name": { "en": "Costa Rica", "ar": "كوستا ريكا" }, "code": "cr" },
            { "name": { "en": "Cote D\"Ivoire", "ar": "كوت دإيفوار " }, "code": "ci" },
            { "name": { "en": "Croatia", "ar": "كرواتيا" }, "code": "hr" },
            { "name": { "en": "Cuba", "ar": "كوبا" }, "code": "cu" },
            { "name": { "en": "Cyprus", "ar": "قبرص" }, "code": "cy" },
            {
                "name": { "en": "Czech Republic", "ar": "الجمهورية التشيكية" },
                "code": "cz"
            },
            { "name": { "en": "Denmark", "ar": "الدنمارك" }, "code": "dk" },
            { "name": { "en": "Djibouti", "ar": "جيبوتي" }, "code": "dj" },
            { "name": { "en": "Dominica", "ar": "دومينيكا" }, "code": "dm" },
            {
                "name": { "en": "Dominican Republic", "ar": "جمهورية الدومينيكان" },
                "code": "do"
            },
            { "name": { "en": "Ecuador", "ar": "إكوادور" }, "code": "ec" },
            { "name": { "en": "Egypt", "ar": "مصر" }, "code": "eg" },
            { "name": { "en": "El Salvador", "ar": "السلفادور" }, "code": "sv" },
            {
                "name": { "en": "Equatorial Guinea", "ar": "غينيا الإستوائية" },
                "code": "gq"
            },
            { "name": { "en": "Eritrea", "ar": "إريتريا" }, "code": "er" },
            { "name": { "en": "Estonia", "ar": "إستونيا" }, "code": "ee" },
            { "name": { "en": "Ethiopia", "ar": "أثيوبيا" }, "code": "et" },
            {
                "name": {
                    "en": "Falkland Islands (Malvinas)",
                    "ar": "جزر فوكلاند (مالفيناس)"
                },
                "code": "fk"
            },
            { "name": { "en": "Faroe Islands", "ar": "جزر فاروس" }, "code": "fo" },
            { "name": { "en": "Fiji", "ar": "فيجي" }, "code": "fj" },
            { "name": { "en": "Finland", "ar": "فنلندا" }, "code": "fi" },
            { "name": { "en": "France", "ar": "فرنسا" }, "code": "fr" },
            { "name": { "en": "French Guiana", "ar": "غيانا الفرنسية" }, "code": "gf" },
            {
                "name": { "en": "French Polynesia", "ar": "بولينيزيا الفرنسية" },
                "code": "pf"
            },
            {
                "name": {
                    "en": "French Southern Territories",
                    "ar": "المناطق الجنوبية لفرنسا"
                },
                "code": "tf"
            },
            { "name": { "en": "Gabon", "ar": "غابون" }, "code": "ga" },
            { "name": { "en": "Gambia", "ar": "غامبيا" }, "code": "gm" },
            { "name": { "en": "Georgia", "ar": "جورجيا" }, "code": "ge" },
            { "name": { "en": "Germany", "ar": "ألمانيا" }, "code": "de" },
            { "name": { "en": "Ghana", "ar": "غانا" }, "code": "gh" },
            { "name": { "en": "Gibraltar", "ar": "جبل طارق" }, "code": "gi" },
            { "name": { "en": "Greece", "ar": "اليونان" }, "code": "gr" },
            { "name": { "en": "Greenland", "ar": "الأرض الخضراء" }, "code": "gl" },
            { "name": { "en": "Grenada", "ar": "غرينادا" }, "code": "gd" },
            { "name": { "en": "Guadeloupe", "ar": "جوادلوب" }, "code": "gp" },
            { "name": { "en": "Guam", "ar": "غوام" }, "code": "gu" },
            { "name": { "en": "Guatemala", "ar": "غواتيمالا" }, "code": "gt" },
            { "name": { "en": "Guernsey", "ar": "غيرنسي" }, "code": "gg" },
            { "name": { "en": "Guinea", "ar": "غينيا" }, "code": "gn" },
            { "name": { "en": "Guinea-Bissau", "ar": "غينيا بيساو" }, "code": "gw" },
            { "name": { "en": "Guyana", "ar": "غيانا" }, "code": "gy" },
            { "name": { "en": "Haiti", "ar": "هايتي" }, "code": "ht" },
            {
                "name": {
                    "en": "Heard Island and Mcdonald Islands",
                    "ar": "قلب الجزيرة وجزر ماكدونالز"
                },
                "code": "hm"
            },
            {
                "name": {
                    "en": "Holy See (Vatican City State)",
                    "ar": "الكرسي الرسولي (دولة الفاتيكان)"
                },
                "code": "va"
            },
            { "name": { "en": "Honduras", "ar": "هندوراس" }, "code": "hn" },
            { "name": { "en": "Hong Kong", "ar": "هونغ كونغ" }, "code": "hk" },
            { "name": { "en": "Hungary", "ar": "هنغاريا" }, "code": "hu" },
            { "name": { "en": "Iceland", "ar": "أيسلندا" }, "code": "is" },
            { "name": { "en": "India", "ar": "الهند" }, "code": "in" },
            { "name": { "en": "Indonesia", "ar": "إندونيسيا" }, "code": "id" },
            {
                "name": {
                    "en": "Iran, Islamic Republic Of",
                    "ar": "جمهورية إيران الإسلامية"
                },
                "code": "ir"
            },
            { "name": { "en": "Iraq", "ar": "العراق" }, "code": "IQ" },
            { "name": { "en": "Ireland", "ar": "أيرلندا" }, "code": "IE" },
            { "name": { "en": "Isle of Man", "ar": "جزيرة آيل أوف مان" }, "code": "IM" },
            { "name": { "en": "Israel", "ar": "إسرائيل" }, "code": "IL" },
            { "name": { "en": "Italy", "ar": "إيطاليا" }, "code": "IT" },
            { "name": { "en": "Jamaica", "ar": "جامايكا" }, "code": "JM" },
            { "name": { "en": "Japan", "ar": "اليابان" }, "code": "JP" },
            { "name": { "en": "Jersey", "ar": "جيرسي" }, "code": "JE" },
            { "name": { "en": "Jordan", "ar": "الأردن" }, "code": "JO" },
            { "name": { "en": "Kazakhstan", "ar": "كازاخستان" }, "code": "KZ" },
            { "name": { "en": "Kenya", "ar": "كينيا" }, "code": "KE" },
            { "name": { "en": "Kiribati", "ar": "كيريباتي" }, "code": "KI" },
            {
                "name": {
                    "en": "Korea, Democratic People\"S Republic of",
                    "ar": "كوريا، الجمهورية الشعبية الديمقراطية"
                },
                "code": "KP"
            },
            {
                "name": { "en": "Korea, Republic of", "ar": "جمهورية كوريا" },
                "code": "KR"
            },
            { "name": { "en": "Kuwait", "ar": "الكويت" }, "code": "KW" },
            { "name": { "en": "Kyrgyzstan", "ar": "قيرغيزستان" }, "code": "KG" },
            {
                "name": {
                    "en": "Lao People\"S Democratic Republic",
                    "ar": "جمهورية لاو الديمقراطية"
                },
                "code": "LA"
            },
            { "name": { "en": "Latvia", "ar": "لاتفيا" }, "code": "LV" },
            { "name": { "en": "Lebanon", "ar": "لبنان" }, "code": "LB" },
            { "name": { "en": "Lesotho", "ar": "ليسوتو" }, "code": "LS" },
            { "name": { "en": "Liberia", "ar": "ليبيريا" }, "code": "LR" },
            {
                "name": {
                    "en": "Libyan Arab Jamahiriya",
                    "ar": "الجماهيرية العربية الليبية"
                },
                "code": "LY"
            },
            { "name": { "en": "Liechtenstein", "ar": "ليختنشتاين" }, "code": "LI" },
            { "name": { "en": "Lithuania", "ar": "ليتوانيا" }, "code": "LT" },
            { "name": { "en": "Luxembourg", "ar": "لوكسمبورغ" }, "code": "LU" },
            { "name": { "en": "Macao", "ar": "ماكاو" }, "code": "MO" },
            {
                "name": {
                    "en": "Macedonia, The Former Yugoslav Republic of",
                    "ar": "مقدونيا ، جمهورية يوغوسلافيا السابقة"
                },
                "code": "MK"
            },
            { "name": { "en": "Madagascar", "ar": "مدغشقر" }, "code": "MG" },
            { "name": { "en": "Malawi", "ar": "ملاوي" }, "code": "MW" },
            { "name": { "en": "Malaysia", "ar": "ماليزيا" }, "code": "MY" },
            { "name": { "en": "Maldives", "ar": "ملديف" }, "code": "MV" },
            { "name": { "en": "Mali", "ar": "مالي" }, "code": "ML" },
            { "name": { "en": "Malta", "ar": "مالطا" }, "code": "MT" },
            { "name": { "en": "Marshall Islands", "ar": "جزر مارشال" }, "code": "MH" },
            { "name": { "en": "Martinique", "ar": "مارتينيك" }, "code": "MQ" },
            { "name": { "en": "Mauritania", "ar": "موريتانيا" }, "code": "MR" },
            { "name": { "en": "Mauritius", "ar": "موريشيوس" }, "code": "MU" },
            { "name": { "en": "Mayotte", "ar": "مايوت" }, "code": "YT" },
            { "name": { "en": "Mexico", "ar": "المكسيك" }, "code": "MX" },
            {
                "name": {
                    "en": "Micronesia, Federated States of",
                    "ar": "ولايات ميكرونيزيا الموحدة"
                },
                "code": "FM"
            },
            {
                "name": { "en": "Moldova, Republic of", "ar": "جمهورية مولدوفا" },
                "code": "MD"
            },
            { "name": { "en": "Monaco", "ar": "موناكو" }, "code": "MC" },
            { "name": { "en": "Mongolia", "ar": "منغوليا" }, "code": "MN" },
            { "name": { "en": "Montserrat", "ar": "مونتسيرات" }, "code": "MS" },
            { "name": { "en": "Morocco", "ar": "المغرب" }, "code": "MA" },
            { "name": { "en": "Mozambique", "ar": "موزامبيق" }, "code": "MZ" },
            { "name": { "en": "Myanmar", "ar": "ميانمار" }, "code": "MM" },
            { "name": { "en": "Namibia", "ar": "ناميبيا" }, "code": "NA" },
            { "name": { "en": "Nauru", "ar": "ناورو" }, "code": "NR" },
            { "name": { "en": "Nepal", "ar": "نيبال" }, "code": "NP" },
            { "name": { "en": "Netherlands", "ar": "هولندا" }, "code": "NL" },
            {
                "name": { "en": "Netherlands Antilles", "ar": "جزر الأنتيل الهولندية" },
                "code": "AN"
            },
            {
                "name": { "en": "New Caledonia", "ar": "كاليدونيا الجديدة" },
                "code": "NC"
            },
            { "name": { "en": "New Zealand", "ar": "نيوزيلاندا" }, "code": "NZ" },
            { "name": { "en": "Nicaragua", "ar": "نيكاراغوا" }, "code": "NI" },
            { "name": { "en": "Niger", "ar": "النيجر" }, "code": "NE" },
            { "name": { "en": "Nigeria", "ar": "نيجيريا" }, "code": "NG" },
            { "name": { "en": "Niue", "ar": "نيوي" }, "code": "NU" },
            { "name": { "en": "Norfolk Island", "ar": "جزيرة نورفولك" }, "code": "NF" },
            {
                "name": { "en": "Northern Mariana Islands", "ar": "جزر مريانا الشمالية" },
                "code": "MP"
            },
            { "name": { "en": "Norway", "ar": "النرويج" }, "code": "NO" },
            { "name": { "en": "Oman", "ar": "سلطنة عمان" }, "code": "OM" },
            { "name": { "en": "Pakistan", "ar": "باكستان" }, "code": "PK" },
            { "name": { "en": "Palau", "ar": "بالاو" }, "code": "PW" },
            {
                "name": {
                    "en": "Palestinian Territory, Occupied",
                    "ar": "الأراضي الفلسطينية المحتلة"
                },
                "code": "PS"
            },
            { "name": { "en": "Panama", "ar": "بنما" }, "code": "PA" },
            {
                "name": { "en": "Papua New Guinea", "ar": "بابوا غينيا الجديدة" },
                "code": "PG"
            },
            { "name": { "en": "Paraguay", "ar": "باراغواي" }, "code": "PY" },
            { "name": { "en": "Peru", "ar": "بيرو" }, "code": "PE" },
            { "name": { "en": "Philippines", "ar": "فيلبيني" }, "code": "PH" },
            { "name": { "en": "Pitcairn", "ar": "بيتكيرن" }, "code": "PN" },
            { "name": { "en": "Poland", "ar": "بولندا" }, "code": "PL" },
            { "name": { "en": "Portugal", "ar": "البرتغال" }, "code": "PT" },
            { "name": { "en": "Puerto Rico", "ar": "بورتوريكو" }, "code": "PR" },
            { "name": { "en": "Qatar", "ar": "دولة قطر" }, "code": "QA" },
            { "name": { "en": "Reunion", "ar": "جمع شمل" }, "code": "RE" },
            { "name": { "en": "Romania", "ar": "رومانيا" }, "code": "RO" },
            {
                "name": { "en": "Russian Federation", "ar": "الاتحاد الروسي" },
                "code": "RU"
            },
            { "name": { "en": "RWANDA", "ar": "رواندا" }, "code": "RW" },
            { "name": { "en": "Saint Helena", "ar": "سانت هيلانة" }, "code": "SH" },
            {
                "name": { "en": "Saint Kitts and Nevis", "ar": "سانت كيتس ونيفيس" },
                "code": "KN"
            },
            { "name": { "en": "Saint Lucia", "ar": "القديسة لوسيا" }, "code": "LC" },
            {
                "name": { "en": "Saint Pierre and Miquelon", "ar": "سانت بيير وميكلون" },
                "code": "PM"
            },
            {
                "name": {
                    "en": "Saint Vincent and the Grenadines",
                    "ar": "سانت فنسنت وجزر غرينادين"
                },
                "code": "VC"
            },
            { "name": { "en": "Samoa", "ar": "ساموا" }, "code": "WS" },
            { "name": { "en": "San Marino", "ar": "سان مارينو" }, "code": "SM" },
            {
                "name": { "en": "Sao Tome and Principe", "ar": "سان تومي وبرينسيبي" },
                "code": "ST"
            },
            {
                "name": { "en": "Saudi Arabia", "ar": "المملكة العربية السعودية" },
                "code": "SA"
            },
            { "name": { "en": "Senegal", "ar": "السنغال" }, "code": "SN" },
            {
                "name": { "en": "Serbia and Montenegro", "ar": "صربيا والجبل الأسود" },
                "code": "CS"
            },
            { "name": { "en": "Seychelles", "ar": "سيشيل" }, "code": "SC" },
            { "name": { "en": "Sierra Leone", "ar": "سيرا ليون" }, "code": "SL" },
            { "name": { "en": "Singapore", "ar": "سنغافورة" }, "code": "SG" },
            { "name": { "en": "Slovakia", "ar": "سلوفاكيا" }, "code": "SK" },
            { "name": { "en": "Slovenia", "ar": "سلوفينيا" }, "code": "SI" },
            { "name": { "en": "Solomon Islands", "ar": "جزر سليمان" }, "code": "SB" },
            { "name": { "en": "Somalia", "ar": "الصومال" }, "code": "SO" },
            { "name": { "en": "South Africa", "ar": "جنوب أفريقيا" }, "code": "ZA" },
            {
                "name": {
                    "en": "South Georgia and the South Sandwich Islands",
                    "ar": "جورجيا الجنوبية وجزر ساندويتش الجنوبية"
                },
                "code": "GS"
            },
            { "name": { "en": "Spain", "ar": "إسبانيا" }, "code": "ES" },
            { "name": { "en": "Sri Lanka", "ar": "سيريلانكا" }, "code": "LK" },
            { "name": { "en": "Sudan", "ar": "السودان" }, "code": "SD" },
            { "name": { "en": "Suriname", "ar": "سورينام" }, "code": "SR" },
            {
                "name": { "en": "Svalbard and Jan Mayen", "ar": "سفالبارد وجان ماين" },
                "code": "SJ"
            },
            { "name": { "en": "Swaziland", "ar": "سوازيلند" }, "code": "SZ" },
            { "name": { "en": "Sweden", "ar": "السويد" }, "code": "SE" },
            { "name": { "en": "Switzerland", "ar": "سويسرا" }, "code": "CH" },
            {
                "name": { "en": "Syrian Arab Republic", "ar": "الجمهورية العربية السورية" },
                "code": "SY"
            },
            {
                "name": {
                    "en": "Taiwan, Province of China",
                    "ar": "مقاطعة تايوان الصينية"
                },
                "code": "TW"
            },
            { "name": { "en": "Tajikistan", "ar": "طاجيكستان" }, "code": "TJ" },
            {
                "name": {
                    "en": "Tanzania, United Republic of",
                    "ar": "جمهورية تنزانيا المتحدة"
                },
                "code": "TZ"
            },
            { "name": { "en": "Thailand", "ar": "تايلاند" }, "code": "TH" },
            { "name": { "en": "Timor-Leste", "ar": "تيمور - ليشتي" }, "code": "TL" },
            { "name": { "en": "Togo", "ar": "توجو" }, "code": "TG" },
            { "name": { "en": "Tokelau", "ar": "توكيلاو" }, "code": "TK" },
            { "name": { "en": "Tonga", "ar": "تونغا" }, "code": "TO" },
            {
                "name": { "en": "Trinidad and Tobago", "ar": "ترينداد وتوباغو" },
                "code": "TT"
            },
            { "name": { "en": "Tunisia", "ar": "تونس" }, "code": "TN" },
            { "name": { "en": "Turkey", "ar": "ديك رومى" }, "code": "TR" },
            { "name": { "en": "Turkmenistan", "ar": "تركمانستان" }, "code": "TM" },
            {
                "name": { "en": "Turks and Caicos Islands", "ar": "جزر تركس وكايكوس" },
                "code": "TC"
            },
            { "name": { "en": "Tuvalu", "ar": "توفالو" }, "code": "TV" },
            { "name": { "en": "Uganda", "ar": "أوغندا" }, "code": "UG" },
            { "name": { "en": "Ukraine", "ar": "أوكرانيا" }, "code": "UA" },
            {
                "name": { "en": "United Arab Emirates", "ar": "الإمارات العربية المتحدة" },
                "code": "AE"
            },
            { "name": { "en": "United Kingdom", "ar": "المملكة المتحدة" }, "code": "GB" },
            {
                "name": { "en": "United States", "ar": "الولايات المتحدة الأمريكية" },
                "code": "US"
            },
            {
                "name": {
                    "en": "United States Minor Outlying Islands",
                    "ar": "جزر الولايات المتحدة البعيدة الصغرى"
                },
                "code": "UM"
            },
            { "name": { "en": "Uruguay", "ar": "أوروغواي" }, "code": "UY" },
            { "name": { "en": "Uzbekistan", "ar": "أوزبكستان" }, "code": "UZ" },
            { "name": { "en": "Vanuatu", "ar": "فانواتو" }, "code": "VU" },
            { "name": { "en": "Venezuela", "ar": "فنزويلا" }, "code": "VE" },
            { "name": { "en": "Viet Nam", "ar": "فييت نام" }, "code": "VN" },
            {
                "name": { "en": "Virgin Islands, British", "ar": "جزر العذراء البريطانية" },
                "code": "VG"
            },
            {
                "name": {
                    "en": "Virgin Islands, U.S.",
                    "ar": "جزر فيرجن ، الولايات المتحدة"
                },
                "code": "VI"
            },
            {
                "name": { "en": "Wallis and Futuna", "ar": "واليس وفوتونا" },
                "code": "WF"
            },
            { "name": { "en": "Western Sahara", "ar": "الصحراء الغربية" }, "code": "EH" },
            { "name": { "en": "Yemen", "ar": "اليمن" }, "code": "YE" },
            { "name": { "en": "Zambia", "ar": "زامبيا" }, "code": "ZM" },
            { "name": { "en": "Zimbabwe", "ar": "زمبابوي" }, "code": "ZW" }
        ]);

    const searchCountry = (event: { query: string }) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    const lng = props.currentLocale === 'en' ? 'en' : 'ar';
                    return country.name[lng].toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const itemTemplate = (item: any, i: any) => {
        return (
            <div className={'countryItem'} key={i}>
                <span className={`flag-icon flag-icon-${item.code.toLowerCase()}`} />
                <div>{props.currentLocale === 'en' ? item.name.en : item.name.ar}</div>
            </div>
        );
    }

    const onAutoCompleteChanged = (e: any) => {
        setSelectedCountry(e.value);
    }

    const onPressEnter = async () => {
        // await props.setNationality(selectedCountry);
        await props.setUserName(value);
        setKeyboardMode(false);
        // props.history.push('/takePhoto');
    }

    const onHandleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            onPressEnter();
        }
    }

    const onChangeInput = (e: any) => {
        setValue(e.target.value);
        keyboardMode ? keyboard.setInput(value) : null;
    }

    const onChange = (inputValue: any) => {
        setValue(inputValue);
    };

    const handleShift = () => {
        setLayoutName(layoutName === "default" ? "shift" : "default");
    };

    const onKeyPress = (button: any) => {
        if (button === "{enter}") {
            onPressEnter();
        }
        if (button === "{shift}" || button === "{lock}") {
            handleShift()
        };
    };

    const onNext = async () => {
        await props.setNationality(selectedCountry);
        await props.setUserName(value);
    }

    return (
        <>
            <Link to="/" className="backAction" />
            <div className="userForm">
                <div className="part">
                    <label className="icon">
                        {translate('pages.user.name')}
                        <span className="keyboardIcon" onClick={() => setKeyboardMode(!keyboardMode)} />
                    </label>
                    <InputText value={value} onKeyDown={onHandleKeyDown} onChange={onChangeInput} placeholder={translate('pages.user.enterYourName')} />
                    {keyboardMode &&
                        <Keyboard
                            keyboardRef={r => (keyboard = r)}
                            layoutName={layoutName}
                            onChange={onChange}
                            onKeyPress={onKeyPress}
                            layout={props.currentLocale === 'ar' ? layout.layout : null}
                        />
                    }
                </div>
                <div className={`${selectedCountry ? 'active' : null}`}>
                    <label>{translate("pages.user.nationality")}</label>
                    <AutoComplete
                        value={selectedCountry}
                        suggestions={filteredCountries}
                        completeMethod={searchCountry}
                        field={props.currentLocale === 'en' ? 'name.en' : 'name.ar'}
                        forceSelection
                        itemTemplate={itemTemplate}
                        onChange={(e) => onAutoCompleteChanged(e)}
                        placeholder={'Search Country'}
                        dropdown
                    />
                    {selectedCountry &&
                        <Link to="/takePhoto" className="btnAction" onClick={onNext}>{translate("pages.button.next")}</Link>
                    }
                </div>
            </div>
        </>
    );
}


const mapStateToProps = ({ username, locale }: IRootState) => ({
    currentUser: username,
    currentLocale: locale.currentLocale
});

const mapDispatchToProps = { setUserName, setNationality };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserNameComponent);