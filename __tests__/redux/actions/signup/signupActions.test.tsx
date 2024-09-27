import {signupActions} from '../../../../src/redux/actions/signup/signupActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test signupActions', () => {
  interface Iparams {
    userinfo: any;
    token: string;
  }
  const data = '1';
  const err = 'SomeError';
  const userinfo = 'someInfo';
  const token = 'someToken';
  const params = {userinfo, token};

  it('test sendSignupRequest', () => {
    expect(signupActions.sendSignupRequest(params)).toEqual({
      type: Types.SIGNUP_REQUEST,
      payload: params,
    });
  });
  it('test SignupeSuccess', () => {
    expect(signupActions.SignupSuccess(data)).toEqual({
      type: Types.SUCCESS_SIGNUP,
      payload: data,
    });
  });
  it('test SignupError', () => {
    expect(signupActions.SignupFailure(err)).toEqual({
      type: Types.FAILED_SIGNUP,
      payload: err,
    });
  });
});
