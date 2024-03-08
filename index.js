const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter project Title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter project description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter instalation notes: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter project usage details: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter Github Username: ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter Github Repository Name: ',
        name: 'repoName'
    },
    {
        type: 'input',
        message: 'Enter Contributers: ',
        name: 'contributors'
    },
    {
        type: 'list',
        message: 'Choose your projects license: ',
        name: 'license',
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU General Public License v3.0',
            'Boost Software license 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License'
        ]
    }
];

function writeToFile(fileName, data) {
    const filePath = '../';

    fs.writeFile('README.md', generateMarkdown(data), (err) => {
        if (err) {
            console.log('error wriiting file: ', err);
        }else {
            console.log('creating markdown file');
        }
    });
}

function init() {
    inquirer.prompt(questions)
    .then(data => {
        let {title} = data;
        writeToFile(title, data);
        
    });
}

init();
