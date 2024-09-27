import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const getMedHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MED_HISTORY:
      return {data: null, loading: true, error: null};
    case Types.GET_MED_HISTORY_SUCCESS:
      return {data: action.data, loading: false, error: null};
    case Types.GET_MED_HISTORY_FAILED:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default getMedHistoryReducer;