# My Github Repositories API Fetch

A web application created to fetch the github repositories of users, built with reactjs and using the Github API

In this project, I implemented a client-side application using the React JavaScript library and the react-router-dom library for routing. 

To retrieve data from the GitHub API, I implemented an API call using the fetch call. The API call was used to fetch my user profile and repository data, which was then displayed on the “repositories page” using a card UI. Each card displayed the repository title, language, and a button to view more details about the repository.

To improve error handling, I utilized an error boundary component, which is a React pattern that allows for the catching of JavaScript errors within the component tree and the display of a fallback UI instead of crashing the application. This is a feature introduced in React 16 and can be used to improve the stability of the application by preventing uncontrolled errors from propagating and crashing the entire application.

To checkout the project use this link: https://github-repo-api-fetch.netlify.app/

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

