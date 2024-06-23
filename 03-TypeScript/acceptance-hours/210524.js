"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function saveInGoogleCalendar(userId, event, timeInterval) {
    return __awaiter(this, void 0, void 0, function* () {
        // save in google servers the event + interval to repeat
        yield fetch('https://calendar.google.com/events/create?userId=' + userId, { body: JSON.stringify({
                event,
                timeInterval
            }) });
    });
}
const googleEvent = {
    name: "Ziv's birthday",
    startTime: new Date('23/05/2024').getTime(),
    endTime: new Date('26/05/2024').getTime(),
    location: 'Bugrashov 5, Tel-Aviv, Israel',
    zoomLink: 'https://zoom.us/sdbjh34kbru3hrbwfnhrej/join',
};
saveInGoogleCalendar('asdbh4uybf3rfybire', googleEvent, 'yearly');
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
const filterCrossDayEvent = (events) => {
    return events.filter((event) => {
        return event.endTime - event.startTime > DAY_IN_MILLISECONDS;
    });
};
