import Logger from '../../../components/logger';
import Types from '../allTypes';

function syncMeds(user_id: string) {
  return {
    type: Types.SYNC_MEDS,
    payload: user_id,
  };
}
function syncMedSuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCESS_SYNC_MEDS,
    payload: data,
  };
}
function syncMedsError(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_SYNC_MEDS,
    payload: error,
  };
}

export const syncMedActions = {
  syncMeds,
  syncMedSuccess,
  syncMedsError,
};
