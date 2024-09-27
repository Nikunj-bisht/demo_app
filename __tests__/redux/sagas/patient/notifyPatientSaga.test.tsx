import {takeLatest} from '@redux-saga/core/effects';
import {runSaga} from 'redux-saga';
import {patient} from '../../../../src/redux/apis/patient';
import {notifyPatientActions} from '../../../../src/redux/actions/patient/notifyPatientActions';
import {
  notifySaga,
  notifywatcherSaga,
} from '../../../../src/redux/sagas/patient/notifyPatientSaga';

const initialData = {};
describe('test notifywatcherSaga', () => {
  const result = notifywatcherSaga();
  it('test login loading', () => {
    expect(result.next().value).toEqual(
      takeLatest(notifyPatientActions.notifyPatients, notifySaga),
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
      .spyOn(patient, 'notifyPatient')
      .mockImplementation(() => Promise.reject());

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      notifySaga,
      initialData,
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      notifyPatientActions.notifyPatientsError(undefined),
    ]);
    generator.mockClear();
  });
  it('should dispatch success action', async () => {
    const generator = jest
      .spyOn(patient, 'notifyPatient')
      .mockImplementation(() => Promise.resolve(response));
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      notifySaga,
      initialData,
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      notifyPatientActions.notifyPatientsSuccess(response.data),
    ]);
    generator.mockClear();
  });
});
