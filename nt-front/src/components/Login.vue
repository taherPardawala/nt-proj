<template>
  <md-layout md-column>
    <md-layout md-align="center">
      <div class="login">
        <b> Login </b>
        <form validate @submit.stop.prevent="attemptLogin">
          <md-input-container md-inline>
            <label>Username</label>
            <md-input required v-model="username"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input required v-model="password" type="password"></md-input>
          </md-input-container>
          <md-button type="submit" class="md-raised md-primary">Login</md-button>
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
        password: ''
      }
    },
    methods: {
      attemptLogin: function() {
        let self = this;
        http.login(self.username, self.password).then(success => {
          if (success.ok) {
            if (success.result[0].accountType === 10) {
              this.$store.commit('user',{username:success.result[0].username, accountType:success.result[0].accountType});
              router.replace('/home');
            } else {
              this.$store.commit('user',{username:success.result[0].username, accountType:success.result[0].accountType});
              router.replace('/adminhome')
            }
          } else {
            alert('Invalid username or password');
          }
        });
      },
      init: function(){
        if(this.$store.getters.user !=null && this.$store.getters.user.hasOwnProperty('username')){
          if(this.$store.getters.user.accountType == 10)
            router.replace('/home');
          else
            router.replace('/adminhome')
        }
      }
    },
    created() {
      this.init();
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
