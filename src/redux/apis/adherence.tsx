import axios from './axios';
import { API_URLS } from '../../constants/apiUrl';


interface Iparams {
  meds_id: any;
  syncData: any;
}

const adherence = {
  syncmedicineHistory: async (params: Iparams) => {
    const {meds_id, syncData} = params;
    let response = await fetch(`${API_URLS.SYNC_HISTORY}?medId=${meds_id}`, {
      method: 'POST',
      body: JSON.stringify(syncData),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  },
  medimages: async function fetchmedimages(payload) {
    const response = await axios.get(`${API_URLS.MED_IMAGES}?medId=${payload}`);
    return response.data;
  },
  downloadPdf: async function downloadPdf(payload) {
    const response = await axios.get(`${API_URLS.DOWNLOAD_PDF}?medId=${payload}`);
    return response.data;
  },
  syncmeds: async function syncMeds(payload) {
    const response = await axios.get(`${API_URLS.SYNC_MEDS}=${payload}`);
    return response.data;
  },
  getmedhistory: async function getMedHistory(payload) {
    const response = await axios.get(`${API_URLS.GET_MED_HISTORY}?medId=${payload}`);
    return response.data;
  }

};


export default adherence;
