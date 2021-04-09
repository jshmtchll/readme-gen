// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function promptUser() {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?'
        },
        {
            type: "input",
            name: 'description',
            message: 'Enter a description of this project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Any installation instructions?'
        },
        {
            type: 'input',
            name: 'projectUse',
            message: 'What is the use of this project?'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How do you contribute to this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions if there are any.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Does this project have a license?',
            choices: [
                '[MIT License]',
                '[Mozilla Public License 2.0]',
                '[Apache 2.0 License]',
                '[Creative Commons]',
                '[None]'
            ]
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },      
    ]);
    
}


promptUser()
    .then(answers => generateMarkdown(answers))
    .then(readme => 
        {fs.writeFile("README.MD", readme, err => {
            if (err) {
                console.log(err);
                return;
            }
        })
    })
