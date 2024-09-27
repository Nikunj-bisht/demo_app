import signupReducer from '../../../../src/redux/reducers/signup/signupReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test signupReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = signupReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for signup load', () => {
      expect(
        signupReducer(initialState, {
              type: Types.SIGNUP_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for signup success', () => {
      expect(
        signupReducer(initialState, {
              type: Types.SUCCESS_SIGNUP,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for signup error', () => {
      expect(
        signupReducer(initialState, {
              type: Types.FAILED_SIGNUP,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});