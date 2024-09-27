import {takeLatest} from '@redux-saga/core/effects';
import {runSaga} from 'redux-saga';
import {patient} from '../../../../src/redux/apis/patient';
import {PatientActions} from '../../../../src/redux/actions/patient/PatientActions';
import {
  patientwatcherSaga,
  patientSaga,
} from '../../../../src/redux/sagas/patient/PatientSaga';

const initialData = {};
describe('test patientwatcherSaga', () => {
  const result = patientwatcherSaga();
  it('test login loading', () => {
    expect(result.next().value).toEqual(
      takeLatest(PatientActions.fetchPatients, patientSaga),
    );
  });
  it('should be done on next iteration', () => {
    expect(result.next().done).toBeTruthy();
  });
});
describe('testing loginSaga', () => {
  const response = {
    data: '1',
  };

  it('should dispatch error action', async () => {
    const generator = jest
      .spyOn(patient, 'fetchPatient')
      .mockImplementation(() => Promise.reject());

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      patientSaga,
      initialData,
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([PatientActions.fetchPatientError(undefined)]);
    generator.mockClear();
  });
  it('should dispatch success action', async () => {
    const generator = jest
      .spyOn(patient, 'fetchPatient')
      .mockImplementation(() => Promise.resolve(response));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      patientSaga,
      initialData,
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      PatientActions.fetchPatientSuccess(response.data),
    ]);
    generator.mockClear();
  });
});
