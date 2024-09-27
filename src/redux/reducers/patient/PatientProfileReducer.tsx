import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const PatientProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PATIENT_DETAILS:
      return {data: null, loading: true, error: null};
    case Types.SUCCES_PATIENT_DETAILS:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_PATIENT_DETAILS:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default PatientProfileReducer;