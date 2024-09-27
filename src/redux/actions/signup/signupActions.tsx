import { logger } from 'react-native-logs';
import Logger from '../../../components/logger';
import Types from '../allTypes';
interface Iparams {
  userinfo: any;
  token: string;
}

function sendSignupRequest(params: Iparams) {
  return {
    type: Types.SIGNUP_REQUEST,
    payload: params,
  };
}
function SignupSuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCESS_SIGNUP,
    payload: data,
  };
}
function SignupFailure(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_SIGNUP,
    payload: error,
  };
}

export const signupActions = {
  sendSignupRequest,
  SignupSuccess,
  SignupFailure,
};
