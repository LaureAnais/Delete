<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginForm from '@/components/loginForm.vue'

export default {
  name: 'Home',
  
  components: {
    loginForm,
  },
  
  data() {
    return {

    }
  },

  methods: {

  }

}
</script>
