// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const generate = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
type: 'input',
name: 'title',
 message:'what is the title?'
 },

{
type:'input',
 name:'github', 
 message:'what is your github username?'
}, 
{
type:'input',
name:'ProjectDescription',
message:'what is your project about? '
}, 
{
    type:'input',
    name:'installation',
    message:'what is required to install this project?'
}, 
{
    type:'input',
    name:'usage',
    message:'what would you use this project for?'
},
{
    type:'input',
    name:'contributing',
    message:'who contributed to this project?'
},
{
    type:'input',
    name:'email',
    message:'what is your email?'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((respones) => {
        writeToFile('ReadMe.md', generate({...respones}))
    })
}

// Function call to initialize app
init();

