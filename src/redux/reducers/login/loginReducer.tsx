import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_LOGIN:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_LOGIN:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default loginReducer;
