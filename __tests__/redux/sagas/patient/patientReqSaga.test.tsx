import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { patient } from "../../../../src/redux/apis/patient";
import { patientReqActions } from "../../../../src/redux/actions/patient/patientReqActions";
import { patientreqwatcherSaga, patientReqSaga } from "../../../../src/redux/sagas/patient/patientReqSaga";

const initialData = {}
describe("test patientreqwatcherSaga", () => {
  const result = patientreqwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(patientReqActions.fetchPatientReq, patientReqSaga)
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
    const generator = jest.spyOn(patient, "patientReq").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientReqSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [patientReqActions.fetchPatientReqSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(patient, "patientReq").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientReqSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [patientReqActions.fetchPatientReqError(undefined)]
    );
    generator.mockClear();
  })
})