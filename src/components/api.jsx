import axios from "axios";

const API_KEY = process.env.REACT_APP_AUTH_KEY;
const API_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
// console.log(API_KEY)

export function getBoards() {
  return axios
    .get(
      `https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${API_TOKEN}`
    )
    .then((res) => res.data);
}

export function createBoard(name) {
  return axios
    .post(
      `https://api.trello.com/1/boards/?name=${name}&key=${API_KEY}&token=${API_TOKEN}`
    )
    .then((res) => res.data);
}

export function getLists(id) {
  console.log("idd"+id);
  return axios
    .get(
      `https://api.trello.com/1/boards/${id}/lists?&key=${API_KEY}&token=${API_TOKEN}`
    )
    .then((res) => res.data);
}

export function createList(name, idBoard) {
  console.log(idBoard);
  console.log(name);
  return axios
    .post(
      `https://api.trello.com/1/lists?name=${name}&idBoard=${idBoard}&key=${API_KEY}&token=${API_TOKEN}`
    )
    .then((res) => res.data);
}
