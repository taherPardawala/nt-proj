<template>
  <md-layout md-column>
    <md-layout md-align="center">
      <div class="home">
        <h1> User Details </h1>
        <md-list>
          <md-list-item>Name: {{name}}</md-list-item>
          <md-list-item>Username: {{username}}</md-list-item>
          <md-divider></md-divider>
          <md-list-item>Card Number: {{cardNum}}</md-list-item>
          <md-list-item>CVV: {{cvv}}</md-list-item>
          <md-divider></md-divider>
          <md-list-item>Phone Number: {{phoneNum}}</md-list-item>
        </md-list>
        <md-button class="md-raised md-warn" @click="logout">Logout</md-button>
      </div>
    </md-layout>
  </md-layout>
</template>

<script>
  import http from '@/Services/http';
  import router from '@/router';
  
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Foodpal panel',
        username: '',
        name:'',
        cvv:'',
        cardNum:'',
        phoneNum:'',
      }
    },
    methods: {
      init: async function() {
        console.log("Checking here", this.$store.getters.user.username)
        if (this.$store.getters.user.hasOwnProperty('username')) {
          let result = await http.getName(this.$store.getters.user.username);
          let card = await http.getCard(this.$store.getters.user.username);
          let pNumber = await http.getPhoneNum(this.$store.getters.user.username);
          if(result.ok) {
            this.username = result.result[0].username
            this.name = result.result[0].name
          }
          if(card.ok) {
            this.cvv = card.result[0].cvv
            this.cardNum = card.result[0].cardNum
          }
          if(pNumber.ok) {
            this.phoneNum = pNumber.result[0].phoneNum
          }
        } else {
          alert("Your session has been expired");
          router.replace('/login');
        }
      },
      logout: function() {
        this.$store.dispatch('clearAuth');
        router.replace('/login');
      }
    },
    created() {
      this.init();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-list{
    width:500px;
  }
</style>

/*
Storage {vuex: "{"user":{"username":"qweqwe"}", length: 1}
vuex
:
"{"user":{"username":"qweqwe"}"
*/