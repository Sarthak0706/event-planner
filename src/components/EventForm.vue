<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Add Event</div>
    </q-card-section>

    <q-card-section>
      <q-input v-model="title" label="Event Title" outlined dense />
      <q-input
        v-model="date"
        type="date"
        label="Event Date"
        outlined
        dense
        class="q-mt-sm"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        label="Add"
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
  data() {
    return {
      title: "",
      date: ""
    };
  },
  methods: {
    ...mapActions(["addEvent"]),
    submitEvent() {
      if (!this.title || !this.date) {
        this.$q.notify({
          message: "Please fill all fields!",
          color: "negative",
          position: "top-right"
        });
        return;
      }

      this.addEvent({ title: this.title, date: this.date });

      this.$q.notify({
        message: `Event "${this.title}" added on ${this.date}!`,
        color: "green",
        position: "top-right"
      });

      // Reset form after adding
      this.title = "";
      this.date = "";

      this.$emit("done");
    }
  }
};
</script>
