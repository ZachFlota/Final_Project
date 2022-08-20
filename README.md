# Writer's Desk App

## Description
The Writer's Desk App is a tool for writers! If you are planning your next great novel, the Writer's Desk App is  for you. Register and login to your own workspace to get started. In your workspace, start a book project and start writing down and organizing your notes. 

With the Character tool you can add a new character and fill out the form with important details. You can then edit details about the character as your story develops or delete the character all together. 

With the Setting tool you add new settings and fill out the form with import setting details. You can edit these details about the setting as your story develops or delete it all together. 

With the Plot tool you can add new plot points such as exposition, rising actions, climactic action, falling action, and resolution. Edit plot points or rearrange them as your story develops. 

## Demo
![Demo gif](https://github.com/ZachFlota/Final_Project/blob/main/client/src/assets/WritersDeskDemo.gif)

## Technologies

| Dependencies | Version |
| ------------ | ------- |
| Axios | 0.27.2 |
| Bcryptjs | 5.0.1 |
| Body-parser | 1.20.0 |
| Bootstrap | 5.2.0 |
| Classnames | 2.3.1 |
| Cors | 2.8.5 |
| Dotenv | 16.0.1 |
| Express | 4.18.1 |
| http-errors | 2.0.0 |
| Jsonwebtoken | 8.5.1 |
| Jwt-decode | 3.1.2 |
| Mongoose | 6.5.1 |
| Passport | 0.6.0 |
| Passport-jwt | 4.0.0 |
| React | 18.2.0 |
| React-dom | 18.2.0 |
| React-icons | 4.4.0 |
| React-redux | 8.0.2 |
| React-router-dom | 6.3.0 |
| React-scripts | 5.0.1 |
| Redux | 4.2.0 |
| Redux-thunk | 2.4.1 |
| @Testing-library/jest-dom | 5.16.5 |
| @Testing-library/react | 13.3.0 |
| @Testing-library/user-event | 13.5.0 |
| Validator | 13.7.0 |
| Web-vitals | 2.1.4 |

## Technical Information

This project utilizes an Express API server and a React frontend UI.

### Installation
From the root directory, run `npm install` to install global project dependencies.

Then, from the root directory, cd into *server* and run `npm install` to install backend project dependencies. 

Then, from the root directory, cd into *client* and run `npm install` to install frontend project dependencies. 

### Starting the Server
From the root directory, cd into *server* and run `npm start` to start the Express server on PORT = 3001.

### Starting the Frontend
Also from the root directory, cd into *client* and run `npm start` to start the React frontend UI on PORT = 3000.

### Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## API Documentation

### Routes

#### User

| Method | Path | Purpose |
| ------ | ---- | ------- |
| POST | `/register` | Create a new user |
| POST | `/login` | Login a user |
| GET | `/me` | User authentication token |

#### Character

| Method | Path | Purpose |
| ------ | ---- | ------- |
| POST | `/new` | Create new character |
| GET | `/characters` | Show all characters |
| GET | `/characters/:id` | Show character profile |
| PUT | `/upate/:id` | Edit a character |
| DELETE | `/delete/:id` | Delete a character |

#### Setting

| Method | Path | Purpose |
| ------ | ---- | ------- |
| POST | `/new` | Create new setting |
| GET | `/settings` | Show all settings |
| GET | `/settings/:id` | Show setting profile |
| PUT | `/update/:id` | Edit a setting |
| DELETE | `/delete/:id` | Delete a setting |


### Database

#### User

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| name | String | 
| email | String |
| password | String |

#### Character

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| name | String |
| bio | String |
| age | Number |
| appearance | String |
| personality | String |
| attributes | String |
| habbits | String | 

#### Setting

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| name | String |
| geographic_location | String |
| description | String |
| time_period | String |
| characteristics | String |
| weather | String |
| history | String |

## Issues

A user must currently register and login inorder to access the workspace, however, the workspace is currently shared by all users. In further development, logging in would bring a user to their own unique workspace and they would only have access to their own saved projects. 

The only tools currently availbale for use are the characters and settings tools. Further development would include the plot tool, a vision board, a general notes tool, and a random prompt generator. 

Styling is still in development and in its current state it is not responsive for phone or tablet screens. 
