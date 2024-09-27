import {getMedHistoryActions} from '../../../../src/redux/actions/adherence/getMedHistoryActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test medicine history actions', () => {
  const data = '10';
  const err = 'SomeError';
  const string = 'globalmedId';
  it('test syncMedHistory', () => {
    expect(getMedHistoryActions.getMedHistory(string)).toEqual({
      type: Types.GET_MED_HISTORY,
      payload: string,
    });
  });
  it('test syncMedHistorySuccess', () => {
    expect(getMedHistoryActions.medHistorySuccess(data)).toEqual({
      type: Types.GET_MED_HISTORY_SUCCESS,
      payload: data,
    });
  });
  it('test syncMedsHistoryError', () => {
    expect(getMedHistoryActions.medHistoryError(err)).toEqual({
      type: Types.GET_MED_HISTORY_FAILED,
      payload: err,
    });
  });
});
