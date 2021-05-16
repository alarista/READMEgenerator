const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generatorMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        message: 'What the app is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What the app is for?',
        name: 'functionality',
    },
    {
        type: 'input',
        message: 'How to use the app?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How to install it?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How to report issues?',
        name: 'issues',
    },
    {
        type: 'input',
        message: 'How to make contributions?',
        name: 'contr',
    },
    {
        type: 'input',
        message: 'License type',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'githubuser',
    }
]

function writeFile(fileName, data){

    fs.writeFile(fileName, data, function(err){
        console.log(fileName);
        console.log(data);
        if (err){
            return console.log(err);
        } else {
            console.log('Done')
        }
    })

}

function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeFile("newREADME.md", generatorMarkdown(data));
        console.log(data);
    })

};

init();

