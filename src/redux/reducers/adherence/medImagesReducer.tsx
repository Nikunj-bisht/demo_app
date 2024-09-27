import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const medImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MED_IMAGES:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_MED_IMAGES:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_MED_IMAGES:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default medImagesReducer;