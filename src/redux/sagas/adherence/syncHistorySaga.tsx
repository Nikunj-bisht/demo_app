import {takeLatest, call, put} from 'redux-saga/effects';
import adherence from '../../apis/adherence';
import { syncHistoryActions } from '../../actions/adherence/syncHistoryActions';
export function* syncHistorySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherence.syncmedicineHistory, payload);
    yield put(syncHistoryActions.syncHitsorySuccess(response?.data));
  } catch (err) {
    yield put(syncHistoryActions.syncHistoryError(err));
  }
}
export function* syncHistorywatcherSaga() {
  yield takeLatest(syncHistoryActions.syncHistory, syncHistorySaga);
}