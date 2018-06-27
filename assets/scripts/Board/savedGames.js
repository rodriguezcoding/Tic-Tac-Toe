import listOfGames from "../listOfGames.js";
import loadGame from "./loadGameApi";

let gameList = () => {
  for (let index = 0; index < listOfGames.gameIds.length; index++) {
    $('#list-of-games').append("<li>" +
      `<a class="clickToStart" id="${listOfGames.gameIds[index]}" href="#">${listOfGames.gameIds[index]}</a>` + "</li>")
  }
  loadGame.loadGame();
}
export default gameList;