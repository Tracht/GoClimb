# GoClimb!

### Tech Stack
* [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) for instant project prototyping. 
  * This project was set up using ```vue create hello-world```. We selected manual configuration options, which included:
  * [Babel](https://babeljs.io/) as our JavaScript compiler
  * [ES Lint](https://eslint.org/) (AirBnB style) for linting *currently disabled*
  * [Vue Router](https://router.vuejs.org/) for routing
  * [VueX](https://vuex.vuejs.org/) for state management
  * [Progressive Web App](https://cli.vuejs.org/core-plugins/pwa.html) plugin
  * [Cypress](https://www.cypress.io/) for end-to-end testing
* Separate additions
  * [Vue Loader](https://vue-loader.vuejs.org/) to enable hot reloading (among other things)
  * [Element UI](https://element.eleme.io/#/en-US), our UI components library. This is installed this globally.
* We recommend using Vetur, which is Vue tooling for VS Code. 

### Preview

**Homepage (mobile)**

![Screenshot 2021-03-03 at 17 54 22](https://user-images.githubusercontent.com/28805811/109849805-b4a37480-7c49-11eb-9e3c-9598069d70d8.png)

**Homepage (desktop)**

![Screenshot 2021-03-03 at 17 54 39](https://user-images.githubusercontent.com/28805811/109849833-bd944600-7c49-11eb-9ecc-05b2d3d6199b.png)

**Login (desktop)**

![Screenshot 2021-03-03 at 17 54 48](https://user-images.githubusercontent.com/28805811/109849889-cd138f00-7c49-11eb-8f50-feb2bd9ba8ab.png)

**Dashboard (desktop)**

![Screenshot 2021-03-03 at 17 55 03](https://user-images.githubusercontent.com/28805811/109849923-d866ba80-7c49-11eb-9c6a-a15aab7b6d5c.png)

![Screenshot 2021-03-03 at 17 55 15](https://user-images.githubusercontent.com/28805811/109849938-dc92d800-7c49-11eb-86b0-7cc52d1f60d1.png)

### To get the project running
In dev mode
* ```yarn install```
* ``` yarn serve``` - compiles and hot-reloads for development

For production
* ```yarn build``` - compiles and minifies for production

### Other scripts
* To run Cypress end-to-end tests: ```yarn test:e2e```
* Linting: ```yarn lint``` *currently disabled*

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
