import {takeLatest, call, put} from 'redux-saga/effects';
import { careTaker } from '../../apis/careTaker';
import { sendImageActions } from '../../actions/caretaker/sendImageActions';
export function* sendImageSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(careTaker.sendImage, payload);
    yield put(sendImageActions.sendImageSuccess(response?.data));
  } catch (err) {
    yield put(sendImageActions.sendImageFailed(err));
  }
}
export function* sendImagewatcherSaga() {
  yield takeLatest(sendImageActions.sendImageRequest, sendImageSaga);
}