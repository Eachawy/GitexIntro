import React from "react";
import { translate } from "react-jhipster";
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";

const TakePhotoComponent = props => {

    const [avatar, setAvatar] = React.useState(null);

    const onChangeFile = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = () => { setAvatar(`data:image/jpeg;base64,${btoa(reader.result)}`) };
        }
    }

    return (
        <>
            <Link to="/nationality" className="backAction" />
            <div className="takePhoto">
                <h1>Take a photo</h1>
                {!avatar &&
                    <div className="launchCamera">
                        <span>Launch camera</span>
                        <input type="file" accept="image/*" onChange={(e: any) => onChangeFile(e)} capture="camera"></input>
                    </div>
                }
                {avatar &&
                    <div className="imgProf">
                        <img src={avatar} />
                        <div className="edit" onClick={() => setAvatar(null)}>Edit</div>
                    </div>
                }
                <p>or choose an avatar</p>
                <ul>
                    <li className="avatar _1" onClick={() => setAvatar('../../../content/images/avatar/1.svg')} />
                    <li className="avatar _2" onClick={() => setAvatar('../../../content/images/avatar/2.svg')} />
                    <li className="avatar _3" onClick={() => setAvatar('../../../content/images/avatar/3.svg')} />
                    <li className="avatar _4" onClick={() => setAvatar('../../../content/images/avatar/4.svg')} />
                    <li className="avatar _5" onClick={() => setAvatar('../../../content/images/avatar/5.svg')} />
                    <li className="avatar _6" onClick={() => setAvatar('../../../content/images/avatar/6.svg')} />
                </ul>
                <Link to="/uploadLicense" className="btnAction">Next</Link>
            </div>
        </>
    );
}

export default TakePhotoComponent;