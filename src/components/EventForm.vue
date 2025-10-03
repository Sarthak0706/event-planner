<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ isEdit ? "Edit Event" : "Add Event" }}</div>
    </q-card-section>

    <q-card-section>
      <q-input v-model="localEvent.title" label="Event Title" outlined dense />
      <q-input
        v-model="localEvent.date"
        type="date"
        label="Event Date"
        outlined
        dense
        class="q-mt-sm"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        :label="isEdit ? 'Update' : 'Add'"
        color="primary"
        @click="submitEvent"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EventForm",
  props:['eventToEdit'],
  data() {
    return {
      localEvent: {
        title: "",
        date: ""
      }
    };
  },
  computed: {
    isEdit() {
      return !!this.eventToEdit;
    }
  },
  watch: {
    eventToEdit: {
      immediate: true,
      handler(newVal) {
        this.localEvent = newVal ? { ...newVal } : { title: "", date: "" };
      }
    }
  },
  methods: {
    ...mapActions(["addEvent", "updateEvent"]),
    submitEvent() {
      const { title, date } = this.localEvent;
      if (!title || !date) {
        this.$q.notify({
          message: "Please fill all fields!",
          color: "negative",
          position: "top-right"
        });
        return;
      }

      if (this.isEdit) {
        this.updateEvent(this.localEvent);
        this.$q.notify({
          message: "Event updated successfully!",
          color: "green",
          position: "top-right"
        });
      } else {
        this.addEvent({ title, date });
        this.$q.notify({
          message: `Event "${title}" added on ${date}!`,
          color: "green",
          position: "top-right"
        });
        this.localEvent = { title: "", date: "" }; 
      }

      this.$emit("done"); 
    }
  }
};
</script>
