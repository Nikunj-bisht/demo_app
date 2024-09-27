import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { patient } from "../../../../src/redux/apis/patient";
import { PatientProfileActions } from "../../../../src/redux/actions/patient/PatientProfileActions";
import { patientProfilewatcherSaga, patientProfileSaga } from "../../../../src/redux/sagas/patient/patientProfileSaga";

const initialData = {}
describe("test patientProfilewatcherSaga", () => {
  const result = patientProfilewatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(PatientProfileActions.fetchPatientDetails, patientProfileSaga)
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
    const generator = jest.spyOn(patient, "patientProfile").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientProfileSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [PatientProfileActions.fetchPatientDetailsError(undefined)]
    );
    generator.mockClear();
  });
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(patient, "patientProfile").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientProfileSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [PatientProfileActions.fetchPatientDetailsSuccess(response.data)]
    );
    generator.mockClear();
  });
})