<template>
  <div>
    <h1 class="text-sm">Send basic email</h1>
    <p class="pt-2 pb-4">Send text email using sendgrid.</p>
    <div class="flex justify-center">
      <AddAlert/>
    </div>
  </div>
</template>

<script>
import AddAlert from "../components/AddAlert.vue";

export default {
  name: "Home",
  components: {
    AddAlert
  }
};
</script>