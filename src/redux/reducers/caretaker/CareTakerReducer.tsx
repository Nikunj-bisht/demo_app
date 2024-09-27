import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const CareTakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CARETAKERS:
      return {data: null, loading: true, error: null};
    case Types.Success_CareTAKER_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types.Failed_CareTAKER_REQUEST:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default CareTakerReducer;