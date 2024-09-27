import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const patientReqDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.DELETE_PATIENT_REQUEST:
      return {data: null, loading: true, error: null};
    case Types.SUCCES_DELETE_PATIENT_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_DELETE_PATIENT_REQUEST:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default patientReqDeleteReducer;