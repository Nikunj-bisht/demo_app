import Logger from '../../../components/logger';
import Types from '../allTypes';

function sendReqCaretaker(caret_username: string) {
  return {
    type: Types.SEND_CARETAKER_REQUEST,
    payload: caret_username,
  };
}
function sendReqCaretakerSuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCESS_CARETAKER_REQUEST,
    payload: data,
  };
}
function sendReqCaretakerFailed(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_CARETAKER_REQUEST,
    payload: error,
  };
}

export const reqCaretakerActions = {
  sendReqCaretaker,
  sendReqCaretakerSuccess,
  sendReqCaretakerFailed,
};
