import React from "react";
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { setUserName } from 'app/pages/usarName-page/userName.reducer';
import { translate } from "react-jhipster";

const UserNameComponent = props => {

    const [value, setValue] = React.useState("");

    const onHandleKeyDown = async (e: any) => {
        if (e.key === 'Enter') {
            await props.setUserName(e.target.value);
            props.history.push('/nationality');
        }
    }


    return (
        <>
            <Link to="/" className="backAction" />
            <div className="userForm">
                <label>{translate('pages.user.name')}</label>
                <InputText value={value} onKeyDown={onHandleKeyDown} onChange={(e) => setValue(e.target.value)} placeholder={translate('pages.user.enterYourName')} />
            </div>
        </>
    );
}


const mapStateToProps = ({ username }: IRootState) => ({
    currentUser: username
});

const mapDispatchToProps = { setUserName };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserNameComponent);