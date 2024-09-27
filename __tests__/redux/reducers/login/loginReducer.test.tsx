import loginReducer from '../../../../src/redux/reducers/login/loginReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test loginReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = loginReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for login load', () => {
      expect(
        loginReducer(initialState, {
              type: Types.LOGIN_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for login success', () => {
      expect(
        loginReducer(initialState, {
              type: Types.SUCCESS_LOGIN,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for login error', () => {
      expect(
        loginReducer(initialState, {
              type: Types.FAILED_LOGIN,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});