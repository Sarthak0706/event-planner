<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Event List</div>
    </q-card-section>

    <q-list bordered padding>
      <q-item
        v-for="event in events"
        :key="event.id"
        clickable
        v-ripple
      >
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
};
</script>
