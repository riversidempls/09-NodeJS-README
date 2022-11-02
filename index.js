// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'genDesc',
        message: "Provide a general description of the project:"
    },
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation to complete this project?",
    },
    {
        type: 'input',
        name: 'problem',
        message: "What problem does it solve?",
    },
    {
        type: 'input',
        name: 'learn',
        message: "What did you learn?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'gitUser',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'install',
        message: "Provide some installation instructions for users:",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter usage instructions:",
    },
    {
        type: 'input',
        name: 'contrib',
        message: "Provide some contribution instructions:",
    },
    {
        type: 'input',
        name: 'testing',
        message: "Provide some testing instructions:",
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "Which license does this project operate under? (check one)",
        choices: [
            {
                name: 'Apache license 2.0',
            },
            {
                name: 'Creative Commons license family',
            },
            {
                name: 'Do What The F*ck You Want To Public License',
            },
            {
                name: 'MIT',
            },
            {
                name: 'GNU General Public License v3.0',
            },
            {
                name: 'PostgreSQL License',
            },
            {
                name: 'none',
            },
        ],
        validate(answer) {
            if (answer.length < 1) {
                return 'You must select a license, or choose "none".';
            }
            return true;
        },
    },
    {
        type: 'checkbox',
        name: 'techTools',
        message: "Which, if any, of these technologies does your project utilize?",
        choices: [
            {
                name: 'HTML',
            },
            {
                name: 'CSS',
            },
            {
                name: 'Javascript',
            },
            {
                name: 'Node.JS',
            },
            {
                name: 'Python',
            },
            {
                name: 'PHP',
            },
            {
                name: 'none',
            },
        ],
        validate(answer) {
            if (answer.length < 1) {
                return 'You must select at least one technology, or choose "none".';
            }
            return true;
        },
    }


];

inquirer.prompt(questions).then((answers) => {

    console.log(JSON.stringify(answers, null, '  '));

    // TODO: Create a function to write README file
    //const title = (answers.title);
    const motivation = (answers.motivation);

    fs.writeFile('README.md',

        // 'Hello Content', 

        `## Title ${(answers.title)}    

## Description - ${answers.genDesc}
    
- Motivation: ${answers.motivation}
- Problem solved: ${answers.problem} 
- Lessons learned: ${answers.learn}
    
## Table of Contents    
   
- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Screenshot](#screenshot)
    
## Installation    

- Steps required to install project:
${answers.install}
    
## Usage

- Here are usage instructions:
    ${answers.usage}
    
## Screenshot

![screenshot of app](/assets/images/screenshot.png)
            
    
## Credits / Contact Info 

- email me: <${answers.email}>
- Find me on GitHub at <https://github.com/${answers.gitUser}>

    
    
## License Info

${answers.license}

## Badges 🏆

${answers.techTools}   
    
## How to Contribute
    
If you'd like to become a contributor, here's how you can help:

- ${answers.contrib}
    
## Tests
  
- How to run tests of the application:
${answers.testing}    
`,


        function (err) {
            if (err) throw err;
            console.log('Saved!');


        });
})



// // TODO: Create a function to write README file
// fs.writeFile(README.md, 'Hello Content', function (err) {
//     if (err) throw err;
//     console.log('Saved!');



// });

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt([questions])
//         .then((answers) => {
//             console.log(JSON.stringify(answers, null, ' '));
//         });
// }

// // Function call to initialize app
// init()