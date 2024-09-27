import Types from '../allTypes';

function getMedHistory(globalmedId) {
  return {
    type: Types.GET_MED_HISTORY,
    payload: globalmedId,
  };
}

function medHistorySuccess(data) {
  return {
    type: Types.GET_MED_HISTORY_SUCCESS,
    payload: data,
  };
}

function medHistoryError(error) {
  return {
    type: Types.GET_MED_HISTORY_FAILED,
    payload: error,
  };
}

export const getMedHistoryActions = {
  getMedHistory,
  medHistorySuccess,
  medHistoryError,
};
