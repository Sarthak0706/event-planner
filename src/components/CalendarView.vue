<template>
  <q-card class="q-ma-md" style="width: 100%">
    <q-card-section>
      <div class="text-h6">Calendar View</div>
    </q-card-section>

    <q-card-section>
      <vue-cal 
        style="height: 600px; width: 100%" 
        :events="calendarEvents" 
      />
    </q-card-section>
  </q-card>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { mapGetters } from "vuex";

export default {
  name: "CalendarView",
  components: { VueCal },
  computed: {
    ...mapGetters(["allEvents"]),
    calendarEvents() {
      return this.allEvents.map((e) => ({
        start: e.date,
        end: e.date,
        title: e.title
      }));
    }
  }
};
</script>
