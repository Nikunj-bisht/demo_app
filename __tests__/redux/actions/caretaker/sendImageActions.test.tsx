import {sendImageActions} from '../../../../src/redux/actions/caretaker/sendImageActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test sendImageActions', () => {
  const data = '1';
  const err = 'SomeError';
  const number = 1;
  it('test sendImageRequest', () => {
    expect(sendImageActions.sendImageRequest(number)).toEqual({
      type: Types.SEND_IMAGES,
      payload: number,
    });
  });
  it('test sendImageSuccess', () => {
    expect(sendImageActions.sendImageSuccess(data)).toEqual({
      type: Types.SUCCESS_SEND_IMAGES,
      payload: data,
    });
  });
  it('test sendImageError', () => {
    expect(sendImageActions.sendImageFailed(err)).toEqual({
      type: Types.FAILED_SEND_IMAGES,
      payload: err,
    });
  });
});
