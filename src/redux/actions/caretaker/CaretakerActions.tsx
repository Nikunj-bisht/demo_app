import Logger from '../../../components/logger';
import Types from '../allTypes';

export default function fetchCaretakers(medId: string) {
  return {
    type: Types.GET_CARETAKERS,
    payload: medId,
  };
}
function fetchCaretakerssuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.Success_CareTAKER_REQUEST,
    payload: data,
  };
}
function fetchCaretakerserror(error) {
  Logger.loggerError(error);
  return {
    type: Types.Failed_CareTAKER_REQUEST,
    payload: error,
  };
}

export const CaretakerActions = {
  fetchCaretakerssuccess,
  fetchCaretakerserror,
  fetchCaretakers,
};
