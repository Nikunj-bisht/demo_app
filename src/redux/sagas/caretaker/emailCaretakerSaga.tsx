import {takeLatest, call, put} from 'redux-saga/effects';
import { careTaker } from '../../apis/careTaker';
import { emailCaretakerActions } from '../../actions/caretaker/emailCaretakerActions';

export function* emailCaretakerSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(careTaker.emailcaretaker, payload);
    yield put(emailCaretakerActions.sendEmailSuccess(response?.data));
  } catch (err) {
    yield put(emailCaretakerActions.sendEmailFailed(err));
  }
}
export function* emailCaretakerwatcherSaga() {
  yield takeLatest(emailCaretakerActions.sendEmail, emailCaretakerSaga);
}