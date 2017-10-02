<template>
  <md-layout md-column>
    <md-layout md-align="center">
      <div class="adminhome">
        <h1> User List </h1>
        <md-input-container>
          <label>Enter Username</label>
          <md-input placeholder="enter username" v-model="username"></md-input>
        </md-input-container>
        <md-button class="md-raised md-warn" @click="getDetails">Get Details</md-button>
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>Name</md-table-head>
              <md-table-head md-numeric>Username</md-table-head>
              <md-table-head md-numeric>Phone Number</md-table-head>
              <md-table-head md-numeric>Card Number</md-table-head>
              <md-table-head md-numeric>Cvv</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="user in userList" :key="username">
              <md-table-head>{{user.name}}</md-table-head>
              <md-table-head>{{user.username}}</md-table-head>
              <md-table-head>{{user.phoneNum}}</md-table-head>
              <md-table-head>{{user.cardNum}}</md-table-head>
              <md-table-head>{{user.cvv}}</md-table-head>
            </md-table-row>
          </md-table-body>
        </md-table>
        <md-button class="md-raised md-warn" @click="logout">Logout</md-button>
      </div>
    </md-layout>
  </md-layout>
</template>

<script>
  import http from '@/Services/http';
  import router from '@/router';
  export default {
    name: 'adminhome',
    data() {
      return {
        username:'',
        userList: []
      }
    },
    methods: {
      init: function() {
        if (this.$store.getters.user !== null) {
          
        } else {
          alert("Your session has been expired");
          router.replace('/login');
        }
      },
      logout: function() {
        this.$store.dispatch('clearAuth');
        router.replace('/login');
      },
      getDetails: async function() {
        let result = await http.getUsers(this.$store.getters.user.username, this.username);
          if (result.ok) {
            console.log(result.result);
            this.userList = result.result;
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

</style>
