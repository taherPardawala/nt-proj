const axios = require('axios');

axios.post('http://localhost:3000/login',{
    username:{"$gt":""},
    password:{"$gt":""}
})
.then(response => {
    console.log("Response Data:",response.data);
})
.catch(error => {
    console.log(error);
})

/*
localStorage.setItem('vuex','{"user":{"username":"taher","accountType":1}}')
localStorage.setItem('vuex','{"user":{ "username": "deepak", "accountType": 10 }}')
 */