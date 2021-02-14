

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.name}
  //license badge here

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
    license link: 
  ## Contributing
    ${data.contributing}
  ## Tests
    ${data.test}
  ## Questions
    Feel free to email me at ${data.email} with any questions.
    
    More of my work can be viewed on [GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
