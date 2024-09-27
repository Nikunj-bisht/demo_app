import {patientReqDeleteActions} from '../../../../src/redux/actions/patient/patientReqDeleteActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test patientReqDeleteActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'ci_id';
  it('test patientReqDelete', () => {
    expect(patientReqDeleteActions.deletePatientReq(string)).toEqual({
      type: Types.DELETE_PATIENT_REQUEST,
      payload: string,
    });
  });
  it('test patientReqDeleteSuccess', () => {
    expect(patientReqDeleteActions.deletePatientReqSuccess(data)).toEqual({
      type: Types.SUCCES_DELETE_PATIENT_REQUEST,
      payload: data,
    });
  });
  it('test patientReqDeleteError', () => {
    expect(patientReqDeleteActions.deletePatientReqError(err)).toEqual({
      type: Types.FAILED_DELETE_PATIENT_REQUEST,
      payload: err,
    });
  });
});
