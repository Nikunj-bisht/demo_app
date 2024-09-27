import PatientReducer from '../../../../src/redux/reducers/patient/PatientReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test PatientReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = PatientReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for Patient load', () => {
      expect(
        PatientReducer(initialState, {
              type: Types.GET_PATIENT,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for Patient success', () => {
      expect(
        PatientReducer(initialState, {
              type: Types.SUCCES_PATIENT,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for Patient error', () => {
      expect(
        PatientReducer(initialState, {
              type: Types.FAILED_PATIENT,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});