import {PatientActions} from '../../../../src/redux/actions/patient/PatientActions';
import Types from '../../../../src/redux/actions/allTypes';

describe('test PatientActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'user_id';
  it('test fetchPatients', () => {
    expect(PatientActions.fetchPatients(string)).toEqual({
      type: Types.GET_PATIENT,
      payload: string,
    });
  });
  it('test fetchPatientSuccess', () => {
    expect(PatientActions.fetchPatientSuccess(data)).toEqual({
      type: Types.SUCCES_PATIENT,
      payload: data,
    });
  });
  it('test fetchPatientError', () => {
    expect(PatientActions.fetchPatientError(err)).toEqual({
      type: Types.FAILED_PATIENT,
      payload: err,
    });
  });
});
