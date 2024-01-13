# My Vite-powered Vue-Restaurant-Template

This template should help anyone have a quick Vue-restaurant-website. 

This project is currentliy specifically built to be hosted on [Netlify](https://www.netlify.com/), as it used [Netlify Functions](https://www.netlify.com/platform/core/functions/) to send E-Mails and have an simple API-Endpoint for the restaurant menu and menu-items.

The menu which is rendered with an API-Endpoint provided from [Netlify Functions](https://www.netlify.com/platform/core/functions/) can be edited in the `.netlify/functions/api.js` file. I am fully aware that the file is way too long this way, but it was fully experimential and I tried solving this without an local JSON-file.

The contact form is powered with [SendGrid](https://app.sendgrid.com/) which has good documentations and a very easy way to setup the project. All you need is to follow their instructions and implement their API-Key in your project/Netlify Environments. 
You can test it the menu-fetching and the contact-form locally by installing the [Netlify CLI](https://www.netlify.com/platform/core/cli/) and setup your SendGrid.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
