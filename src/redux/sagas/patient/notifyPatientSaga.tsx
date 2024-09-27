import {takeLatest, call, put} from 'redux-saga/effects';
import { patient } from '../../apis/patient';
import { notifyPatientActions } from '../../actions/patient/notifyPatientActions';
export function* notifySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.notifyPatient, payload);
    yield put(notifyPatientActions.notifyPatientsSuccess(response?.data));
  } catch (err) {
    yield put(notifyPatientActions.notifyPatientsError(err));
  }
}
export function* notifywatcherSaga() {
  yield takeLatest(notifyPatientActions.notifyPatients, notifySaga);
}