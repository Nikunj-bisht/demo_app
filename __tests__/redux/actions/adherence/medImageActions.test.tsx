import {medImagesActions} from '../../../../src/redux/actions/adherence/medImagesActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test medImageActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'user_id';
  it('test syncMeds', () => {
    expect(medImagesActions.fetchMedImages(string)).toEqual({
      type: Types.GET_MED_IMAGES,
      payload: string,
    });
  });
  it('test syncMedSuccess', () => {
    expect(medImagesActions.fetchMedImagesSuccess(data)).toEqual({
      type: Types.SUCCESS_MED_IMAGES,
      payload: data,
    });
  });
  it('test syncMedsError', () => {
    expect(medImagesActions.fetchMedImagesError(err)).toEqual({
      type: Types.FAILED_MED_IMAGES,
      payload: err,
    });
  });
});
