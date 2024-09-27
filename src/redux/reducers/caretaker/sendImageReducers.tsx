import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const sendImageReducers = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEND_IMAGES:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_SEND_IMAGES:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_SEND_IMAGES:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default sendImageReducers;