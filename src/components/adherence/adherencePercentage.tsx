const AdherencePercentage = (startDate, days, times, currentCount, _name) => {
  return new Promise(res => {
    let tilldatecount = 0;
    let daysarray = days.split(':');
    let ttimes = times.split('-').length;
    let daysSet = new Set(daysarray);
    const today = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    let startingDate = new Date(startDate);
    const utc1 = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const utc2 = Date.UTC(
      startingDate.getFullYear(),
      startingDate.getMonth(),
      startingDate.getDate(),
    );

    let left = Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY));
    const weeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    while (left >= 0) {
      if (daysSet.has(weeks[startingDate.getDay()])) {
        tilldatecount += ttimes;
      }
      left--;
      startingDate.setDate(startingDate.getDate() + 1);
    }
    res(Math.round((currentCount / tilldatecount) * 100));
  });
};

export default AdherencePercentage;
