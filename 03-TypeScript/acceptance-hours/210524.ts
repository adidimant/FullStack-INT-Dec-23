type RepeatedIntervalForEvent = 'daily' | 'weekly' | 'bi-weekly' | 'monthly' | 'yearly' | 'custom';

type GoogleEvent = {
  name: string;
  startTime: number;
  endTime: number;
  location: string;
  description?: string;
  zoomLink?: string;
};

async function saveInGoogleCalendar(userId: string, event: GoogleEvent, timeInterval: RepeatedIntervalForEvent): Promise<void> {
  // save in google servers the event + interval to repeat
  await fetch('https://calendar.google.com/events/create?userId=' + userId, { body: JSON.stringify({
    event,
    timeInterval
  })});
}

const googleEvent: GoogleEvent = {
  name: "Ziv's birthday",
  startTime: new Date('23/05/2024').getTime(),
  endTime: new Date('26/05/2024').getTime(),
  location: 'Bugrashov 5, Tel-Aviv, Israel',
  zoomLink: 'https://zoom.us/sdbjh34kbru3hrbwfnhrej/join',
};

saveInGoogleCalendar('asdbh4uybf3rfybire', googleEvent, 'yearly');

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

const filterCrossDayEvent = (events: GoogleEvent[]): GoogleEvent[] => {
  return events.filter((event: GoogleEvent) => {
    return event.endTime - event.startTime > DAY_IN_MILLISECONDS
  });
};