
Dream Dev Dashboard is a web application that provides a suite of tools for developers. It includes features like code snippets, note-taking, task management, and API testing.

## Features

### Code Snippets

- Quickly access and copy code snippets for various programming languages and frameworks.
- Snippets are categorized by language and can be searched by keyword.
- Add your own custom snippets for easy access.

### Note-taking

- Write and save notes in Markdown format.
- Organize notes into folders and tags for easy navigation.
- Export notes as PDF or Markdown files.

### Task Management

- Create and manage tasks with different statuses (e.g., todo, in progress, done).
- Set deadlines and priorities for tasks.
- Filter tasks by status or label.

### API Testing

- Test APIs by providing a URL and see the response.
- Customize request headers and query parameters.
- Save API requests for quick access.

## 

## Getting Started

### Prerequisites

*   Node.js (v18.x or higher)
*   npm

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd my-react-app
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run lint`: Lints the code using ESLint.
*   `npm run preview`: Starts a local server to preview the production build.

## Project Structure

```
my-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Apis.jsx
│   │   ├── Docs.jsx
│   │   ├── Navbar.jsx
│   │   ├── Notes.jsx
│   │   ├── Settings.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Snippets.jsx
│   │   ├── Tasks.jsx
│   │   └── Widgets.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Dependencies

*   **react:** A JavaScript library for building user interfaces.
*   **react-dom:** Provides DOM-specific methods that can be used at the top level of your app.
*   **marked:** A markdown parser and compiler.

## Dev Dependencies

*   **@vitejs/plugin-react:** Vite plugin for React.
*   **tailwindcss:** A utility-first CSS framework.
*   **eslint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
*   **vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.
