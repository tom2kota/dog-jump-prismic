# Prismic

Prismic is a CMS backend for your websites & apps - optimised for developer productivity with a visual builder to model page & post content. Api-based for technology freedom - use your favorite programming language & framework.

- [Quick start for developers](https://prismic.io/quickstart)
- [User guides for content teams](https://user-guides.prismic.io/)
- [Prismic documentation](https://prismic.io/docs)
- [Start a Prismic project from scratch with React.js](https://prismic.io/docs/reactjs/getting-started/getting-started-from-scratch)
- [Integrating Prismic with an existing Javascript project](https://prismic.io/docs/javascript/getting-started/integrating-with-an-existing-javascript-project)
- [Rendering the Rich Text / Title Field](https://prismic.io/docs/reactjs/rendering/rich-text)
- [All repos](https://prismic.io/dashboard/)
- [A website with content management in 5 steps](https://prismic.io/quickstart)

-----------------

#### Install the Prismic command line interface
prismic-cli@3.7.11

```
  npm install -g prismic-cli
```

#### Install the React.js starter project

```
  prismic new
```

###### log:

```
    Let's get to it!
    ? Name your prismic repository:  tom2kota
    This Repository already exists, please choose another name.
    ? Name your prismic repository:  tom2kota
    ? Local folder to initalize project:  tom2kota
    ? Technology for your project:  React
    ? Do you already have an account on https://prismic.io? Yes, login to my existing account
    ? Email:  tom2kota@gmail.com
    ? Password:  [hidden]
    Initialize local project
    Running npm install...
    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\chokidar\node_modules\fsevents):
    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
    npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
    
    Your project is ready, to proceed:
    
    Go to the project folder : cd tom2kota
    Start your project: npm start
    
```

#### Launching your local server

```
  npm start
```

#### [http://localhost:3000](http://localhost:3000/)

-----------------

- [API Browser](https://tom2kota.prismic.io/api)
- [API Browser](https://tom2kota.cdn.prismic.io/api/v2)

-----------------

## High five, you deserve it!

- A repository is where your website’s content will live => [prismic.io](https://prismic.io/dashboard) => All Repos
    * All our pricing plans are per repository. 
      A repository is an independent working space with its own content, 
      set of users, endpoint, and subscription. You can have as many repositories 
      as you want and each repo will have its own subscription. 
      You can adjust each repo's plan and subscription 
      in the Settings / Plans & Billing through your dashboard.
- Select language from the list
- Build your first custom type => [homepage.json](https://repository-name.prismic.io/masks/homepage.json/) => use it later for querying the page
    * Custom types allow you to define and configure fields for your content. 
      Define custom types for pages, posts, events, authors, products, places,
      - Repeatable type - Best for multiple instances like blog posts, authors, products... 
      - Single Type - Best for a unique page, like the homepage or privacy policy page...
- Add the repository URL to your configuration
``` 
//  src/prismic-configuration.js

export const apiEndpoint: "https://repository-name.prismic.io/api/v2"
```
- Edit the page (Homepage) => Save => Publish

-----------------

## P.S.

- [A List of Content Management Systems for Jamstack Sites:](https://jamstack.org/headless-cms/)

- [JavaScript development for prismic.io API v2](https://www.npmjs.com/package/prismic-javascript)
