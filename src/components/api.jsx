import axios from 'axios'

const API_KEY= process.env.REACT_APP_AUTH_KEY;
const API_TOKEN= process.env.REACT_APP_AUTH_TOKEN;
// console.log(API_KEY)

export function getBoards(){
    return axios
        .get(`https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${API_TOKEN}`)
        .then(res=>res.data)
}