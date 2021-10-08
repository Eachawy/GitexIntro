import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';

export interface IRootState {
  readonly locale: LocaleState;
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  locale,
  loadingBar,
});

export default rootReducer;
