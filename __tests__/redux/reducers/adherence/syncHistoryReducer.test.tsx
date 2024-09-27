import syncHistoryReducer from '../../../../src/redux/reducers/adherence/syncHistoryReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test syncHistoryReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = syncHistoryReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for syncHistory load', () => {
      expect(
        syncHistoryReducer(initialState, {
              type: Types.SYNC_HISTORY,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for syncHistory success', () => {
      expect(
        syncHistoryReducer(initialState, {
              type: Types.SUCCESS_SYNC_HISTORY,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for syncHistory error', () => {
      expect(
        syncHistoryReducer(initialState, {
              type: Types.FAILED_SYNC_HISTORY,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});