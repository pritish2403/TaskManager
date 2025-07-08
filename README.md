# Task Manager App

A simple Task Manager application built with **Flask** (Python) as the backend and **React** (JavaScript) as the frontend. 
This app allows users to create, update, delete, and mark tasks as done, all while managing tasks with different priorities (Low, Medium, High). 
It supports both **light** and **dark mode** themes and stores tasks in the browser's **localStorage**.

---

## Features

- **Add Tasks**: Create new tasks with a title and priority.
- **Priority Management**: Set task priorities (Low, Medium, High), with color-coded tasks.
- **Task Completion**: Mark tasks as done or undone.
- **Delete Tasks**: Remove tasks from the list.
- **Search**: Filter tasks by title using a search bar.
- **Dark Mode**: Toggle between light and dark mode themes for better user experience.
- **Persistence**: Tasks are saved in **localStorage** so they persist even after page reloads.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Persistence**: localStorage (Frontend) | In-memory storage (Backend)
- **Styling**: CSS

---

## Setup & Installation

### Prerequisites

Make sure you have the following installed:

- Python (for Flask backend)
- Node.js & npm (for React frontend)

### Backend (Flask API)

1. Clone this repository:
    ```bash
    git clone https://github.com/pritish2403/TaskManager.git
    cd task-manager-app
    ```

2. Create a virtual environment:
    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:
    - For Windows:
      ```bash
      .\venv\Scripts\activate
      ```
    - For macOS/Linux:
      ```bash
      source venv/bin/activate
      ```

4. Install dependencies:
    ```bash
    pip install Flask
    ```

5. Run the Flask backend:
    ```bash
    python app.py
    ```

   The backend will run at `http://localhost:5000`.

### Frontend (React)

1. Navigate to the `task-manager-frontend` directory:
    ```bash
    cd task-manager-frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Run the React frontend:
    ```bash
    npm start
    ```

   The frontend will run at `http://localhost:3000`.

---

## Usage

- **Backend**: The Flask API exposes routes to interact with tasks:
  - `GET /tasks`: Retrieve all tasks.
  - `POST /tasks`: Create a new task.
  - `PUT /tasks/<task_id>`: Update an existing task.
  - `DELETE /tasks/<task_id>`: Delete a task.

- **Frontend**: The React frontend connects to the backend, allowing users to:
  - Add tasks with different priorities.
  - Mark tasks as done/undone.
  - Delete tasks.
  - Search tasks.
  - Toggle dark/light mode.

---

## Future Improvements

- Connect the frontend with the Flask API for a fully dynamic task management experience.
- Add user authentication and authorization to manage tasks.
- Store tasks in a proper database (e.g., SQLite, MongoDB) instead of in-memory storage.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **React** for providing an easy and powerful frontend framework.
- **Flask** for offering a lightweight yet powerful backend framework.
- **LocalStorage** for simple persistence.
