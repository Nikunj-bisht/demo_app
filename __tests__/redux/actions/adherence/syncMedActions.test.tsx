import {syncMedActions} from '../../../../src/redux/actions/adherence/syncMedActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test syncMedActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'user_id';
  it('test syncMeds', () => {
    expect(syncMedActions.syncMeds(string)).toEqual({
      type: Types.SYNC_MEDS,
      payload: string,
    });
  });
  it('test syncMedSuccess', () => {
    expect(syncMedActions.syncMedSuccess(data)).toEqual({
      type: Types.SUCCESS_SYNC_MEDS,
      payload: data,
    });
  });
  it('test syncMedsError', () => {
    expect(syncMedActions.syncMedsError(err)).toEqual({
      type: Types.FAILED_SYNC_MEDS,
      payload: err,
    });
  });
});
