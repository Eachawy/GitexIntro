export const ACTION_TYPES = {
  SET_NATIONALITY: 'profile/GET_NATIONALITY',
};

const initialState = {
  currentNationality: '',
};

export type NationalityState = Readonly<typeof initialState>;

export default (state: NationalityState = initialState, action): NationalityState => {
  switch (action.type) {
    case ACTION_TYPES.SET_NATIONALITY: {
      return {
        ...state,
        currentNationality: action.nationality,
      };
    }
    default:
      return state;
  }
};

export const setNationality: (nationality: string) => void = nationality => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_NATIONALITY,
    nationality,
  });
};
