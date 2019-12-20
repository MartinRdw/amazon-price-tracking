<template>
  <div>
    <div
      class="border px-4 py-3 rounded relative"
      :class="{
        'bg-red-100 border-red-400 text-red-700': alert_type === 'error',
        'bg-green-100 border-green-400 text-green-700': alert_type === 'success'
      }"
      role="alert"
      v-if="display_alert"
    >
      <span class="block sm:inline font-semibold">{{ alert_message }}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6"
          :class="{
            'text-red-500': alert_type === 'error',
            'text-green-500': alert_type === 'success'
          }"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          @click="closeAlert"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
    <div class="w-full flex flex-wrap mx-auto px-2 pt-8 lg:py-16 mt-16 flex-grow justify-center">
      <AddAlert @show-alert="showAlert" />
    </div>
  </div>
</template>

<script>
import AddAlert from "../components/AddAlert.vue";

export default {
  name: "Home",
  components: {
    AddAlert
  },
  data() {
    return {
      display_alert: false,
      alert_message: null,
      alert_type: null
    };
  },
  methods: {
    showAlert(alert) {
      this.alert_type = alert.type;
      this.alert_message = alert.message;
      this.display_alert = true;
    },
    closeAlert() {
      this.display_alert = false;
    }
  }
};
</script>