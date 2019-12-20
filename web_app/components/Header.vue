<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 px-6 py-4">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/"><span class="font-semibold text-xl tracking-tight">Amazon Price Tracker</span></router-link>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
a.router-link-active {
  color: white;
}
</style>
