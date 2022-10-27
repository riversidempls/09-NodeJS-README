// TODO: Include packages needed for this application
inquirer = require('./node_modules/inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What is your email address?",
    "What is your GitHub username?",
    "Type a project description:",
    "Provide some installation instructions for users:",
    "Enter usage information:",
    "Provide some contribution instructions:",
    "Provide some testing instructions:",
    "Which license does this project operate under? (choose one)",
    "Which, if any, of these technologies does your project utilize?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
