import {takeLatest, call, put} from 'redux-saga/effects';
import { patient } from '../../apis/patient';
import { patientReqActions } from '../../actions/patient/patientReqActions';
export function* patientReqSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.patientReq, payload);
    yield put(patientReqActions.fetchPatientReqSuccess(response?.data));
  } catch (err) {
    yield put(patientReqActions.fetchPatientReqError(err));
  }
}
export function* patientreqwatcherSaga() {
  yield takeLatest(patientReqActions.fetchPatientReq, patientReqSaga);
}