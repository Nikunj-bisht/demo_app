import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { syncHistoryActions } from "../../../src/redux/actions/adherence/syncHistoryActions";
import { syncHistorywatcherSaga, syncHistorySaga } from "../../../src/redux/sagas/adherence/syncHistorySaga";
import adherences from "../../../src/redux/apis/adherence";

const initialData = {}
describe("test syncHistorywatcherSaga", () => {
  const result = syncHistorywatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(syncHistoryActions.putSyncHistory, syncHistorySaga)
    )
  })
  it("should be done on next iteration", () => {
    expect(result.next().done).toBeTruthy();
  });
})
describe("testing loginSaga", () => {
  const response = {
    data: "1"
  }
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(adherences, "syncmedicineHistory").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      syncHistorySaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [syncHistoryActions.putSyncHistorysuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(adherences, "syncmedicineHistory").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      syncHistorySaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [syncHistoryActions.putSyncHistoryerror(undefined)]
    );
    generator.mockClear();
  })
})