import { logger } from "react-native-logs";
import Logger from "../../../components/logger";
import Types from "../allTypes";

function deletePatientReq(ci_id: string) {
  return {
    type: Types.DELETE_PATIENT_REQUEST,
    payload: ci_id,
  };
}
function deletePatientReqSuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCES_DELETE_PATIENT_REQUEST,
    payload: data,
  };
}
function deletePatientReqError(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_DELETE_PATIENT_REQUEST,
    payload: error,
  };
}

export const patientReqDeleteActions = {
  deletePatientReq,
  deletePatientReqSuccess,
  deletePatientReqError,
}
