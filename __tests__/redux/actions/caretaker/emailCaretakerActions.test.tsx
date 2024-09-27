import {emailCaretakerActions} from '../../../../src/redux/actions/caretaker/emailCaretakerActions';
import Types from '../../../../src/redux/actions/allTypes';

describe('test emailCaretakerActions', () => {
  const data = '1';
  const err = 'SomeError';
  const any = 'email';
  it('test sendEmail', () => {
    expect(emailCaretakerActions.sendEmail(any)).toEqual({
      type: Types.SEND_EMAIL,
      payload: any,
    });
  });
  it('test sendEmailSuccess', () => {
    expect(emailCaretakerActions.sendEmailSuccess(data)).toEqual({
      type: Types.SUCCESS_SEND_EMAIL,
      payload: data,
    });
  });
  it('test sendEmailError', () => {
    expect(emailCaretakerActions.sendEmailFailed(err)).toEqual({
      type: Types.FAILED_SEND_EMAIL,
      payload: err,
    });
  });
});
