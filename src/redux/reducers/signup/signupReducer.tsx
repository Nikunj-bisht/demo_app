import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_SIGNUP:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_SIGNUP:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default signupReducer;