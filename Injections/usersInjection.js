const axios = require('axios');

axios.get('http://localhost:3000/getUsers?username=taher&user[$gt]=')
.then(response => {
    console.log("Response Data:",response.data);
})
.catch(error => {
    console.log(error);
})