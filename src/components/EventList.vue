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

        <!-- Edit button -->
        <q-item-section side>
          <q-btn
            outlined
            rounded
            icon="edit"
            color="red"
            @click.stop="openEdit(event)"
            class="glossy"
            padding="xs lg"
          />
        </q-item-section>
      </q-item>

      <!-- Fallback -->
      <q-item v-if="events.length === 0">
        <q-item-section>No events added yet</q-item-section>
      </q-item>
    </q-list>

    <!-- Edit Dialog -->
    <q-dialog v-model="showEditDialog">
      <EventForm
        v-if="selectedEvent"
        :event-to-edit="selectedEvent"
        @done="closeDialog"
      />
    </q-dialog>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";
import EventForm from "./EventForm.vue";

export default {
  name: "EventList",
  components: { EventForm },
  data() {
    return {
      showEditDialog: false,
      selectedEvent: null,
    };
  },
  computed: {
    ...mapGetters(["allEvents"]),
    events() {
      return this.allEvents;
    },
  },
  methods: {
    openEdit(event) {
      this.selectedEvent = { ...event };
      this.showEditDialog = true;
    },
    closeDialog() {
      this.showEditDialog = false;
      this.selectedEvent = null;
    },
  },
};
</script>
