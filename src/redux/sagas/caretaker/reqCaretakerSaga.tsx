import {takeLatest, call, put} from 'redux-saga/effects';
import { careTaker } from '../../apis/careTaker';
import { reqCaretakerActions } from '../../actions/caretaker/reqCaretakerActions';
export function* reqCaretakerSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(careTaker.reqCaretaker, payload);
    yield put(reqCaretakerActions.sendReqCaretakerSuccess(response?.data));
  } catch (err) {
    yield put(reqCaretakerActions.sendReqCaretakerFailed(err));
  }
}
export function* reqCaretakerwatcherSaga() {
  yield takeLatest(reqCaretakerActions.sendReqCaretaker, reqCaretakerSaga);
}