// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data.license == "MIT") {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    
    } else if (data.license == "Mozilla") {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    } else if (data.license == "ISC") {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

    } else if (data.license == "IBM") {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

    } else  {
        return ""
    
    };

    }
    


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
`# ${input.title} ${renderLicenseBadge(data)} 

## Description
${data.Description}

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [license](#license) 
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
This application can be found on my [github](https://www/github.com/${data.Questions1}?tab=repositories/).

For additonal question you can email me at ${data.Questions2}
`;



module.exports = generateMarkdown;
