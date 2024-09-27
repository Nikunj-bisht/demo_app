import {takeLatest, call, put} from 'redux-saga/effects';
import adherence from '../../apis/adherence';
import { getMedHistoryActions } from '../../actions/adherence/getMedHistoryActions';
export function* getMedHistorySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherence.getmedhistory, payload);
    yield put(getMedHistoryActions.medHistorySuccess(response?.data));
  } catch (err) {
    yield put(getMedHistoryActions.medHistoryError(err));
  }
}
export function* getMedHistorywatcherSaga() {
  yield takeLatest(getMedHistoryActions.getMedHistory, getMedHistorySaga);
}