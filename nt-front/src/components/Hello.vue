<template>
  <md-layout md-column>
    <md-layout md-align="center">
      <div class="login">
        <md-button class="md-raised md-warn" @click="routeLogin">Login</md-button>
        <md-button class="md-raised md-primary" @click="routeRegister">Register</md-button>
      </div>
  
    </md-layout>
  </md-layout>
</template>

<script>
  import http from '@/Services/http';
  import router from '@/router';
  export default {
    name: 'login',
    data() {
      return {
  
      }
    },
    methods: {
      routeLogin: function() {
        router.replace('/login')
      },
      routeRegister: function() {
        router.replace('/register')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    margin-top: 80px;
    margin: 20px;
    width: 40%;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .logo {
    align: 'center';
    height: 250px;
  }
  
  .accessTips {
    margin: 5px;
    margin-left: 25px;
  }
</style>
