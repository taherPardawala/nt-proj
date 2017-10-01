<template>
  <md-layout md-column>
    <md-layout md-align="center">
      <div class="login">
        <b> Admin Home </b>
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
      password: ''
    }
  },
  methods: {
    attemptLogin: function() {
      let self = this;
      http.login({
        username: self.username,
        password: self.password
      }).then(success => {
        if (success.ok) {
          if(success.accountType == 10){
            router.replace('/home');
          }else{
            router.replace('/adminhome')
          }    
        } else {
          alert('Invalid username or password');
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

.accessTips{
  margin: 5px;
  margin-left: 25px;
}
</style>
