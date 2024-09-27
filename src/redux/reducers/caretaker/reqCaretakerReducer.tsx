import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const reqcaretakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEND_CARETAKER_REQUEST:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_CARETAKER_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_CARETAKER_REQUEST:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default reqcaretakerReducer;