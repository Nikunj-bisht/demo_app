import Logger from '../../../components/logger';
import Types from '../allTypes';

interface Iparams {
  userinfo: any;
  token: string;
}

function sendLoginRequest(params) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: params,
  };
}
function LoginSuccess(data) {
  Logger.loggerInfo('successful login');
  return {
    type: Types.SUCCESS_LOGIN,
    payload: data,
  };
}
function LoginFailure(error) {
  Logger.loggerError('login failed');
  return {
    type: Types.FAILED_LOGIN,
    payload: error,
  };
}

export const loginActions = {
  sendLoginRequest,
  LoginSuccess,
  LoginFailure,
};
