import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PATIENT:
      return {data: null, loading: true, error: null};
    case Types.SUCCES_PATIENT:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_PATIENT:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default PatientReducer;