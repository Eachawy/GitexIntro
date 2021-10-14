import React from "react";
import { translate } from "react-jhipster";
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { setProfileImage } from 'app/pages/takePhoto-page/takePhoto.reducer';
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

    const onSubmit = () => {
        props.setProfileImage(avatar);
    }

    return (
        <>
            <Link to="/nationality" className="backAction" />
            <div className="takePhoto">
                <h1>{translate("pages.photo.takePhoto")}</h1>
                {!avatar &&
                    <div className="launchCamera">
                        <span>{translate("pages.photo.launchCamera")}</span>
                        <input type="file" accept="image/*" onChange={(e: any) => onChangeFile(e)} capture="camera"></input>
                    </div>
                }
                {avatar &&
                    <div className="imgProf">
                        <img src={avatar} />
                        <div className="edit" onClick={() => setAvatar(null)}>{translate("pages.button.edit")}</div>
                    </div>
                }
                <p>{translate("pages.photo.chooseAvatar")}</p>
                <ul>
                    <li className="avatar _1" onClick={() => setAvatar('../../../content/images/avatar/1.svg')} />
                    <li className="avatar _2" onClick={() => setAvatar('../../../content/images/avatar/2.svg')} />
                    <li className="avatar _3" onClick={() => setAvatar('../../../content/images/avatar/3.svg')} />
                    <li className="avatar _4" onClick={() => setAvatar('../../../content/images/avatar/4.svg')} />
                    <li className="avatar _5" onClick={() => setAvatar('../../../content/images/avatar/5.svg')} />
                    <li className="avatar _6" onClick={() => setAvatar('../../../content/images/avatar/6.svg')} />
                </ul>
                <Link to="/uploadLicense" className="btnAction" onClick={onSubmit}>{translate("pages.button.next")}</Link>
            </div>
        </>
    );
}

const mapStateToProps = ({ nationality }: IRootState) => ({
    currentNationality: nationality.currentNationality
});
const mapDispatchToProps = { setProfileImage };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TakePhotoComponent);