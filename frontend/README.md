# Getting Started with Create React App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Question1
* To implement shared functionality across a component tree in React, you can use several approaches depending on your needs and the complexity of the application. 
* * 1. React Context API
* * 2. Higher-Order Components (HOCs)
* * 3. Custom Hooks
* * 4. State Management Libraries

* here i am using React Contsxt Api and give examle in Mycontsxt.Js and SomeComponent.Js

# Question2
* The useState hook is suitable for managing state in complex components due to its simplicity, flexibility, and integration with other React features. 
* * 1. Declarative State Management - useState allows you to manage state in a declarative way, making your component's state easier to understand and reason about.
* * 2. Encapsulation of State -useState provides local state management within a component, which keeps state encapsulated and avoids the complexity of passing state through props or using global state.
* * 3. Functional Updates - useState supports functional updates, which is useful when the new state depends on the previous state value.
* * 4. Multiple State Variables - With useState, you can manage multiple state variables independently within the same component.
* * 5. Integration with Other Hooks - useState works seamlessly with other hooks, such as useEffect, to manage side effects based on state changes.
* * 6. Custom Hooks - You can create custom hooks to encapsulate and reuse stateful logic across multiple components.

# for more details and explanations
* Go to frontend -> src -> Components -> UseState 


# Help Center 

The Help Center API provides endpoints to manage help center cards, which represent different sections such as "Branches," "Manage Your Account," and "Manage Billing." This document outlines how to integrate with the API from the frontend.

### Created by Arun Singh

## Project Structure

frontend/
│
├── public/
│   ├── index.html  
│   ├── favicon.ico
│   └── manifest.json
|
├── src/
│   ├── components
|   |    ├── UseState
|   |    |  └── Assignments - Question - 2.
|   |    ├── CardDetail.js
|   |    ├── Cards.js
|   |    ├── Dashboard.js
|   |    ├── Footer.js
|   |    ├── main.js
|   |    ├── Navbar.js
|   |    ├── PostButton.js - Question - 1.
|   |    └── SomeComponent.js - Question - 1.
|   |
│   ├── context
|   |   └── MyContext.js
│   ├── images
|   |   └── logo.png
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTest.js
|
├── .gitignore             # Files to ignore in version control
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Project dependencies and scripts
└── README.md              # Project documentation

## Features

- **display the user interfaec:** Add new help center sections.
- **Search :** User can search in input.
- **Retrieve All Cards:** Get a list of all help center cards.
- **Retrieve a Specific Card:** Fetch the details of a specific card by its title.


## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SArun07/Future-Skills.git
   cd help-center-api
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
4. **Run the server:**

   ```bash
   npm start
   ```

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

    The page will reload when you make changes.\
    You may also see any lint errors in the console.

### API Endpoints

- **Create a Card:**
   Inside Postman curl -X POST -> body -> raw -> Text -> JSON 

  - **POST** `/cards`
  - **Description:** Create a new help center card.
  - **Body Parameters:** `title` (string), `description` (string) don't put id because it taken autometically

  **Example:**
   
  ```bash
  curl -X POST http://localhost:8000/cards \
  -H "Content-Type: application/json" \
  -d '{"title": "Manage Billing", "description": "Information about managing your billing details."}'
  ```

- **Retrieve All Cards:**

  - **GET** `/cards`
  - **Description:** Retrieve all help center cards.

  **Example:**

  ```bash
  curl -X GET http://localhost:3000/cards
  ```

- **Retrieve a Specific Card by Title:**

  - **GET** `/cards/<title>`
  - **Description:** Retrieve a specific help center card by its title.

  **Example:**

  ```bash
  curl -X GET http://localhost:3000/cards/Branches
  ```


## Available Scripts


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
