import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { emailCaretakerActions } from "../../../../src/redux/actions/caretaker/emailCaretakerActions";
import { emailCaretakerwatcherSaga, emailCaretakerSaga } from "../../../../src/redux/sagas/caretaker/emailCaretakerSaga";
import { careTaker } from "../../../../src/redux/apis/careTaker";

const initialData = {}
describe("test emailCaretakerwatcherSaga", () => {
  const result = emailCaretakerwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(emailCaretakerActions.sendEmail, emailCaretakerSaga)
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
    const generator = jest.spyOn(careTaker, "emailcaretaker").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      emailCaretakerSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [emailCaretakerActions.sendEmailFailed(undefined)]
    );
    generator.mockClear();
  });
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(careTaker, "emailcaretaker").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      emailCaretakerSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [emailCaretakerActions.sendEmailSuccess(response.data)]
    );
    generator.mockClear();
  });
})