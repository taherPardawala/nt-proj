<template>
  <md-layout md-column>
    <md-layout md-align="center">
      <div class="adminhome">
        <h1> User List </h1>
        <md-table v-once>
          <md-table-header>
            <md-table-row>
              <md-table-head>Dessert (100g serving)</md-table-head>
              <md-table-head md-numeric>Calories (g)</md-table-head>
              <md-table-head md-numeric>Fat (g)</md-table-head>
              <md-table-head md-numeric>Carbs (g)</md-table-head>
              <md-table-head md-numeric>Protein (g)</md-table-head>
            </md-table-row>
          </md-table-header>
  
          <md-table-body>
            <md-table-row v-for="(row, index) in 5" :key="index">
              <md-table-cell>Dessert Name</md-table-cell>
              <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
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
        username: '',
        password: ''
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
      logout: function(){
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
  
</style>
