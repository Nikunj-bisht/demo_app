import {syncHistoryActions} from '../../../../src/redux/actions/adherence/syncHistoryActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test syncHistoryActions', () => {
  interface Iparams {
    meds_id: any;
    syncData: any;
  }
  const data = '1';
  const err = 'SomeError';
  const meds_id = '1';
  const syncData = 'state';
  const params = {meds_id, syncData};

  it('test syncMeds', () => {
    expect(syncHistoryActions.syncHistory(params)).toEqual({
      type: Types.SYNC_HISTORY,
      payload: params,
    });
  });
  it('test syncMedSuccess', () => {
    expect(syncHistoryActions.syncHitsorySuccess(data)).toEqual({
      type: Types.SUCCESS_SYNC_HISTORY,
      payload: data,
    });
  });
  it('test syncMedsError', () => {
    expect(syncHistoryActions.syncHistoryError(err)).toEqual({
      type: Types.FAILED_SYNC_HISTORY,
      payload: err,
    });
  });
});
