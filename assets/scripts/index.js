"use strict";

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
import logIn from "./Auth/log-in.js";
import ticTacToe from "./Board/board";
$(() => {
  logIn.logIn();
  ticTacToe();
});