import {takeLatest, call, put} from 'redux-saga/effects';
import { patient } from '../../apis/patient';
import { PatientProfileActions } from '../../actions/patient/PatientProfileActions';
export function* patientProfileSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.patientProfile, payload);
    yield put(PatientProfileActions.fetchPatientDetailsSuccess(response?.data));
  } catch (err) {
    yield put(PatientProfileActions.fetchPatientDetailsError(err));
  }
}
export function* patientProfilewatcherSaga() {
  yield takeLatest(PatientProfileActions.fetchPatientDetails, patientProfileSaga);
}