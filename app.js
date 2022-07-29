const Inquirer = require('Inquirer');
const Generator = require('./lib/Generator');

inquirer
.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is their email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?"
    },
    {
        type: "checkbox",
        name: "mainMenu",
        message: "What would you like to do next?",
        choices: [
            'Add an Engineer', 'Add an Intern', 'Finish Building My Team'
        ],
    },
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is their email?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is their GitHub username?"
    },
    {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "internId",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is their email?"
    },
    {
        type: "input",
        name: "internSchool",
        message: "Where are they going to school?"
    }
])
.then((answers) => {
    const {}

})

//main menu that pops off to the other role options
//switch function instead of a million ifs
//fswritefile to write it
//stylesheet! (bootstrap!)

new Generator().initializeGen();