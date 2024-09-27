import CareTakerReducer from '../../../../src/redux/reducers/caretaker/CareTakerReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test CareTakerReducer', () => {
  it('should return the initial state', () => {
    const initialState1 = {
      data: null,
      loading: false,
      error: null,
    };
    const result = CareTakerReducer(undefined, {});
    expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for CareTaker load', () => {
    expect(
      CareTakerReducer(initialState, {
        type: Types.GET_CARETAKERS,
      }),
    ).toEqual({
      data: null,
      loading: true,
      error: null,
    });
  });
  it('should check for CareTaker success', () => {
    expect(
      CareTakerReducer(initialState, {
        type: Types.Success_CareTAKER_REQUEST,
        payload: {status: 'success'},
      }),
    ).toEqual({
      data: undefined,
      loading: false,
      error: null,
    });
  });
  it('should check for CareTaker error', () => {
    expect(
      CareTakerReducer(initialState, {
        type: Types.Failed_CareTAKER_REQUEST,
        payload: 'ERROR',
      }),
    ).toEqual({
      data: null,
      loading: true,
      error: undefined,
    });
  });
});
