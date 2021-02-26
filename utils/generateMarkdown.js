//check to see if a value exists in the license input
function checkLicense(license) {
    if (license == "None") {
        return 'There is no license associated with this application.';
    }
    else {
        return `This application is covered under the ${license} license.`
    }
}

//if license exists, add license badge to page
function addBadge(license) {
    if (license == "None") {
        return '';
    }
    else {
        return `![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ${addBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
    
  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)
    
  * [Tests](#tests)

  * [Questions](#questions)
    
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${checkLicense(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions

  Feel free to reach out to me at ${data.email} with any questions.

  More of my work can be seen here [github/${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
