import {API_URL} from '../repositories/var';

export const API_URLS = {
  LOGIN: `${API_URL}/api/v1/login`,
  SIGNUP: `${API_URL}/api/v1/user`,
  SYNC_HISTORY: `${API_URL}/api/v1/medicine-history/sync`,
  MED_IMAGES: `${API_URL}/api/v1/medicine-images`,
  GET_PATIENT: `${API_URL}/api/v1/patients`,
  PATIENT_PROFILE: `${API_URL}/api/v1/user`,
  PATIENT_REQ: `${API_URL}/api/v1/patient/requests`,
  REQ_ACCEPT: `${API_URL}/api/v1/accept`,
  REQ_DELETE: `${API_URL}/api/v1/delete`,
  NOTIFY_PATIENT: `${API_URL}/api/v1/notifyuser`,
  EMAIL_CARETAKER: `${API_URL}/api/v1/email`,
  CARETAKER: `${API_URL}/api/v1/caretakers`,
  CARETAER_REQUEST: `${API_URL}/api/v1/request`,
  SEND_IMAGE: `${API_URL}/api/v1/image`,
  SAVE_PROFILE: `${API_URL}/api/v1/user-details`,
  DOWNLOAD_PDF: `${API_URL}/api/v1/pdf`,
  SYNC_MEDS: `${API_URL}/api/v1/medicines/sync`,
  GET_MED_HISTORY: `${API_URL}/api/v1/medicine-histories`
};
