<template>
  <div id="app bg-gray-100">
    <Header />
    <div class="p-6">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
