<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Event Planner</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-md">
      <div class="row q-gutter-md">
  <div class="col-12 col-md-3">
    <EventForm />
  </div>
  <div class="col-12 col-md-3">
    <EventList />
  </div>
  <div class="col-12 col-md-6">
    <CalendarView />
  </div>
</div>

    </q-page-container>
  </q-layout>
</template>

<script>
import EventForm from "./components/EventForm.vue";
import EventList from "./components/EventList.vue";
import CalendarView from "./components/CalendarView.vue";

export default {
  name: "App",
  components: {
    EventForm,
    EventList,
    CalendarView
  }
};
</script>
