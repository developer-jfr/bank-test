import axios from 'axios';


export const instance = axios.create({
    baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
    headers : {
        "Authorization": 'JWT ' + sessionStorage.getItem('token')
    }
    
});



export const usersAPI = {
    signUp(username, email, password) {
        return instance.post(`/users/create/`, {username, email, password})
    },
    login(username, password) {
        return instance.post(`/users/login/`, {username, password})
    }
};


export const bankAPI = {
    getData()  {
        return axios.get('http://localhost:3004/bank')
    },
    create(id, amount, bankName)  {
        return axios.post('http://localhost:3004/bank', {id, amount, bankName})
    },
    delete (id)  {
        return axios.delete(`http://localhost:3004/bank/${id}`)
    }
}
