import PatientProfileReducer from '../../../../src/redux/reducers/patient/PatientProfileReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test PatientProfileReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = PatientProfileReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for PatientProfile load', () => {
      expect(
        PatientProfileReducer(initialState, {
              type: Types.GET_PATIENT_DETAILS,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for PatientProfile success', () => {
      expect(
        PatientProfileReducer(initialState, {
              type: Types.SUCCES_PATIENT_DETAILS,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for PatientProfile error', () => {
      expect(
        PatientProfileReducer(initialState, {
              type: Types.FAILED_PATIENT_DETAILS,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});