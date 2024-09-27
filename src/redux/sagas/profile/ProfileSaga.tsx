import {takeLatest, call, put} from 'redux-saga/effects';
import { ProfileActions } from '../../actions/profile/ProfileActions';
import { profile } from '../../apis/profile';
export function* profileSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(profile.saveProfile, payload);
    yield put(ProfileActions.saveProfileSuccess(response?.data));
  } catch (err) {
    yield put(ProfileActions.saveProfileFailed(err));
  }
}
export function*profilewatcherSaga() {
  yield takeLatest(ProfileActions.saveProfile, profileSaga);
}
