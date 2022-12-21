# gruepr-webappp

## Scout developers

Contributions to this website were made by:

Sarah Zhang\
Cynthia Cao ([cynthiacao.work@gmail.com](cynthiacao.work@gmail.com))

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

You may need to install the following if you come across errors when running:

`npm install --save react-faq-component`\
`npm install @headlessui/react`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

**Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).\\
To learn React, check out the [React documentation](https://reactjs.org/).

### Tailwind

[Tailwind](https://tailwindcss.com/) is a CSS framework that allows you to style elements without writing custom CSS. For example, the following code would make all the text white in a div: `<div className="text-white">` which can be done directly in the HTML. 

### Config Files

`.`\
`├── node_modules`\
`├── src`\
`├── .gitignore`\
`├── package-lock.json`\
`├── package.json`\
`├── postcss.config.js`\
`├── README.md`\
`└── tailwind.config.js`

`/node_modules` This directory tracks the dependencies installed locally via package.json (npm packages).

`/src` This directory contains all of the code related to what you see in the browser such as images and specific pages. 

`.gitignore` This file tells git which files it should not track or maintain a version history for.

`package-lock.json` This file is automatically created based on the npm dependencies that were installed for the project. 

`package.json` This file holds metadata relevant to the project. This helps handle the project's dependencies.

`postcss.config.js` This file is where we install Tailwind for the project as a PostCSS plugin.

`README.md` This is a text file containing useful reference information about the project.

`tailwind.config.js` This file is where you can customize your Tailwind configuration. It currently contains custom colors, font sizes, and background images.
