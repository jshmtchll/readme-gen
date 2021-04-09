// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { projectName, description, installation, projectUse, contributions, test, license, githubUsername, email } = answers
  return `
# ${projectName} 

#### Table of Contents
1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution Guide](#contribution-guide)
5. [License](#license)
6. [Questions](#questions)

## Project Description
* ${description}

## Installation
* ${installation}

## Usage Information
* ${projectUse}

## Contributions
* ${contributions}

## Test Instructions
* ${test}

## License
* Licensed under ${license} 

## Questions
* Follow me at [${githubUsername}](http://github.com/${githubUsername})

*For questions about this project please contact me at ${email}.

`;
}

module.exports = generateMarkdown;
