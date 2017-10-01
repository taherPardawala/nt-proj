import axios from 'axios';

const baseUri = 'http://localhost:3000';

export default {
    login: (username,password) => {
        return axios.post(baseUri + '/login', { username: username,password:password })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    register: (username,password,name,cardNum,phoneNum,cvv) => {
        return axios.post(baseUri + '/registerUser', { username:username,password:password,name:name,cardNum:cardNum,phoneNum:phoneNum,cvv:cvv })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

}
