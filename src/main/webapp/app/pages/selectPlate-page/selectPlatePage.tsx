import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { Link } from 'react-router-dom';
import { translate } from 'react-jhipster';
import { setPlate } from 'app/pages/selectPlate-page/selectPlate.reducer';


const SelectPlateComponent = props => {

    const [R1, setR1] = React.useState(false);
    const [R2, setR2] = React.useState(false);
    const [R3, setR3] = React.useState(false);

    const [R4, setR4] = React.useState(false);
    const [R5, setR5] = React.useState(false);
    const [R6, setR6] = React.useState(false);
    const [R7, setR7] = React.useState(false);
    const [R8, setR8] = React.useState(false);
    const [R9, setR9] = React.useState(false);
    const [R10, setR10] = React.useState(false);
    const [R11, setR11] = React.useState(false);
    const [R12, setR12] = React.useState(false);
    const [R13, setR13] = React.useState(false);
    const [R14, setR14] = React.useState(false);
    const [R15, setR15] = React.useState(false);

    const [n1, setN1] = React.useState(null);
    const [n2, setN2] = React.useState(null);
    const [n3, setN3] = React.useState(null);
    const [n4, setN4] = React.useState(null);
    const [n5, setN5] = React.useState(null);
    const [n6, setN6] = React.useState(null);
    const [n7, setN7] = React.useState(null);
    const [n8, setN8] = React.useState(null);
    const [n9, setN9] = React.useState(null);
    const [n10, setN10] = React.useState(null);
    const [n11, setN11] = React.useState(null);
    const [n12, setN12] = React.useState(null);
    const [n13, setN13] = React.useState(null);
    const [n14, setN14] = React.useState(null);
    const [n15, setN15] = React.useState(null);

    React.useEffect(() => {
        setN1(Math.floor(1000 + Math.random() * 9000));
        setN2(Math.floor(1000 + Math.random() * 9000));
        setN3(Math.floor(1000 + Math.random() * 9000));
        setN4(Math.floor(10000 + Math.random() * 9000));
        setN5(Math.floor(10000 + Math.random() * 9000));
        setN6(Math.floor(10000 + Math.random() * 9000));
        setN7(Math.floor(10000 + Math.random() * 9000));
        setN8(Math.floor(10000 + Math.random() * 9000));
        setN9(Math.floor(10000 + Math.random() * 9000));
        setN10(Math.floor(10000 + Math.random() * 9000));
        setN11(Math.floor(10000 + Math.random() * 9000));
        setN12(Math.floor(10000 + Math.random() * 9000));
        setN13(Math.floor(10000 + Math.random() * 9000));
        setN14(Math.floor(10000 + Math.random() * 9000));
        setN15(Math.floor(10000 + Math.random() * 9000));
    }, []);

    const reset = () => {
        setR1(false);
        setR2(false);
        setR3(false);
        setR4(false);
        setR5(false);
        setR6(false);
        setR7(false);
        setR8(false);
        setR9(false);
        setR10(false);
        setR11(false);
        setR12(false);
        setR13(false);
        setR14(false);
        setR15(false);
    }

    const onRadioChange = async (e: any, f: any) => {
        const elClass = e.target.parentElement.parentElement.querySelector('.plate').attributes[0].nodeValue;
        const elValue = e.target.parentElement.parentElement.querySelector('.plate > div').innerText;
        await props.setPlate({
            'class': elClass,
            'value': elValue
        });
        switch (f) {
            case 'R1':
                reset();
                setR1(true);
                break;
            case 'R2':
                reset();
                setR2(true);
                break;
            case 'R3':
                reset();
                setR3(true);
                break;
            case 'R4':
                reset();
                setR4(true);
                break;
            case 'R5':
                reset();
                setR5(true);
                break;
            case 'R6':
                reset();
                setR6(true);
                break;
            case 'R7':
                reset();
                setR7(true);
                break;
            case 'R8':
                reset();
                setR8(true);
                break;
            case 'R9':
                reset();
                setR9(true);
                break;
            case 'R10':
                reset();
                setR10(true);
                break;
            case 'R11':
                reset();
                setR11(true);
                break;
            case 'R12':
                reset();
                setR12(true);
                break;
            case 'R13':
                reset();
                setR13(true);
                break;
            case 'R14':
                reset();
                setR14(true);
                break;
            case 'R15':
                reset();
                setR15(true);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Link to="/selectYourCar" className="backAction" />
            <div className="row selectPalte">
                <div className="leftSide">
                    <div className="card car">
                        <img src="../../../content/images/vehicles/vehicle1.jpeg" />
                        <h6>
                            {translate("pages.selectYourPage.carOne")}
                            <span>2021</span>
                            <p>{translate("pages.selectYourPage.from1", {
                                amount: "60,000"
                            })}</p>
                        </h6>
                    </div>

                    <div className="card profile">
                        <h2>{translate("pages.selectYourPage.yourRTAProfile")}</h2>
                        {props.imageprofile &&
                            <img src={props.imageprofile} />
                        }
                        <p>{props.username ? props.username : null}</p>
                        <p className="note">{props.nationality ?
                            props.currentLocale === 'en' ?
                                props.nationality.name.en :
                                props.nationality.name.ar
                            : null}</p>
                        <p className="note">123456</p>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="card plateBox">
                        <h3>{translate("pages.selectPlate.selectPlateNumber")}</h3>
                        <p>{translate("pages.selectPlate.personalised")}</p>
                        <div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_1"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R1')}
                                        checked={R1}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate expo luxu">
                                    <span>AA</span>
                                    <div>{n1}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.paid")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_2"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R2')}
                                        checked={R2}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate coloured luxu">
                                    <span>AA</span>
                                    <div>{n2}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.paid")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_3"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R3')}
                                        checked={R3}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n3}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.paid")}</span>
                            </div>
                        </div>
                        <h4>{translate("pages.selectPlate.regularPlates")}</h4>
                        <div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_4"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R4')}
                                        checked={R4}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n4}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_5"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R5')}
                                        checked={R5}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n5}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_6"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R6')}
                                        checked={R6}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n6}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_7"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R7')}
                                        checked={R7}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n7}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_8"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R8')}
                                        checked={R8}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n8}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_9"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R9')}
                                        checked={R9}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n9}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_10"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R10')}
                                        checked={R10}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n10}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_11"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R11')}
                                        checked={R11}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n11}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_12"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R12')}
                                        checked={R12}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n12}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_13"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R13')}
                                        checked={R13}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n13}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_14"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R14')}
                                        checked={R14}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n14}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                            <div className="plateComponent">
                                <div className="radioBtn">
                                    <input
                                        id="p_15"
                                        type="radio"
                                        name="plates"
                                        onChange={(e: any) => onRadioChange(e, 'R15')}
                                        checked={R15}
                                    />
                                    <label htmlFor={props.id}> {props.lbl} </label>
                                </div>
                                <div className="plate luxu">
                                    <span>AA</span>
                                    <div>{n15}</div>
                                </div>
                                <span className="lbl">{translate("pages.selectPlate.free")}</span>
                            </div>
                        </div>
                        <Link to="/Preview" className="btnAction">{translate("pages.button.continue")}</Link>
                    </div>

                </div>
            </div>
        </>
    );
}


const mapStateToProps = ({ profileimage, username, nationality, locale }: IRootState) => ({
    imageprofile: profileimage.currentImage,
    username: username.currentUsarName,
    nationality: nationality.currentNationality,
    currentLocale: locale.currentLocale
});

const mapDispatchToProps = { setPlate };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;


export default connect(mapStateToProps, mapDispatchToProps)(SelectPlateComponent);