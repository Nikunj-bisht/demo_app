import {ProfileActions} from '../../../../src/redux/actions/profile/ProfileActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test ProfileActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'user_id';
  it('test saveProfile', () => {
    expect(ProfileActions.saveProfile(string)).toEqual({
      type: Types.SAVE_PROFILE,
      payload: string,
    });
  });
  it('test saveProfileSuccess', () => {
    expect(ProfileActions.saveProfileSuccess(data)).toEqual({
      type: Types.SUCCESS_PROFILE,
      payload: data,
    });
  });
  it('test saveProfileError', () => {
    expect(ProfileActions.saveProfileFailed(err)).toEqual({
      type: Types.FAILED_PROFILE,
      payload: err,
    });
  });
});
