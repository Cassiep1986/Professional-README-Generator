const generateMarkdown = require('./generateMarkdown.js');
const questions = require('inquirer');
const fs = require('fs');


function init() {
questions 
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter a description of your project',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation information for your project',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage information for your project (Note: animation and pictures will have to be added after README is complete)',
      },
      {
      type: 'list',
      name: 'License',
      message: 'Select the appropriate license for your project',
      choices: ["MIT", "Mozilla", "ISC", "IBM"],
      },
      {
        type: 'checkbox',
        name: 'Technology',
        message: 'Select the technologies used for your project',
        choices: ["HTML", "CSS", "Javascript", "Node.js"],
        },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contribution guidelines for your project',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Enter test instructions for your project',
      },
      {
        type: 'input',
        name: 'Questions1',
        message: 'Enter your github username',
      },
      {
        type: 'input',
        name: 'Questions2',
        message: 'Enter your email address',
      },
      
    ])

.then((data) => {
    const mdPageContent = generateMarkdown(data);
    fs.writeFile('Example-README.md', mdPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});
}


init();

