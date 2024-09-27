import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { profile } from "../../../../src/redux/apis/profile";
import { ProfileActions } from "../../../../src/redux/actions/profile/ProfileActions";
import { profileSaga, profilewatcherSaga } from "../../../../src/redux/sagas/profile/ProfileSaga";

const initialData = {}
describe("test signupwatcherSaga", () => {
  const result = profilewatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(ProfileActions.saveProfile, profileSaga)
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
    const generator = jest.spyOn(profile, "saveProfile").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      profileSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [ProfileActions.saveProfileSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(profile, "saveProfile").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      profileSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [ProfileActions.saveProfileFailed(undefined)]
    );
    generator.mockClear();
  })
})