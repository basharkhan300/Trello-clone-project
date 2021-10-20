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
  return axios
    .get(
      `https://api.trello.com/1/boards/${id}/lists?&key=${API_KEY}&token=${API_TOKEN}`
    )
    .then((res) => res.data);
}

export function createList(name, idBoard) {
  return axios
    .post(
      `https://api.trello.com/1/boards/${idBoard}/lists?name=${name}&key=${API_KEY}&token=${API_TOKEN}`
    )
    .then((res) => res.data);
}

export function archiveList(listId){

  return axios
  .put(
    `https://api.trello.com/1/lists/${listId}/closed?key=${API_KEY}&token=${API_TOKEN}&value=true`

  )
  .then((res) => res.data)
  
}

export function getCards(cardId){

  return axios
  .get(
    `https://api.trello.com/1/lists/${cardId}/cards?&key=${API_KEY}&token=${API_TOKEN}`
    // `https://api.trello.com/1/lists/${cardId}/cards?key=${API_KEY}&token=${API_TOKEN}`
  )
  .then((res) => res.data)
  
}

export function createCards(idList, name){
  console.log("In card" + idList);
  return axios
  .post(
    `https://api.trello.com/1/cards?idList=${idList}&name=${name}&key=${API_KEY}&token=${API_TOKEN}`
  )
  .then((res) => res.data)
  
}

// export function deleteCard(idCard){

//   return axios
//   .delete(
//     `https://api.trello.com/1/cards/${idCard}&key=${API_KEY}&token=${API_TOKEN}`
//   )
  
// }

export function getOneCard(cardId){
console.log("cardid in apijsx is "+ cardId );
  return axios
  .get(
    `https://api.trello.com/1/cards/${cardId}?&key=${API_KEY}&token=${API_TOKEN}`
  )
  .then((res) => res.data)
  
}