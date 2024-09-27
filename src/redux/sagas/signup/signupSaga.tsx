import {takeLatest, call, put} from 'redux-saga/effects';
import { Signupuser } from '../../apis/access';
import { signupActions } from '../../actions/signup/signupActions';
export function* signupSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(Signupuser.signup, payload);
    yield put(signupActions.SignupSuccess(response?.data));
  } catch (err) {
    yield put(signupActions.SignupFailure(err));
  }
}
export function* signupwatcherSaga() {
  yield takeLatest(signupActions.sendSignupRequest, signupSaga);
}
