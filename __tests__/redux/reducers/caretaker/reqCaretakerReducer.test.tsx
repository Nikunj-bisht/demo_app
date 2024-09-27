import reqCaretakerReducer from '../../../../src/redux/reducers/caretaker/reqCaretakerReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test reqCaretakerReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = reqCaretakerReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for reqCaretaker load', () => {
      expect(
        reqCaretakerReducer(initialState, {
              type: Types.SEND_CARETAKER_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for reqCaretaker success', () => {
      expect(
        reqCaretakerReducer(initialState, {
              type: Types.SUCCESS_CARETAKER_REQUEST,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for reqCaretaker error', () => {
      expect(
        reqCaretakerReducer(initialState, {
              type: Types.FAILED_CARETAKER_REQUEST,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});