import axios from './axios';
import { API_URLS } from '../../constants/apiUrl';
export const careTaker = {
  emailcaretaker: async function name(payload) {
    const response = await axios.get(
      `${API_URLS.EMAIL_CARETAKER}?email=${payload}&sender={udet.user.givenName}`,
    );
    return response.data;
  },
  caretaker: async function fetchcaretaker(payload) {
    const response = await axios.get(
      `${API_URLS.CARETAKER}?patientId=${payload}`,
    );
    return response.data;
  },
  reqCaretaker: async function reqcaretaker(payload) {
    const response = await axios.get(`${API_URLS.CARETAER_REQUEST}`);
    return response.data;
  },
  sendImage: async function sendimages(payload) {
    const response = await axios.post(
      `${API_URLS.SEND_IMAGE}?medId=${payload}`,
    );
    return response.data;
  },
};
