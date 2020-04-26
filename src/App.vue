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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Roboto;

  input {
    background: $primary-input-color;
  }
  button {
    background: $primary-button-color;
  }
}
</style>
