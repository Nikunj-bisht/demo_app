import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const syncHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SYNC_HISTORY:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_SYNC_HISTORY:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_SYNC_HISTORY:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default syncHistoryReducer;