import {loginActions} from '../../../../src/redux/actions/login/loginActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test loginActions', () => {
  interface Iparams {
    userinfo: any;
    token: string;
  }
  const data = '1';
  const err = 'SomeError';
  const userinfo = 'someInfo';
  const token = 'someToken';
  const params = {userinfo, token};

  it('test sendLoginRequest', () => {
    expect(loginActions.sendLoginRequest(params)).toEqual({
      type: Types.LOGIN_REQUEST,
      payload: params,
    });
  });
  it('test LoginSuccess', () => {
    expect(loginActions.LoginSuccess(data)).toEqual({
      type: Types.SUCCESS_LOGIN,
      payload: data,
    });
  });
  it('test LoginError', () => {
    expect(loginActions.LoginFailure(err)).toEqual({
      type: Types.FAILED_LOGIN,
      payload: err,
    });
  });
});
