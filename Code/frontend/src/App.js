import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [priority, setPriority] = useState('Low');
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(), // 👈 unique ID
      text: taskInput,
      priority: priority,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const toggleDone = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#ff7f7f'; // soft red
      case 'Medium':
        return '#fff176'; // soft yellow
      case 'Low':
        return '#81c784'; // soft green
      default:
        return '#ccc';
    }
  };

  const sortedTasks = tasks
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4);
    });

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="top-bar">
        <button onClick={() => setDarkMode(!darkMode)} className="darkmode-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task"
          className="task-input"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select
          className="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={addTask} className="add-button">Add Task</button>
      </div>

      <div className="task-list">
        {sortedTasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            style={{
              backgroundColor: task.done ? '#d3d3d3' : getPriorityColor(task.priority),
            }}
          >
            <span className={`task-text ${task.done ? 'done' : ''}`}>{task.text}</span>
            <div className="task-buttons">
              <button onClick={() => toggleDone(task.id)} className="done-button">
                {task.done ? 'Undone' : 'Done'}
              </button>
              <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
