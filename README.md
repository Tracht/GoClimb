# hello-world

### Tech Stack
* [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) for instant project prototyping. 
  * This project was set up using ```vue create hello-world```. We selected manual configuration options, which included:
  * [Babel](https://babeljs.io/) as our JavaScript compiler
  * [ES Lint](https://eslint.org/) (AirBnB style) for linting
  * [Vue Router](https://router.vuejs.org/) for routing
  * [VueX](https://vuex.vuejs.org/) for state management
  * [Progressive Web App](https://cli.vuejs.org/core-plugins/pwa.html) plugin
  * [Cypress](https://www.cypress.io/) for end-to-end testing
* Separate additions
  * [Vue Loader](https://vue-loader.vuejs.org/) to enable hot reloading (among other things)
  * [Element UI](https://element.eleme.io/#/en-US), our UI components library. This is installed this globally.
* We recommend using Vetur, which is Vue tooling for VS Code. 

### To get the project running
In dev mode
* ```yarn install```
* ``` yarn serve``` - compiles and hot-reloads for development

For production
* ```yarn build``` - compiles and minifies for production

### Other scripts
* To run Cypress end-to-end tests: ```yarn test:e2e```
* Linting: ```yarn lint```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
