import {notifyPatientActions} from '../../../../src/redux/actions/patient/notifyPatientActions';
import Types from '../../../../src/redux/actions/allTypes';

describe('test notifyPatientActions', () => {
  const data = '1';
  const err = 'SomeError';
  const any = 'medname';
  it('test notifyPatient', () => {
    expect(notifyPatientActions.notifyPatients(any)).toEqual({
      type: Types.NOTIFY_PATIENT,
      payload: any,
    });
  });
  it('test notifyPatientSuccess', () => {
    expect(notifyPatientActions.notifyPatientsSuccess(data)).toEqual({
      type: Types.SUCCESS_NOTIFY_PATIENT,
      payload: data,
    });
  });
  it('test notifyPatientError', () => {
    expect(notifyPatientActions.notifyPatientsError(err)).toEqual({
      type: Types.FAILED_NOTIFY_PATIENT,
      payload: err,
    });
  });
});
