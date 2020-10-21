# Prismic + React App - Dog jump!

### [DEMO](https://dog-jump-prismic.vercel.app)

Prismic is a CMS backend for your websites & apps - optimised for developer productivity with a visual builder 
to model page & post content. Api-based for technology freedom - use your favorite programming language & framework

-----------------

#### [Examples:](https://user-guides.prismic.io/en/collections/22783-examples):

- React.js Samples:
    * [Sample Blog with API-based CMS in ReactJS](https://user-guides.prismic.io/en/articles/2685559-sample-blog-with-api-based-cms-in-reactjs)
    * [Sample Multi-Page Site with Navigation in ReactJS](https://user-guides.prismic.io/en/articles/2731304-sample-multi-page-site-with-navigation-in-reactjs)
- Next.js Samples:
    * [Sample Blog with API-based CMS in Next.js](https://user-guides.prismic.io/en/articles/2882569-sample-blog-with-api-based-cms-in-next-js)    
    * [Sample Multi-Page Site with Navigation in Next.js](https://user-guides.prismic.io/en/articles/2907799-sample-multi-page-site-with-navigation-in-next-js)
- Gatsby.js Samples:
    * [Sample Blog with API-based CMS & Gatsby.js](https://user-guides.prismic.io/en/articles/2933292-sample-blog-with-api-based-cms-gatsby-js)
    * [Multi-language website example with Gatsby.js](https://user-guides.prismic.io/en/articles/3601217-multi-language-website-example-with-gatsby-js)
        
    
-----------------

#### LINKS:
    
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

export const apiEndpoint: "https://repository-name.cdn.prismic.io/api/v2"
```
- Edit the page (Dog) => Save => Publish
- ```<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=tom2kota"></script>```

- Create the Page component
``` 
    //  src/pages/Page.jsx
    import React, { useEffect, useState } from 'react'
    import { RichText } from 'prismic-reactjs'
    import { client, linkResolver } from '../prismic-configuration'
    import NotFound from './NotFound'
    
    const Page = ({ match }) => {
      const [doc, setDocData] = useState(null)
      const [notFound, toggleNotFound] = useState(false)
    
      const uid = match.params.uid
    
      // Get the page document from Prismic
      useEffect(() => {
        const fetchData = async () => {
          // We are using the function to get a document by its UID
          const result = await client.getByUID('page', uid)
    
          if (result) {
            // We use the State hook to save the document
            return setDocData(result)
          } else {
            // Otherwise show an error message
            console.warn('Page document not found. Make sure it exists in your Prismic repository')
            toggleNotFound(true)
          }
        }
        fetchData()
      }, [uid]) // Skip the Effect hook if the UID hasn't changed
    
      if (doc) {
        return (
          <div className="page">
            {/* This is how to get an image into your template */}
            <img src={doc.data.image.url} alt={doc.data.image.alt} />
            {/* This is how to render a Rich Text field as plain text */}
            <h1>{RichText.asText(doc.data.title)}</h1>
            {/* This is how to render a Rich Text field into your template as HTML */}
            <RichText render={doc.data.description} linkResolver={linkResolver} />
          </div>
        )
      } else if (notFound) {
        return <NotFound />
      }
      return null
    }
    
    export default Page
```
- Setup the page routing
``` 
    // src/App.jsx
    import Page from './pages/Page'
 
    <Route exact path='/page/:uid' component={Page} />
```
- In your browser go to [localhost:3000/page/dog](http://localhost:3000/page/dog) and you're done!

- [How to Query the API with React](https://prismic.io/docs/reactjs/query-the-api/how-to-query-the-api)



-----------------

## P.S.

- [A List of Content Management Systems for JamStack Sites](https://jamstack.org/headless-cms/)

- [JavaScript development for prismic.io API v2](https://www.npmjs.com/package/prismic-javascript)

-----------------

[![Dependency Status](https://david-dm.org/prismicio/reactjs-starter.svg)](https://david-dm.org/prismicio/reactjs-starter)

# Prismic React Starter
This project has been created with [`create-react-app`](https://github.com/facebookincubator/create-react-app). We added a zest of [prismic](https://github.com/prismicio/javascript-kit) inside it. It serves as a boilerplate React+Prismic application that will serves as a quick guide to get your own applications off the ground

## Quick bootstrap
The fastest way to run get started from scratch is using the Prismic command line tool to install the starter codebase, create a new Prismic repository and setup the Page custom type with only a few commands.
```bash
npm install -g prismic-cli
prismic new
```
Select a name for your new Prismic repository, the local folder for your project and finally select `React` to bootstrap the React.js starter project. The dependencies will be installed as well, so once the process is done, just navigate to the folder and run the app with `npm start`

Follow along with the Help's page instructions. You can safely ignore the instructions in the first two steps regarding creating a new repository and the Page custom type, the Prismic tool has taken care of that for you.

## Running the app in the development mode
Run the following command to launch the project in dev mode:
```
npm start
```
Then you can open your browser to http://localhost:3000.

## Building the app for production
Run the following command to create an optimized build of your site:
```
npm run build
```

## Deployment
This project is ready for deployment using [Netlify](https://www.netlify.com), thanks to the addition of a `_redirects` file located in the public folder. If you're interested in deploying to other platforms review the suggested [solutions](https://facebook.github.io/create-react-app/docs/deployment).

## Learn more about Prismic

You can find out more about how to use React.js with Prismic from [our React documentation](https://prismic.io/docs/reactjs/getting-started/getting-started-from-scratch).

## Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2019 Prismic (https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
