import sendImageReducers from '../../../../src/redux/reducers/caretaker/sendImageReducers';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test sendImageReducers', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = sendImageReducers(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for sendImage load', () => {
      expect(
        sendImageReducers(initialState, {
              type: Types.SEND_IMAGES,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for sendImage success', () => {
      expect(
        sendImageReducers(initialState, {
              type: Types.SUCCESS_SEND_IMAGES,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for sendImage error', () => {
      expect(
        sendImageReducers(initialState, {
              type: Types.FAILED_SEND_IMAGES,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});