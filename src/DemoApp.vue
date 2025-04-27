<script>
import { defineComponent } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import CaleventDataService from "../src/services/CaleventDataService";
export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        events: this.events,
        // initialEvents: this.retrieveCalevents, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    };
  },
  mounted() {
    // let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
    // selectInfo.view.calendar.addEvent({
    //   uuid: 3,
    //   title: "test",
    //   start: todayStr,
    //   allDay: true,
    // });
    this.retrieveCalevents();
  },
  methods: {
    async retrieveCalevents() {
      await CaleventDataService.findAll()
        .then((response) => {
          // let calendarApi = selectInfo.view.calendar;
          this.calendarOptions.events = response.data.map((event) => ({
            uuid: event.uuid,
            title: event.title,
            start: event.start,
            end: event.end,
            allDay: event.allDay,
          }));
          this.currentEvents = this.calendarOptions.events;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    async handleDateSelect(selectInfo) {
      let title = prompt("Please enter a new title for your event");
      let calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection

      if (title) {
        let newuuid = crypto.randomUUID();
        calendarApi.addEvent({
          uuid: newuuid,
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
        if (selectInfo.allDay == true) {
          var allVal = 1;
        } else {
          var allVal = 0;
        }
        var event = {
          uuid: newuuid,
          title: title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        };
        console.log("event being saved" + JSON.stringify(event));
        CaleventDataService.create(event)
          .then((data) => {
            res.send(data);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    handleEventClick(clickInfo) {
      console.log(
        "clicked event: " + JSON.stringify(clickInfo.event.extendedProps.uuid)
      );
      if (
        confirm(
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        CaleventDataService.delete(clickInfo.event.extendedProps.uuid)
          .then((response) => {
            res.send(response);
            console.log(clickInfo.event.uuid);
          })
          .catch((e) => {
            console.log(e);
          });
        clickInfo.event.remove();
        console.log(JSON.stringify(this.currentEvents));
      }
    },
    handleEvents(events) {
      this.currentEvents = events;
    },
  },
});
</script>

<template>
  <div class="demo-app">
    <div class="demo-app-sidebar">
      <div class="demo-app-sidebar-section">
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div class="demo-app-sidebar-section">
        <label>
          <input
            type="checkbox"
            :checked="calendarOptions.weekends"
            @change="handleWeekendsToggle"
          />
          toggle weekends
        </label>
      </div>
      <div class="demo-app-sidebar-section">
        <h2>All Events ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for="event in currentEvents" :key="event.uuid">
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="demo-app-main">
      <FullCalendar class="demo-app-calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b>{{ arg.event.title }}</b>
          <i>{{ arg.event.startStr }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang="css">
h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b {
  /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>
