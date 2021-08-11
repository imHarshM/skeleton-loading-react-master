This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton).

## React Skeleton Animation App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

**Note: for this you need to install npm gp-pages package!**

Github pages - npm install gh-pages --save-dev.

Add below things in packge.json

    "homepage": "http://imharshm.github.io/react-skeleton-animation"

    "scripts": {
    "predeploy":
    "npm run build",
    "deploy": "gh-pages -d build"
    }
