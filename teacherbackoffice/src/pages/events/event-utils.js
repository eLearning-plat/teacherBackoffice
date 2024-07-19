let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export function getInitialEvents($t) {
  return [
    {
      id: createEventId(),
      title: $t('allDayEvent'),
      start: todayStr,
    },
    {
      id: createEventId(),
      title: $t('timedEvent'),
      start: todayStr + 'T12:00:00',
    },
  ];
}

export function createEventId() {
  return String(eventGuid++);
}
