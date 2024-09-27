import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { sendImageActions } from "../../../../src/redux/actions/caretaker/sendImageActions";
import { sendImagewatcherSaga, sendImageSaga } from "../../../../src/redux/sagas/caretaker/sendImageSaga";
import { careTaker } from "../../../../src/redux/apis/careTaker";

const initialData = {}
describe("test sendImagewatcherSaga", () => {
  const result = sendImagewatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(sendImageActions.sendImageRequest, sendImageSaga)
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
    const generator = jest.spyOn(careTaker, "sendImage").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      sendImageSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [sendImageActions.sendImageSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(careTaker, "sendImage").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      sendImageSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [sendImageActions.sendImageFailed(undefined)]
    );
    generator.mockClear();
  })
})