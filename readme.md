# Cypress Automation

This repository contains sample code and instructions for working with Cypress using TypeScript.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)

## Installation

To get started, make sure you have Node.js and npm (Node Package Manager) installed on your machine. Then, follow these steps to install Cypress and set up your project:

1. Extract the ZIP files to your machine

2. Navigate to the project directory:

3. Install the dependencies:
    1. Cypress
    2. Typescript



## Running Tests

To run the Cypress tests, use the following command:

``` npm run cy:run --config baseUrl=https://demoqa.com/ ```

This command will execute all the Cypress tests in headless mode.

To open the Cypress Test Runner and run tests interactively, use the following command:

```npx cypress open --config baseUrl=https://demoqa.com/```

To run UI Tests for Tools QA Application, use the below command

``` npm run test:UIToolsQA```

To run API Tests for Demo QA, use the below command

``` npm run test:API```



