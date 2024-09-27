import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { Signupuser } from "../../../../src/redux/apis/access";
import { signupActions } from "../../../../src/redux/actions/signup/signupActions";
import { signupwatcherSaga, signupSaga } from "../../../../src/redux/sagas/signup/signupSaga";

const initialData = {}
describe("test signupwatcherSaga", () => {
  const result = signupwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(signupActions.sendSignupRequest, signupSaga)
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
    const generator = jest.spyOn(Signupuser, "signup").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      signupSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [signupActions.SignupSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(Signupuser, "signup").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      signupSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [signupActions.SignupFailure(undefined)]
    );
    generator.mockClear();
  })
})