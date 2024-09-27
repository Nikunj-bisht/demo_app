import {takeLatest} from '@redux-saga/core/effects';
import {runSaga} from 'redux-saga';
import adherence from '../../../../src/redux/apis/adherence';
import {medImagesActions} from '../../../../src/redux/actions/adherence/medImagesActions';
import {
  medImageswatcherSaga,
  medImagesSaga,
} from '../../../../src/redux/sagas/adherence/medImagesSaga';

const initialData = {};
describe('test medImageswatcherSaga', () => {
  const result = medImageswatcherSaga();
  it('test login loading', () => {
    expect(result.next().value).toEqual(
      takeLatest(medImagesActions.fetchMedImages, medImagesSaga),
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
      .spyOn(adherence, 'medimages')
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      medImagesSaga,
      initialData,
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      medImagesActions.fetchMedImagesError(undefined),
    ]);
    generator.mockClear();
  });
  it('should dispatch success action', async () => {
    const generator = jest
      .spyOn(adherence, 'medimages')
      .mockImplementation(() => Promise.resolve(response));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      medImagesSaga,
      initialData,
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      medImagesActions.fetchMedImagesSuccess(response.data),
    ]);
    generator.mockClear();
  });
});
