<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Event List</div>
    </q-card-section>

    <q-list bordered padding>
      <q-slide-item
        v-for="event in events"
        :key="event.id"
        left-color="red"
        right-color="green"
        @right="deleteevent(event)"
      >
        <!-- Slide content -->
        <template v-slot:left>
          Delete
        </template>
        <template v-slot:right>
          keep
        </template>

        <!-- The actual list item -->
        <q-item clickable v-ripple>
          <!-- Avatar -->
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ event.title.charAt(0).toUpperCase() }}
            </q-avatar>
          </q-item-section>

          <!-- Event info -->
          <q-item-section>
            {{ event.date }} - {{ event.title }}
          </q-item-section>
        </q-item>
      </q-slide-item>

      <!-- Fallback -->
      <q-item v-if="events.length === 0">
        <q-item-section>No events added yet</q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EventList",
  computed: {
    ...mapGetters(["allEvents"]),
    events() {
      return this.allEvents;
    },
  },
  methods: {
    deleteevent(event) {
      this.$store.dispatch("deleteEvent", event.id);
    },
  },
};
</script>
