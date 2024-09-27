import {patientReqAcceptActions} from '../../../../src/redux/actions/patient/patientReqAcceptActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test patientReqAcceptActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'ci_id';
  it('test acceptPatientreq', () => {
    expect(patientReqAcceptActions.acceptPatientReq(string)).toEqual({
      type: Types.ACCEPT_PATIENT_REQUEST,
      payload: string,
    });
  });
  it('test acceptPatientReqSuccess', () => {
    expect(patientReqAcceptActions.acceptPatientReqSuccess(data)).toEqual({
      type: Types.SUCCES_ACCEPT_PATIENT_REQUEST,
      payload: data,
    });
  });
  it('test acceptPatientReqError', () => {
    expect(patientReqAcceptActions.acceptPatientReqError(err)).toEqual({
      type: Types.FAILED_ACCEPT_PATIENT_REQUEST,
      payload: err,
    });
  });
});
