import Logger from '../../../components/logger';
import Types from '../allTypes';

function acceptPatientReq(ci_id: string) {
  return {
    type: Types.ACCEPT_PATIENT_REQUEST,
    payload: ci_id,
  };
}
function acceptPatientReqSuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCES_ACCEPT_PATIENT_REQUEST,
    payload: data,
  };
}
function acceptPatientReqError(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_ACCEPT_PATIENT_REQUEST,
    payload: error,
  };
}

export const patientReqAcceptActions = {
  acceptPatientReq,
  acceptPatientReqSuccess,
  acceptPatientReqError,
};
