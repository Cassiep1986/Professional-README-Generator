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
        type: 'checkbox',
        name: 'Contents',
        message: 'Check all applicable table of contents',
        choices: ['Description', 'Installation', 'Usage', 'license', 'Contributing', 'Tests', 'Questions']
      },
      // {
      //   type: 'input',
      //   name: 'Installation',
      //   message: 'Enter installation instructions for your project',
      // },
      // {
      //   type: 'input',
      //   name: 'Usage',
      //   message: 'Enter usage information for your project',
      // },
      // {
      // type: 'list',
      // name: 'license',
      // message: 'Select the appropriate license for your project',
      // },
      // {
      //   type: 'input',
      //   name: 'Contributing',
      //   message: 'Enter contribution guidelines for your project',
      // },
      // {
      //   type: 'input',
      //   name: 'Tests',
      //   message: 'Enter test instructions for your project',
      // },
      // {
      //   type: 'input',
      //   name: 'Questions1',
      //   message: 'Enter your github username',
      // },
      // {
      //   type: 'input',
      //   name: 'Questions2',
      //   message: 'Enter your email address',
      // },
      
    ])

.then((data) => {
    const mdPageContent = generateMarkdown(data);
    fs.writeFile('README.md', mdPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});
}


init();
