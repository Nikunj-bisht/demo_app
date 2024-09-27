import {reqCaretakerActions} from '../../../../src/redux/actions/caretaker/reqCaretakerActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test reqCaretakerActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'caret_username';
  it('test sendReqCaretaker', () => {
    expect(reqCaretakerActions.sendReqCaretaker(string)).toEqual({
      type: Types.SEND_CARETAKER_REQUEST,
      payload: string,
    });
  });
  it('test sendReqCaretakerSuccess', () => {
    expect(reqCaretakerActions.sendReqCaretakerSuccess(data)).toEqual({
      type: Types.SUCCESS_CARETAKER_REQUEST,
      payload: data,
    });
  });
  it('test sendReqCaretakerError', () => {
    expect(reqCaretakerActions.sendReqCaretakerFailed(err)).toEqual({
      type: Types.FAILED_CARETAKER_REQUEST,
      payload: err,
    });
  });
});
