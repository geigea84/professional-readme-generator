// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  //license badge here

  ## Description
  //description info here

  ## Table of Contents

  * Installation

  * Usage

  * Contributing

  * Tests

  * Questions
`;
}

module.exports = generateMarkdown;
