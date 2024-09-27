import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const syncMedReducers = (state = initialState, action) => {
  switch (action.type) {
    case Types.SYNC_MEDS:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_SYNC_MEDS:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_SYNC_MEDS:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default syncMedReducers;