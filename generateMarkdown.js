// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data.License == "MIT") {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    
    } else if (data.License == "Mozilla") {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    } else if (data.License == "ISC") {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

    } else if (data.License == "Apache License 2.0") {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    } else  {
        return ""
    
    };

    }
    
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if (data.License == "MIT") {
        return 'https://choosealicense.com/licenses/mit/';
    
    } else if (data.License == "Mozilla") {
        return 'https://choosealicense.com/licenses/mpl-2.0/';

    } else if (data.License == "ISC") {
        return 'https://opensource.org/licenses/ISC';

    } else if (data.License == "Apache License 2.0") {
        return 'https://choosealicense.com/licenses/apache-2.0/';

    } else  {
        return ""
    
    };

    }




// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
`# ${data.title} ${renderLicenseBadge(data)} 

## Description
${data.Description}

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Technology](#Technology) 
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License

This application is covered under a ${data.License} license. 
To learn more about this license, please visit the following site: [${renderLicenseLink(data)}](${renderLicenseLink(data)})

## Technology

This application was made using the following technologies:

- ${data.Technology[0]}
- ${data.Technology[1]}
- ${data.Technology[2]}
- ${data.Technology[3]}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
Additional information for this application can be found on my [github](https://www.github.com/${data.Questions1}?tab=repositories/).

For additonal questions you can contact me by email at ${data.Questions2} by clicking [here](mailto:${data.Questions2})
`;



module.exports = generateMarkdown;
