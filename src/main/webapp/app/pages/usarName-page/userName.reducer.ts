export const ACTION_TYPES = {
  SET_USERNAME: 'profile/GET_USER_NAME',
};

const initialState = {
  currentUsarName: '',
};

export type UserNameState = Readonly<typeof initialState>;

export default (state: UserNameState = initialState, action): UserNameState => {
  switch (action.type) {
    case ACTION_TYPES.SET_USERNAME: {
      return {
        ...state,
        currentUsarName: action.username,
      };
    }
    default:
      return state;
  }
};

export const setUserName: (username: string) => void = username => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_USERNAME,
    username,
  });
};
