import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { loginWatcherSaga, loginSaga } from "../../../../src/redux/sagas/login/loginSaga";
import { Signupuser } from "../../../../src/redux/apis/access";
import { loginActions } from "../../../../src/redux/actions/login/loginActions";

const initialData = {}
describe("test loginWatcherSaga", () => {
  const result = loginWatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(loginActions.sendLoginRequest, loginSaga)
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
    const generator = jest.spyOn(Signupuser, "loginuser").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      loginSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [loginActions.LoginFailure(undefined)]
    );
    generator.mockClear();
  });
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(Signupuser, "loginuser").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      loginSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [loginActions.LoginSuccess(response.data)]
    );
    generator.mockClear();
  });
})