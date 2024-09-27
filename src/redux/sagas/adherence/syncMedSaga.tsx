import {takeLatest, call, put} from 'redux-saga/effects';
import adherence from '../../apis/adherence';
import { syncMedActions } from '../../actions/adherence/syncMedActions';
export function* syncMedSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherence.syncmeds, payload);
    yield put(syncMedActions.syncMedSuccess(response?.data));
  } catch (err) {
    yield put(syncMedActions.syncMedsError(err));
  }
}
export function* syncMedwatcherSaga() {
  yield takeLatest(syncMedActions.syncMeds, syncMedSaga);
}