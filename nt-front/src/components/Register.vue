<template>
  <md-layout md-column>
    <md-layout md-align="center">
      <div class="login">
        <b> Register </b>
        <form validate @submit.stop.prevent="attemptRegister">
          <md-input-container md-inline>
            <label>Username</label>
            <md-input required v-model="username"></md-input>
          </md-input-container>
          <md-input-container md-inline>
            <label>Name</label>
            <md-input required v-model="name"></md-input>
          </md-input-container>
          <md-input-container md-inline>
            <label>Phone Number</label>
            <md-input required v-model="phoneNum"></md-input>
          </md-input-container>
          <md-input-container md-inline>
            <label>Card Number</label>
            <md-input required v-model="cardNum"></md-input>
          </md-input-container>
          <md-input-container md-inline>
            <label>CVV</label>
            <md-input required v-model="cvv"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input required v-model="password" type="password"></md-input>
          </md-input-container>
          <md-button type="submit" class="md-raised md-primary">Register</md-button>
        </form>
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
        msg: 'Welcome to Foodpal panel',
        username: '',
        name: '',
        cardNum: '',
        phoneNum: '',
        cvv: '',
        password: ''
      }
    },
    methods: {
      attemptRegister: function() {
        let self = this;
        http.register(self.username, self.password, self.name, self.cardNum, self.phoneNum, self.cvv).then(success => {
          if (success.ok) {
            alert('User registered');
            router.replace('/home');
          } else {
            alert('User NOT registered');
            router.replace('/adminhome');
          }
        });
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
  
  .accessTips {
    margin: 5px;
    margin-left: 25px;
  }
</style>
