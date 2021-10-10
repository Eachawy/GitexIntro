export const ACTION_TYPES = {
  SET_IMAGE: 'profile/GET_PROFILEIMAGE',
};

const initialState = {
  currentImage: '',
};

export type ImageState = Readonly<typeof initialState>;

export default (state: ImageState = initialState, action): ImageState => {
  switch (action.type) {
    case ACTION_TYPES.SET_IMAGE: {
      return {
        ...state,
        currentImage: action.img,
      };
    }
    default:
      return state;
  }
};

export const setProfileImage: (img: string) => void = img => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_IMAGE,
    img,
  });
};
