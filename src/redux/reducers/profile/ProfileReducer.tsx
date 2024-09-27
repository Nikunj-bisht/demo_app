import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SAVE_PROFILE:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_PROFILE:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_PROFILE:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default ProfileReducer;