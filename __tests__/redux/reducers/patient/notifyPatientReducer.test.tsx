import notifyPatientReducer from '../../../../src/redux/reducers/patient/notifyPatientReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test notifyPatientReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = notifyPatientReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for notifyPatient load', () => {
      expect(
        notifyPatientReducer(initialState, {
              type: Types.NOTIFY_PATIENT,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for notifyPatient success', () => {
      expect(
        notifyPatientReducer(initialState, {
              type: Types.SUCCESS_NOTIFY_PATIENT,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for notifyPatient error', () => {
      expect(
        notifyPatientReducer(initialState, {
              type: Types.FAILED_NOTIFY_PATIENT,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});