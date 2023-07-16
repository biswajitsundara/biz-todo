# biz-todo

This is a simple todo application built using Vite and React. The app allows users to create, update, and delete tasks in order to manage their daily to-do lists effectively.

## Features
* Create new tasks by entering a title and description.
* Mark tasks as completed. -- future scope
* Edit task details.
* Delete tasks.
* Filter tasks by status (all, active, completed). -- future scope
* Persist data locally using browser's localStorage. -- Future Scope

## Getting Started
To get a local copy of this project up and running, follow these steps:
* Clone the repo
```console
git clone git@github.com:biswajitsundara/biz-todo.git
```
* Navigate to the project directory:
```console
cd biz-todo
```
* Install the dependencies:
```console
npm install
```
* Start the development server:
```console
npm run dev
```

## Folder Structure
The project structure is organized as follows:
```
├── public
│   ├── logo.png
├── src
│   ├── components
│   │   ├── Layout.js
│   │   ├── TodoForm.js
│   │   ├── TodoList.js
│   ├── utils
│   │   ├── api.jsx
│   │   ├── localStorage.jsx
|   ├── App.jsx  
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
```

* The `index.html` file is the entry point of the application.
* It loads the `main.jsx` that renders the `App` component from `App.jsx`
* The `src` folder contains the source code of the application.
* The `components` folder contains the React components used in the app.
* The `utils` folder contains utility functions for making API calls and managing local storage.
* The `.gitignore` file specifies files and folders that should be ignored by version control.
* The `package.json` file lists the project dependencies and scripts.
* The `README.md file` (this file) provides information about the project.

## Contributing
Contributions to this project are welcome. To contribute, follow these steps:

* Fork the repository.
* Create a new branch for your feature or bug fix.
* Make your changes and commit them.
* Push the changes to your forked repository.
* Submit a pull request describing your changes.
* Please ensure that your pull request adheres to the code standards and includes relevant tests and documentation.
* Please note, this is a pure react project, don't use any third party libraries

## License
This project is licensed under the MIT License. Feel free to use and modify the code as per your needs.

## Creator
Biswajit Sundara