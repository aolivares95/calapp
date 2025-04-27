import CaleventDataService from "./services/CaleventDataService";
let eventGuid = 0;
let todayStr = new Date("2025-04-18T06:30:00-05:00")
  .toISOString()
  .replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "test",
    start: todayStr,
  },
];

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
