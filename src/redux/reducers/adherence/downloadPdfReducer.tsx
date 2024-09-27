import Types from '../../actions/allTypes';
export const initialState = {
  data: null,
  loading: false,
  error: null,
};
const downloadPdfReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.PDF_DOWNLOAD:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_PDF_DOWNLOAD:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_PDF_DOWNLOAD:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
export default downloadPdfReducer;