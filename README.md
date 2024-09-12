# Aroi - Thai Cuisine

This is a website for a restaurant focusing on thai cuisine. It is using Vue 3 with Vite and PrimeVue as UI-Library. I was using the Options API here, as I like the easier syntax here and is preferred for rather small sites like this one. Also PrimeVue was my very first contact with UI-Libraries in general, so learning, understanding and using them was a very good practice.

This project is currentliy specifically built to be hosted on [Netlify](https://www.netlify.com/), as it is using [Netlify Functions](https://www.netlify.com/platform/core/functions/) /Serverless Functions to send E-Mails and have an simple API-Endpoint for the restaurant menu and menu-items.

The menu which is rendered with an API-Endpoint provided from [Netlify Functions](https://www.netlify.com/platform/core/functions/) can be edited in the `.netlify/functions/api.js` file. I am fully aware that the file is way too long this way, but it was fully experimential and I tried solving this without an local JSON-file.

## Prerequisites

To build/run this project locally, nvm, npm and Node v18+ are required.

- If not already installed, install nvm on your machine from [here](https://github.com/nvm-sh/nvm). You can check whether nvm is installed in your terminal with `nvm -v`.
- If it is not already the standard-version - install Node v18 with `nvm install 18`. You can check whether the right Node version is selected with `node -v`. If a different Node version is selected, use `nvm use 18`.
- Navigate to the project folder in your terminal and install project dependencies with `npm install`.

## Running the project locally

Run `npm run dev` for a dev server. Navigate to `http://localhost:5173/`. The app should automatically reload on any changes of the source files thanks to Vites HMR.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Hosting
This project is currently hosted on [Netlify](https://www.netlify.com/), which is ideal to use [Netlify Serverless Functions](https://www.netlify.com/platform/core/functions/) to send E-Mails via Sendgrid.

## Contact Form

The contact form is powered with [SendGrid](https://app.sendgrid.com/) which has good documentations and a very easy way to setup the project. All you need is to follow their instructions and implement their API-Key in your project/Netlify Environments. 
You can test it the menu-fetching and the contact-form locally by installing the [Netlify CLI](https://www.netlify.com/platform/core/cli/) and setup your SendGrid.

## 💻 Technologies

### Tech-Stack

- [Vue.js](https://vuejs.org/)
- [PrimeVue](https://primevue.org/)

### Dependencies

- [Vue-Datepicker](https://vue3datepicker.com/)
- [Sendgrid/Mail](https://sendgrid.com/en-us)
- [SCSS/SASS](https://sass-lang.com/)
