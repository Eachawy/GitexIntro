import React from "react";
import { translate } from "react-jhipster";
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";

const TakePhotoComponent = props => {

    const [avatar, setAvatar] = React.useState(null);

    return (
        <>
            <Link to="/nationality" className="backAction" />
            <div className="takePhoto">
                <h1>Take a photo</h1>
                {!avatar &&
                    <div className="launchCamera">
                        <span>Launch camera</span>
                    </div>
                }
                {avatar &&
                    <>
                        <div className={`large avatar ${avatar}`} />
                        <div className="edit" onClick={() => setAvatar(null)}>Edit</div>
                    </>
                }
                <p>or choose an avatar</p>
                <ul>
                    <li className="avatar _1" onClick={() => setAvatar('_1')} />
                    <li className="avatar _2" onClick={() => setAvatar('_2')} />
                    <li className="avatar _3" onClick={() => setAvatar('_3')} />
                    <li className="avatar _4" onClick={() => setAvatar('_4')} />
                    <li className="avatar _5" onClick={() => setAvatar('_5')} />
                    <li className="avatar _6" onClick={() => setAvatar('_6')} />
                </ul>
                <Link to="/uploadLicense" className="btnAction">Next</Link>
            </div>
        </>
    );
}

export default TakePhotoComponent;