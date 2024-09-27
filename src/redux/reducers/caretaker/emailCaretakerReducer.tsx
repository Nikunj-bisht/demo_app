import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const emailCaretakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEND_EMAIL:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_SEND_EMAIL:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_SEND_EMAIL:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default emailCaretakerReducer;