const axios = require('axios');

axios.get('http://localhost:3000/getName?username[$ne]=1&taher=some')
.then(response => {
    console.log("Response Data:",response.data);
})
.catch(error => {
    console.log(error);
})