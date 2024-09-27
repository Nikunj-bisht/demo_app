import {spawn} from 'redux-saga/effects';
import { downloadPdfSaga, downloadPdfwatcherSaga } from './adherence/downloadPdfSaga';
import { getMedHistorySaga, getMedHistorywatcherSaga } from './adherence/getMedHistorySaga';
import { syncHistorySaga,syncHistorywatcherSaga } from './adherence/syncHistorySaga';
import {syncMedSaga, syncMedwatcherSaga} from './adherence/syncMedSaga';
import {caretakerSaga, caretakerwatcherSaga} from './caretaker/CaretakerSaga';
import {emailCaretakerSaga, emailCaretakerwatcherSaga} from './caretaker/emailCaretakerSaga';
import {reqCaretakerSaga, reqCaretakerwatcherSaga} from './caretaker/reqCaretakerSaga';
import {sendImageSaga, sendImagewatcherSaga} from './caretaker/sendImageSaga';
import { loginSaga, loginWatcherSaga } from './login/loginSaga';
import {notifySaga, notifywatcherSaga} from './patient/notifyPatientSaga';
import { patientProfileSaga, patientProfilewatcherSaga } from './patient/patientProfileSaga';
import {reqAcceptSaga, reqAcceptwatcherSaga} from './patient/patientReqAcceptSaga';
import {reqDeleteSaga, reqDeletewatcherSaga} from './patient/patientReqDeleteSaga';
import {patientReqSaga, patientreqwatcherSaga} from './patient/patientReqSaga';
import { patientSaga, patientwatcherSaga } from './patient/PatientSaga';
import { profileSaga, profilewatcherSaga } from './profile/ProfileSaga';
import { signupSaga, signupwatcherSaga } from './signup/signupSaga';


function* rootsaga() {
  yield spawn(syncMedSaga, syncMedwatcherSaga)
  yield spawn(caretakerSaga, caretakerwatcherSaga);
  yield spawn(emailCaretakerSaga, emailCaretakerwatcherSaga);
  yield spawn(reqCaretakerSaga, reqCaretakerwatcherSaga);
  yield spawn(sendImageSaga, sendImagewatcherSaga);
  yield spawn(notifySaga, notifywatcherSaga);
  yield spawn(reqAcceptSaga, reqCaretakerwatcherSaga);
  yield spawn(reqDeleteSaga, reqCaretakerwatcherSaga);
  yield spawn(patientReqSaga, patientreqwatcherSaga);
  yield spawn(patientSaga, patientwatcherSaga);
  yield spawn(profileSaga, profilewatcherSaga);
  yield spawn(loginSaga, loginWatcherSaga);
  yield spawn(signupSaga, signupwatcherSaga);
  yield spawn(patientProfileSaga, patientProfilewatcherSaga);
  yield spawn(reqAcceptSaga, reqAcceptwatcherSaga);
  yield spawn(reqDeleteSaga, reqDeletewatcherSaga);
  yield spawn(downloadPdfSaga, downloadPdfwatcherSaga);
  yield spawn(getMedHistorySaga, getMedHistorywatcherSaga);
  yield spawn(syncHistorySaga, syncHistorywatcherSaga)
  
}

export default rootsaga;
