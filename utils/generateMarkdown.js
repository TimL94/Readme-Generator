function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'Boost Software license 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      
    case 'Eclipse Public License':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';

    default:
      return '';
  }
}

function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    
    case 'GNU General Public License v3.0':
      return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';

    case 'Boost Software license 1.0':
      return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
      
    case 'Creative Commons Zero v1.0 Universal':
      return '[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)';
      
    case 'Eclipse Public License':
      return '[Eclipse Public License](https://opensource.org/licenses/EPL-1.0)';
    
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  if(license) {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license`
  }
}

function generateMarkdown(data) {

  let {title, description, instalation, usage, username, contributors, license} = data;

  const licenseSection = renderLicenseSection(license);
  const licenseBadge = renderLicenseBadge(license);

  return `# ${title}

  ${licenseBadge}

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
