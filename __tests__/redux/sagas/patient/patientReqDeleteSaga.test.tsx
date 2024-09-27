import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { patient } from "../../../../src/redux/apis/patient";
import { patientReqDeleteActions } from "../../../../src/redux/actions/patient/patientReqDeleteActions";
import { reqDeletewatcherSaga, reqDeleteSaga } from "../../../../src/redux/sagas/patient/patientReqDeleteSaga";

const initialData = {}
describe("test reqDeletewatcherSaga", () => {
  const result = reqDeletewatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(patientReqDeleteActions.deletePatientReq, reqDeleteSaga)
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
    const generator = jest.spyOn(patient, "reqDelete").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqDeleteSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [patientReqDeleteActions.deletePatientReqSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(patient, "reqDelete").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqDeleteSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [patientReqDeleteActions.deletePatientReqError(undefined)]
    );
    generator.mockClear();
  })
})