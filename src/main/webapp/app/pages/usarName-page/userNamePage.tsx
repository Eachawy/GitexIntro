import React from "react";
import { translate } from "react-jhipster";
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";

const UserNameComponent = props => {

    const [value, setValue] = React.useState("");

    const onHandleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            props.history.push('/nationality');
        }
    }


    return (
        <>
            <Link to="/" className="backAction" />
            <div className="userForm">
                <label>Name</label>
                <InputText value={value} onKeyDown={onHandleKeyDown} onChange={(e) => setValue(e.target.value)} placeholder={'Enter your name'} />
            </div>
        </>
    );
}

export default UserNameComponent;