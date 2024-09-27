import ProfileReducer from '../../../../src/redux/reducers/profile/ProfileReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test ProfileReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = ProfileReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for Profile load', () => {
      expect(
        ProfileReducer(initialState, {
              type: Types.SAVE_PROFILE,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for Profile success', () => {
      expect(
        ProfileReducer(initialState, {
              type: Types.SUCCESS_PROFILE,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for Profile error', () => {
      expect(
        ProfileReducer(initialState, {
              type: Types.FAILED_PROFILE,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});