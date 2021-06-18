// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
    `# ${data.title}    
## Description
${data.Description}
## Table of contents
[${data.Contents[0]}](#Description)
[${data.Contents[1]}](#Installation)
[${data.Contents[2]}](#Usage)
[${data.Contents[3]}](#license)
[${data.Contents[4]}](#Contributing)
[${data.Contents[5]}](#Tests)
[${data.Contents[6]}](#Questions)
`;


module.exports = generateMarkdown;
