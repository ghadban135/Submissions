/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");

  let data = JSON.stringify(liss);
  if (process.argv[2]) {
    fs.stat(process.argv[2], function(err) {
      if (!err) {
        fs.readFile(process.argv[2], (err, data) => {
          if (err) throw err;
          liss = JSON.parse(data);
        });
      } else if (err.code === "ENOENT") {
        fs.writeFile(process.argv[2], data, err => {
          if (err) throw err;
        });
        fs.readFile(process.argv[2], (err, data) => {
          if (err) throw err;
          liss = JSON.parse(data);
        });
      }
    });
  } else {
    fs.readFile("./database.json", (err, data) => {
      if (err) throw err;
      liss = JSON.parse(data);
    });
  }
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var namee = text.split(" ");
  /*  console.log(namee) */
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text === "hello\n") {
    hello();
  } else if (namee[0] === "hello") {
    hellos(namee[1]);
  } else if (text === "list\n") {
    list();
  } else if (namee[0] === "add") {
    add(text);
  } else if (text === "add\n") {
    console.log("error");
  } else if (text === "help\n") {
    help();
  } else if (namee[0] === "remove") {
    remove(namee[1]);
  } else if (text === "remove\n") {
    liss.pop();
    done.pop();
    list();
  } else if (text === "edit\n") {
    console.log("error");
  } else if (namee[0] === "edit") {
    edit(text);
  } else if (text === "check\n") {
    console.log("error");
  } else if (namee[0] === "check") {
    check(namee[1]);
  } else if (text === "uncheck\n") {
    console.log("error");
  } else if (namee[0] === "uncheck") {
    uncheck(namee[1]);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

let liss = ["read a book", "playing football", "eat sushi"];
let done = ["✓", "✓", " "];

function list() {
  let i = 0;
  while (liss[i] != undefined) {
    console.log(`${1 + i} - [${done[i]}] ${liss[i]}`);
    i++;
  }
}
function check(x) {
  done[x - 1] = "✓";
  list();
}
function uncheck(x) {
  done[x - 1] = " ";
  list();
}

function edit(x) {
  let q = x.split(" ");
  q.shift();
  let y = q[0];
  if (isNaN(y)) {
    let j = q.toString();
    j = j.replace(/\,/g, " ");
    j = j.replace("\n", "");
    liss.pop();
    liss.push(j);
    list();
  } else if (y <= liss.length && y > 0) {
    q.shift();
    let k = q.toString();
    k = k.replace(/\,/g, " ");
    k = k.replace("\n", "");
    liss.splice(y - 1, 1, k);
    list();
  } else console.log("number does not exist");
}

function remove(x) {
  if (x <= liss.length && x > 0) {
    liss.splice(x - 1, 1);
    done.splice(x - 1, 1);
    list();
  } else console.log("number does not exist");
}

function add(x) {
  let q = x.split(" ");
  q.shift();
  let j = q.toString();
  j = j.replace(/\,/g, " ");
  j = j.replace("\n", "");
  liss.push(j);
  done.push(" ");
  list();
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello() {
  console.log("hello!");
}

/**
 * Says hello x!
 * @param  {string} x the text received
 * @returns {void}
 */
function hellos(x) {
  res = x.replace("\n", "!");
  console.log(`hello ${res}`);
}

/**
 * This function list all the possible commands
 * This function is supposed to run when you type 'help'
 * @returns {void}
 */

function help() {
  console.log("type 'hello' to say hello");
  console.log("type 'exit' or 'quit' to stop the app");
  console.log("type 'hello name' to print'hello name !'");
  console.log("type 'list' to display the list");
  console.log("type 'add' to add tasks");
  console.log("type 'remove x' to remove 'x' tasks");
  console.log("type 'edit x' to edit 'x' tasks");
  console.log("type 'check x' to checking tasks 'x'");
  console.log("type 'uncheck' to uncheck 'x' tasks");
}

/**
 * Exits the application
 *
 * @returns {void}
 */

let fs = require("fs");
function quit() {
  let data = JSON.stringify(liss);
  if (process.argv[2]) {
    fs.writeFile(process.argv[2], data, err => {
      if (err) throw err;
      console.log("The file has been saved!");
      console.log("Quitting now, goodbye!");
      process.exit();
    });
  } else {
    fs.writeFile("./database.json", data, err => {
      if (err) throw err;
      console.log("The file has been saved!");
      console.log("Quitting now, goodbye!");
      process.exit();
    });
  }
}

// The following line starts the application
startApp("ahmad ghadban");

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
