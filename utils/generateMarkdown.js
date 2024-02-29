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
function generateMarkdown(data) {

  let {title, description, instalation, usage, username, contributors, license} = data;

  return `# ${title}

  ## ${title}

  ## Desctiption

  ${description}

  ## Instalation

  ${instalation}

  ## Usage

  ${usage}

  ## Github Repository

  https://www.github.io/${username}

  ## Contributers

  ${contributors}

  ## License

  ${license}

`;
}

module.exports = generateMarkdown;
