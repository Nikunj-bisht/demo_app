import {patientReqActions} from '../../../../src/redux/actions/patient/patientReqActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test patientreqActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'user_id';
  it('test fetchPatientReq', () => {
    expect(patientReqActions.fetchPatientReq(string)).toEqual({
      type: Types.GET_PATIENT_REQUEST,
      payload: string,
    });
  });
  it('test fetchPatientReqSuccess', () => {
    expect(patientReqActions.fetchPatientReqSuccess(data)).toEqual({
      type: Types.SUCCES_PATIENT_REQUEST,
      payload: data,
    });
  });
  it('test fetchPatientReqError', () => {
    expect(patientReqActions.fetchPatientReqError(err)).toEqual({
      type: Types.FAILED_PATIENT_REQUEST,
      payload: err,
    });
  });
});
