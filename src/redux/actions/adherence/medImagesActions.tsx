import Logger from '../../../components/logger';
import Types from '../allTypes';


function fetchMedImages(user_id: string) {
  return {
    type: Types.GET_MED_IMAGES,
    payload: user_id,
  };
}
function fetchMedImagesSuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCESS_MED_IMAGES,
    payload: data,
  };
}
function fetchMedImagesError(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_MED_IMAGES,
    payload: error,
  };
}

export const medImagesActions = {
  fetchMedImages,
  fetchMedImagesSuccess,
  fetchMedImagesError,
};
