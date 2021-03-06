import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import username, { UserNameState } from 'app/pages/usarName-page/userName.reducer';
import nationality, { NationalityState } from 'app/pages/nationality-page/nationality.reducer';
import profileimage, { ImageState } from 'app/pages/takePhoto-page/takePhoto.reducer';
import selectedPlate, { PlateState } from 'app/pages/selectPlate-page/selectPlate.reducer';

export interface IRootState {
  readonly username: UserNameState;
  readonly nationality: NationalityState;
  readonly profileimage: ImageState;
  readonly selectedPlate: PlateState;
  readonly locale: LocaleState;
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  nationality,
  username,
  profileimage,
  selectedPlate,
  locale,
  loadingBar,
});

export default rootReducer;
