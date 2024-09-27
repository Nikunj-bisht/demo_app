import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true);
function globalDb() {
 return SQLite.openDatabase({
    name: 'MedStickdb',
    location: 'default',
  });
}
export default globalDb;
