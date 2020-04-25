<template>
  <div id="app">
    <SignUp/>
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto;
  input {
    background: $primary-input-color;
  }
  button {
    background: $primary-button-color;
  }
}
</style>
