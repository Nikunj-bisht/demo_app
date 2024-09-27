import emailCaretakerReducer from '../../../../src/redux/reducers/caretaker/emailCaretakerReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test emailCaretakerReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = emailCaretakerReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for emailCaretaker load', () => {
      expect(
        emailCaretakerReducer(initialState, {
              type: Types.SEND_EMAIL,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for emailCaretaker success', () => {
      expect(
        emailCaretakerReducer(initialState, {
              type: Types.SUCCESS_SEND_EMAIL,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for emailCaretaker error', () => {
      expect(
        emailCaretakerReducer(initialState, {
              type: Types.FAILED_SEND_EMAIL,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});