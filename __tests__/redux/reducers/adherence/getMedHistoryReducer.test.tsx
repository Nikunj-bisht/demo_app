import getMedHistoryReducer from '../../../../src/redux/reducers/adherence/getMedHistoryReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test getMedHistoryReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = getMedHistoryReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for getMedHistory load', () => {
      expect(
        getMedHistoryReducer(initialState, {
              type: Types.GET_MED_HISTORY,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for getMedHistory success', () => {
      expect(
        getMedHistoryReducer(initialState, {
              type: Types.GET_MED_HISTORY_SUCCESS,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for getMedHistory error', () => {
      expect(
        getMedHistoryReducer(initialState, {
              type: Types.GET_MED_HISTORY_FAILED,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});