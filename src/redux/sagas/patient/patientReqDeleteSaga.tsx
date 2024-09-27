import {takeLatest, call, put} from 'redux-saga/effects';
import { patientReqDeleteActions } from '../../actions/patient/patientReqDeleteActions';
import { patient } from '../../apis/patient';
export function* reqDeleteSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.reqDelete, payload);
    yield put(patientReqDeleteActions.deletePatientReqSuccess(response?.data));
  } catch (err) {
    yield put(patientReqDeleteActions.deletePatientReqError(err));
  }
}
export function* reqDeletewatcherSaga() {
  yield takeLatest(patientReqDeleteActions.deletePatientReq, reqDeleteSaga);
}