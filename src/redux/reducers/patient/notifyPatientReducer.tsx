import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const notifyPatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.NOTIFY_PATIENT:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_NOTIFY_PATIENT:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_NOTIFY_PATIENT:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default notifyPatientReducer;