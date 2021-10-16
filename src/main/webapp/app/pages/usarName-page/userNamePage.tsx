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
import KeyboardFn from "simple-keyboard";



const UserNameComponent = props => {

    const [value, setValue] = React.useState("");
    const [layoutName, setLayoutName] = React.useState("default");
    const [keyboardMode, setKeyboardMode] = React.useState(false);
    let keyboard = null;

    const onPressEnter = async () => {
        await props.setUserName(value);
        props.history.push('/nationality');
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

    return (
        <>
            <Link to="/" className="backAction" />
            <div className="userForm">
                <label className="icon">
                    {translate('pages.user.name')}
                    <span className="keyboardIcon" onClick={() => setKeyboardMode(true)} />
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
        </>
    );
}


const mapStateToProps = ({ username, locale }: IRootState) => ({
    currentUser: username,
    currentLocale: locale.currentLocale
});

const mapDispatchToProps = { setUserName };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserNameComponent);