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
        return axios.get(baseUri + '/getName?username='+username)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    getCard: (username) => {
        return axios.get(baseUri + '/getCard?username='+username)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    getPhoneNum: (username) => {
        return axios.get(baseUri + '/getPhoneNum?username='+username)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    getUsers: () => {
        return axios.get(baseUri + '/getUsers?username='+username)
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
    }

}
