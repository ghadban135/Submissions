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
  } else if (text === "help\n") {
    help();
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

function list() {
  let i = 0;
  while (liss[i] != undefined) {
    console.log(`${1 + i} - ${liss[i]}`);
    i++;
  }
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
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Ahmad Ghadban");
