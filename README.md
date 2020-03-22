# Cypressio POC as an example

In this repository we can find a quick example/POC (proof of concept) of how I used Cypressio for a quick example for and End-to-End testing. With that I can start a new project from scratch if needed at some point in my daily work. 

Also the idea with this POC is to practice and to know how Cypress works with automation and open my eyes to new automation frameworks, that way I can have a more clear understanding about a new automation tools and have a wide vision if at some point I have to compare different automation frameworks to give a proposal for a new automation solution for a client or for me.

## Application under test
This section contians the basic configurations to have a valid testing application that will be used to create and run test cases as needed. This application is a sandbox application. In that way I am not depending of a third party web application that can change and make my tests fail.

In this repository, there is a "docker" folder, in this docker folder there is a docker-compose file. With that the idea is to run a Wordpress woocommerse application and use this application as our application under test.

These requirements need to me met (donwload and install from the official pages):

1- Install docker.

2- Install docker-compose.

3- Install Node and npm.

4- Visual studio as IDE (Optional)

To start the web application follow these steps:
```bash 
    cd docker
    docker-compose up -d
```

Once you run that, you will have an application running, and it is running in this url: http://localhost:8082/ and http://localhost:8082/wp-admin/

## Development of new test cases.
Follow these steps:

1- Clone the repository
    
```bash
git clone https://github.com/ovalerio280788/cypressio_poc.git
cd cypressio_poc # to move into the repository folder.
npm install  # to install the dependencies that are located in the package.json file.
```

2- Start Cypress UI. 
```bash 
npx cypress open
```

3- Open the IDE and open this repository.  
- `cypress/integration` folder: This folder contains all specs, or the implementation of the test cases.
- `cypress/page-objects` folder: This folder contains all the page objects to be used in the spec files (test cases) to reuse the page locators.
- `cypress/support/commands` folder: This file contains our custom commands, in this case I have a login command to be used for all test cases that need to go through the login page before executing something else.
- `cypress.json` file: This file contains the configurations for Cypress, I mean, here I can override the default configuration for Cypress. For example, if we want to fun tests on Firefox or other browser further that Chrome. You can override all variables in this Cypress documentation: https://docs.cypress.io/guides/references/configuration.html#Options 
- `package.json` file: This file contains the dependencies for our project, in this case I have [Cypress](https://www.cypress.io/) and [cypress-xpath](https://github.com/cypress-io/cypress-xpath).
Also in this file we have a "scripts" section where I have several options added as a kind of aliases to run tests with different configurations, you can see some examples later on this readme file.

## Run the test cases.
Follow these steps/examples.

1- Run all test cases with default configurations:
```bash
npm test
```
2- Run all tests in Firefox
```bash
npm run test-firefox  # this is an alias that will run "cypress run -b firefox"
```
3- Run all tests in Chrome
```bash
npm run test-chrome  # this is an alias that will run "cypress run -b chrome"
```

Of course the tests can also be executed without this script configurations as the follow examples, we can use and combine whatever we need based on the cypress flags:
```bash 
./node_modules/.bin/cypress run 
./node_modules/.bin/cypress run -b chrome # run test cases in chrome not headless
./node_modules/.bin/cypress run -b firefox # run test cases in firefox not headless
./node_modules/.bin/cypress run -b chrome --headless # run test cases in chrome headless
```


That's it for this POC.