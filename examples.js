"use strict";

import chalk from "chalk";

console.log(chalk.blue("Hello world!"));

import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hello World!!");
  console.log(text);
}

doStuff();

figlet.text(
  "Boo!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  },
);

import boxen from 'boxen';

console.log(boxen('unicorn', {padding: 1}));
/*
┌─────────────┐
│             │
│   unicorn   │
│             │
└─────────────┘
*/

console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));
/*

   ╔═════════════╗
   ║             ║
   ║   unicorn   ║
   ║             ║
   ╚═════════════╝

*/

console.log(boxen('unicorns love rainbows', {title: 'magical', titleAlignment: 'center'}));
/*
┌────── magical ───────┐
│unicorns love rainbows│
└──────────────────────┘
*/