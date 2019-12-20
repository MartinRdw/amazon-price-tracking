<template>
  <div>
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