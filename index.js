const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

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
            if (!isNaN(officeNumberInput)) {
                return true;
            } else {
                console.log("\nPlease enter a valid office number!")
                return false;
            }
        }
    }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
=================
Add a New Team Member
=================
`);

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

promptTeamManager()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
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