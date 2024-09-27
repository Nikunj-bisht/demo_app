import {takeLatest, call, put} from 'redux-saga/effects';
import { Signupuser } from '../../apis/access';
import {loginActions} from '../../actions/login/loginActions';
export function* loginSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(Signupuser.loginuser, payload);
    yield put(loginActions.LoginSuccess(response?.data));
  } catch (err) {
    yield put(loginActions.LoginFailure(err));
  }
}
export function* loginWatcherSaga() {
  yield takeLatest(loginActions.sendLoginRequest, loginSaga);
}
