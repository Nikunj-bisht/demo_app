import {takeLatest, call, put} from 'redux-saga/effects';
import { patient } from '../../apis/patient';
import { PatientActions } from '../../actions/patient/PatientActions';
export function* patientSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.fetchPatient, payload);
    yield put(PatientActions.fetchPatientSuccess(response?.data));
  } catch (err) {
    yield put(PatientActions.fetchPatientError(err));
  }
}
export function* patientwatcherSaga() {
  yield takeLatest(PatientActions.fetchPatients, patientSaga);
}