/* eslint-disable radix */
import globalDb from '../../repositories/database/globalDb';
import Logger from '../logger';

const db = globalDb();
const allreminderdata = async (med_name: any) => {
  let reminder_obj: any;
  let map = new Map();
  let med_id: number = 0;

  function reminder_promise() {
    return new Promise(resolve => {
      db.transaction(async function (txn: any) {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
          [],
        );
        txn.executeSql(
          'SELECT * FROM `User_medicines` WHERE medicine_name = ?',
          [med_name],
          function (_tx: any, res: any) {
            reminder_obj = res.rows.item(0);
            med_id = parseInt(res.rows.item(0).user_id);
            txn.executeSql(
              'SELECT * FROM `reminder_day` WHERE med_id = ?',
              [med_id],
              function (_txx: any, respp: any) {
                for (let o = 0; o < respp.rows.length; o++) {
                  const curr_rem_obj = respp.rows.item(o);

                  let overall_timings = new Set(reminder_obj.time.split('-'));
                  let taken_missed_times = new Set(
                    curr_rem_obj.timings.split('-'),
                  );
                  let final_timeings_obj = {
                    remId: respp.rows.item(o).rem_id,
                    taken: [],
                    not_taken: [],
                  };

                  overall_timings.forEach((m_time: any) => {
                    if (taken_missed_times.has(m_time)) {
                      final_timeings_obj.not_taken.push(m_time);
                    } else {
                      final_timeings_obj.taken.push(m_time);
                    }
                  });
                  map.set(curr_rem_obj.date, final_timeings_obj);
                }
                resolve(map);
              },
            );
          },
        );
      });
    });
  }
  map = await reminder_promise();

  Logger.loggerInfo(map);
  return {mapper: map, meds_id: med_id};
};

export default allreminderdata;
