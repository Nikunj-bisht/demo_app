import patientReqAcceptReducer from '../../../../src/redux/reducers/patient/patientReqAcceptReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test patientReqAcceptReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = patientReqAcceptReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for patientReqAccept load', () => {
      expect(
        patientReqAcceptReducer(initialState, {
              type: Types.ACCEPT_PATIENT_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for patientReqAccept success', () => {
      expect(
        patientReqAcceptReducer(initialState, {
              type: Types.SUCCES_ACCEPT_PATIENT_REQUEST,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for patientReqAccept error', () => {
      expect(
        patientReqAcceptReducer(initialState, {
              type: Types.FAILED_ACCEPT_PATIENT_REQUEST,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});