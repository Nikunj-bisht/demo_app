import medImagesReducer from '../../../../src/redux/reducers/adherence/medImagesReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test medImagesReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = medImagesReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for medImages load', () => {
      expect(
        medImagesReducer(initialState, {
              type: Types.GET_MED_IMAGES,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for medImages success', () => {
      expect(
        medImagesReducer(initialState, {
              type: Types.SUCCESS_MED_IMAGES,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for medImages error', () => {
      expect(
        medImagesReducer(initialState, {
              type: Types.FAILED_MED_IMAGES,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});