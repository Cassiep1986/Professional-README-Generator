const questions = require('inquirer');
const fs = require('fs');

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
        choices: ["Description", "Usage", ]
      },
    ])

.then((data) => {
    const mdPageContent = generateMarkdown(data);
    fs.writeFile('index.html', mdPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created md.html!')
  );
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
