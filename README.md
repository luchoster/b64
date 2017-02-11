This is just a starting point to create a new React website, using Redux and WP API endpoints.

## Available Scripts
  * npm run dev
  * npm run build


## Getting started

 * Go to `/app/lib/request.js`
 * Change line 5 (`Axios.defaults.baseURL = 'http://YOUR.URL/wp-json'`) to your WP API Endpoint

 In the project directory, you can run:

 ```npm run dev```

 Runs the app in the development mode.<br>
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser. <br>
 Now you should be able to see the title of your WP Home page title at http://localhost:3000/


For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;
* `app/app.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `app`. For faster rebuilds, only files inside `app` are processed by Webpack.  
You need to **put any JS and CSS files inside `app`**, or Webpack won’t see them.

You can, however, create more top-level directories.  
They will not be included in the production build so you can use them for things like documentation.
