import syncMedReducers from '../../../../src/redux/reducers/adherence/syncMedReducers';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test syncMedReducers', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = syncMedReducers(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for syncMed load', () => {
      expect(
        syncMedReducers(initialState, {
              type: Types.SYNC_MEDS,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for syncMed success', () => {
      expect(
        syncMedReducers(initialState, {
              type: Types.SUCCESS_SYNC_MEDS,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for syncMed error', () => {
      expect(
        syncMedReducers(initialState, {
              type: Types.FAILED_SYNC_MEDS,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});