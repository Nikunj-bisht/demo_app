import { logger } from "react-native-logs";
import Logger from "../../../components/logger";
import Types from "../allTypes";

function fetchPatientReq(user_id: string) {
  return {
    type: Types.GET_PATIENT_REQUEST,
    payload: user_id,
  };
}
function fetchPatientReqSuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCES_PATIENT_REQUEST,
    payload: data,
  };
}
function fetchPatientReqError(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_PATIENT_REQUEST,
    payload: error,
  };
}

export const patientReqActions = {
  fetchPatientReq,
  fetchPatientReqSuccess,
  fetchPatientReqError,
}
        