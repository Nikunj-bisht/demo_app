import {combineReducers} from 'redux';
import downloadPdfReducer from './adherence/downloadPdfReducer';
import getMedHistoryReducer from './adherence/getMedHistoryReducer';
import medImagesReducer from './adherence/medImagesReducer';
import syncHistoryReducer from './adherence/syncHistoryReducer';
import syncMedReducer from './adherence/syncMedReducers';
import CareTakerReducer from './caretaker/CareTakerReducer';
import emailCaretakerReducer from './caretaker/emailCaretakerReducer';
import reqcaretakerReducer from './caretaker/reqCaretakerReducer';
import sendImageReducers from './caretaker/sendImageReducers';
import loginReducer from './login/loginReducer';
import notifyPatientReducer from './patient/notifyPatientReducer';
import PatientProfileReducer from './patient/PatientProfileReducer';
import PatientReducer from './patient/PatientReducer';
import patientReqReducer from './patient/patientReqReducers';
import patientReqAcceptReducer from './patient/patientReqAcceptReducer';
import patientReqDeleteReducer from './patient/patientReqDeleteReducer';
import ProfileReducer from './profile/ProfileReducer';
import signupReducer from './signup/signupReducer';

export default combineReducers({
  downloadPdf: downloadPdfReducer,
  medImages: medImagesReducer,
  syncMed: syncMedReducer,
  getMedHistory: getMedHistoryReducer,
  syncHistory: syncHistoryReducer,
  caretaker: CareTakerReducer,
  emailCaretaker: emailCaretakerReducer,
  reqCaretaker: reqcaretakerReducer,
  sendImage: sendImageReducers,
  login: loginReducer,
  notifyPatient: notifyPatientReducer,
  patientProfile: PatientProfileReducer,
  patient: PatientReducer,
  patientReq: patientReqReducer,
  patientReqAccept: patientReqAcceptReducer,
  patientReqDelete: patientReqDeleteReducer,
  profile: ProfileReducer,
  signup: signupReducer,
});
