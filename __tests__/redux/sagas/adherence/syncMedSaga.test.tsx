import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { syncMedActions } from "../../../../src/redux/actions/adherence/syncMedActions";
import { syncMedwatcherSaga, syncMedSaga } from "../../../../src/redux/sagas/adherence/syncMedSaga";
import adherence from "../../../../src/redux/apis/adherence";

const initialData = {}
describe("test syncMedwatcherSaga", () => {
  const result = syncMedwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(syncMedActions.syncMeds, syncMedSaga)
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
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(adherence, "syncmeds").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      syncMedSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [syncMedActions.syncMedsError(undefined)]
    );
    generator.mockClear();
  });
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(adherence, "syncmeds").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      syncMedSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [syncMedActions.syncMedSuccess(response.data)]
    );
    generator.mockClear();
  });
})