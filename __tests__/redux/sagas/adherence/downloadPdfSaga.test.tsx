import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { downloadPdfActions } from "../../../../src/redux/actions/adherence/downloadPdfActions";
import { downloadPdfSaga, downloadPdfwatcherSaga } from "../../../../src/redux/sagas/adherence/downloadPdfSaga";
import adherence from "../../../../src/redux/apis/adherence";

const initialData = {}
describe("test downloadPdfwatcherSaga", () => {
  const result = downloadPdfwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(downloadPdfActions.downloadPdf, downloadPdfSaga)
    )
  })
  it("should be done on next iteration", () => {
    expect(result.next().done).toBeTruthy();
  });
})
describe("testing loginSaga", () => {
  const response = {
    data: "1"
  };
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(adherence, "downloadPdf").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      downloadPdfSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [downloadPdfActions.downloadPdfSuccess(response.data)]
    );
    generator.mockClear();
  });
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(adherence, "downloadPdf").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      downloadPdfSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [downloadPdfActions.downloadPdfError(undefined)]
    );
    generator.mockClear();
  });
})