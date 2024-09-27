import {CaretakerActions} from '../../../../src/redux/actions/caretaker/CaretakerActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test CaretakerActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'medId';
  it('test fetchCaretakers', () => {
    expect(CaretakerActions.fetchCaretakers(string)).toEqual({
      type: Types.GET_CARETAKERS,
      payload: string,
    });
  });
  it('test fetchCaretakerSuccess', () => {
    expect(CaretakerActions.fetchCaretakerssuccess(data)).toEqual({
      type: Types.Success_CareTAKER_REQUEST,
      payload: data,
    });
  });
  it('test fetchCaretakerError', () => {
    expect(CaretakerActions.fetchCaretakerserror(err)).toEqual({
      type: Types.Failed_CareTAKER_REQUEST,
      payload: err,
    });
  });
});
