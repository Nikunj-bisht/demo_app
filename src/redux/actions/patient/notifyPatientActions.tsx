import Types from "../allTypes";

function notifyPatients(medname: any) {
  return {
    type: Types.NOTIFY_PATIENT,
    payload: medname,
  };
}
function notifyPatientsSuccess(data) {
  return {
    type: Types.SUCCESS_NOTIFY_PATIENT,
    payload: data,
  };
}
function notifyPatientsError(error) {
  return {
    type: Types.FAILED_NOTIFY_PATIENT,
    payload: error,
  };
}

export const notifyPatientActions = {
  notifyPatients,
  notifyPatientsSuccess,
  notifyPatientsError,
}
