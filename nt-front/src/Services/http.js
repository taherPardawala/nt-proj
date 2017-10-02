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
    },
    getName: (username) => {
        return axios.get(baseUri + '/getName', { headers:{
            username:username
        } })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    getCard: (username) => {
        return axios.get(baseUri + '/getCard', { headers:{
            username:username
        } })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    getPhoneNum: (username) => {
        return axios.get(baseUri + '/getPhoneNum', { headers:{
            username:username
        } })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

}
