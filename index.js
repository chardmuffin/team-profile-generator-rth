const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

//global var to hold the entire team data
var teamData = [];

//adds Manager to teamData and returns teamData
const promptTeamManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("\nPlease enter the team manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the team manager's employee ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("\nPlease enter an employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the team manager's email address",
        validate: emailInput => {
            if (emailInput.includes("@") && emailInput.includes(".")) {
                return true;
            } else {
                console.log("\nPlease enter a valid email address!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team manager's office number",
        validate: officeNumberInput => {
            if (!isNaN(officeNumberInput) && officeNumberInput !== "") {
                return true;
            } else {
                console.log("\nPlease enter a valid office number!")
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addOrFinish',
        message: 'Would you like to add an engineer or an intern, or finish building the team?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
    }
    ])
    .then(thisMemberData => {
        teamData.push(new Manager(thisMemberData.name, thisMemberData.id, thisMemberData.email, thisMemberData.officeNumber));
        switch (thisMemberData.addOrFinish) {
            case "Add Engineer":
                return promptEngineer();
            case "Add Intern":
                return promptIntern();
            default:
                return teamData;
        }
    });
};

// adds Engineer to teamData and returns teamData
const promptEngineer = () => {
    console.log(`
=================
Add an Engineer to the Team
=================
`);

return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("\nPlease enter the engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("\nPlease enter an employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address",
        validate: emailInput => {
            if (emailInput.includes("@") && emailInput.includes(".")) {
                return true;
            } else {
                console.log("\nPlease enter a valid email address!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("\nPlease enter a GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addOrFinish',
        message: 'Would you like to add an engineer or an intern, or finish building the team?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
    }
    ])
    .then(thisMemberData => {
        teamData.push(new Engineer(thisMemberData.name, thisMemberData.id, thisMemberData.email, thisMemberData.github));
        switch (thisMemberData.addOrFinish) {
            case "Add Engineer":
                return promptEngineer();
            case "Add Intern":
                return promptIntern();
            default:
                return teamData;
        }
    });
};

// adds an Intern to teamData, returns teamData
const promptIntern = () => {
    console.log(`
=================
Add an Intern to the Team
=================
`);

return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("\nPlease enter the intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("\nPlease enter an employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email address",
        validate: emailInput => {
            if (emailInput.includes("@") && emailInput.includes(".")) {
                return true;
            } else {
                console.log("\nPlease enter a valid email address!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the name of the intern's school",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("\nPlease enter the name of the intern's school!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addOrFinish',
        message: 'Would you like to add an engineer or an intern, or finish building the team?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
    }
    ])
    .then(thisMemberData => {
        teamData.push(new Intern(thisMemberData.name, thisMemberData.id, thisMemberData.email, thisMemberData.school));
        switch (thisMemberData.addOrFinish) {
            case "Add Engineer":
                return promptEngineer();
            case "Add Intern":
                return promptIntern();
            default:
                return teamData;
        }
    });
};

promptTeamManager()
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });