# Devo React App Template

Empty project to start developing a React Devo App from scratch.

## Devo Apps

A Devo App is a front-end web browser extension capable of being injected and hosted into the Devo web platform as well as communicating with it and with the collection of HTTP services enabled for Devo customers.

## Before starting

As a main requirement for the development of applications in Devo it is necessary to have access to the platform and a domain.

Once you have access, to prepare the development environment you must install the google chrome extension "Devo Runner", you will find it [here](https://chrome.google.com/webstore/detail/devo-runner/apjjdfhcegcemhdhaeadkddbjhgfplmo).

## How to use?

First of all you need to clone this repository.

````npm
git clone https://github.com/DevoInc/React-App-Template.git
````

Then install NPM dependencies.

````npm
npm install
````

Then you are being able to run any of this NPM commands.

````npm
npm run dev
npm run pro
````

Using any of these commands the react project will be built in a way that is compatible with the Devo platform.

If you have previously installed the Devo Runner extension in google chrome you can select the final bundle of this build (located in the /dist/index.html) and start debugging this react application in the browser.

## Standalone mode

It is possible to build this application to work in standalone mode by:

````npm
npm run standalone
````

In this way, the different dependencies of the application with the Devo web core and API endpoints could be mocked. Look at [src/standaloneDependencies.ts]() to modify the standalone behaviors.

## Publishing and hosting

The publishing and hosting process for these applications will be carried out by Devo employees. Please contact [Devo support](https://www.devo.com/legal-hub/support-services/) for this task.