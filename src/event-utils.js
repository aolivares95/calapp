import CaleventDataService from "./services/CaleventDataService";
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [];

// CaleventDataService.findAll()
//   .then((response) => {
//     INITIAL_EVENTS.push(response.data);
//     console.log(response.data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

export function createEventId() {
  return String(eventGuid++);
}
