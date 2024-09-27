import {takeLatest, call, put} from 'redux-saga/effects';
import { careTaker } from '../../apis/careTaker';
import { CaretakerActions } from '../../actions/caretaker/CaretakerActions';
export function* caretakerSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(careTaker.caretaker, payload);
    yield put(CaretakerActions.fetchCaretakerssuccess(response?.data));
  } catch (err) {
    yield put(CaretakerActions.fetchCaretakerserror(err));
  }
}
export function* caretakerwatcherSaga() {
  yield takeLatest(CaretakerActions.fetchCaretakers, caretakerSaga);
}