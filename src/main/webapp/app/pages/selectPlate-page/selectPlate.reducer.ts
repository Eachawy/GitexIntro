export const ACTION_TYPES = {
  GET_PLATE: 'profile/GET_PLATE',
};

const initialState = {
  currentplate: '',
};

export type PlateState = Readonly<typeof initialState>;

export default (state: PlateState = initialState, action): PlateState => {
  switch (action.type) {
    case ACTION_TYPES.GET_PLATE: {
      return {
        ...state,
        currentplate: action.plate,
      };
    }
    default:
      return state;
  }
};

export const setPlate: (plate: string) => void = plate => dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_PLATE,
    plate,
  });
};
