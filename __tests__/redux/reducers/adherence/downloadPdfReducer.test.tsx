import downloadPdfReducer from '../../../../src/redux/reducers/adherence/downloadPdfReducer';
import Types from '../../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test AdminCustomerReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = downloadPdfReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for authentication load', () => {
      expect(
          downloadPdfReducer(initialState, {
              type: Types.PDF_DOWNLOAD,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
         downloadPdfReducer(initialState, {
              type: Types.SUCCESS_PDF_DOWNLOAD,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for authentication error', () => {
      expect(
          downloadPdfReducer(initialState, {
              type: Types.FAILED_PDF_DOWNLOAD,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});