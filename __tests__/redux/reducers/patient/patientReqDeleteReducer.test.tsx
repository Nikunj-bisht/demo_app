import patientReqDeleteReducer from '../../../../src/redux/reducers/patient/patientReqDeleteReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test patientReqDeleteReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = patientReqDeleteReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for patientReqDelete load', () => {
      expect(
        patientReqDeleteReducer(initialState, {
              type: Types.DELETE_PATIENT_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for patientReqDelete success', () => {
      expect(
        patientReqDeleteReducer(initialState, {
              type: Types.SUCCES_DELETE_PATIENT_REQUEST,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for patientReqDelete error', () => {
      expect(
        patientReqDeleteReducer(initialState, {
              type: Types.FAILED_DELETE_PATIENT_REQUEST,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});