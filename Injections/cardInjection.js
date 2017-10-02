const axios = require('axios');

axios.get('http://localhost:3000/getCard?username[$ne]=')
.then(response => {
    console.log("Response Data:",response.data);
})
.catch(error => {
    console.log(error);
})