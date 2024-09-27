import {API_URL} from '../repositories/var';
import Logger from '../components/logger';


const networkCalls = {
  synchistory: async (medId: number, medHistory: any) => {
    Logger.loggerInfo(medHistory);
    let response = await fetch(
      `${API_URL}/api/v1/medicine-history/sync?medId=${medId}`,
      {
        method: 'POST',
        body: JSON.stringify(medHistory),
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    return response;
  },
  getmedicineHistory: async medId => {
    let response = await fetch(
      `${API_URL}/api/v1/medicine-histories?medId=${medId}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    return response.json();
  },
  fetchCaretakers: async (user_id: any) => {
    let response = await fetch(
      `${API_URL}/api/v1/caretakers?patientId=${user_id}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    return response.json();
  },
};

export default networkCalls;
