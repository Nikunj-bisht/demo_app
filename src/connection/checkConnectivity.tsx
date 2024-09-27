/* eslint-disable no-new */
import NetInfo from '@react-native-community/netinfo';

const checkConnectivity = async () => {
  let state_type: boolean | null = null;
  return new Promise(res => {
    const unsubscribe = NetInfo.addEventListener(state => {
      state_type = state.isConnected;
      res(state_type);
    });

    unsubscribe();
  });
};

export default checkConnectivity;