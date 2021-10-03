<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Sales from './components/Sales.vue'
import MessageForm from './components/MessageForm.vue'
export default {
  name: 'App',
  components: {
    // Sales,
    MessageForm
  }
}
</script>

<style>
</style>
