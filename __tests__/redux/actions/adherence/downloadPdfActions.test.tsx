import {downloadPdfActions} from '../../../../src/redux/actions/adherence/downloadPdfActions';
import Types from '../../../../src/redux/actions/allTypes';
describe('test downloadPdfActions', () => {
  const data = '1';
  const err = 'SomeError';
  const any = 'globalmedId';
  it('test downlaodPdf', () => {
    expect(downloadPdfActions.downloadPdf(any)).toEqual({
      type: Types.PDF_DOWNLOAD,
      payload: any,
    });
  });
  it('test downloadPdfSuccess', () => {
    expect(downloadPdfActions.downloadPdfSuccess(data)).toEqual({
      type: Types.SUCCESS_PDF_DOWNLOAD,
      payload: data,
    });
  });
  it('test downloadPdfError', () => {
    expect(downloadPdfActions.downloadPdfError(err)).toEqual({
      type: Types.FAILED_PDF_DOWNLOAD,
      payload: err,
    });
  });
});
