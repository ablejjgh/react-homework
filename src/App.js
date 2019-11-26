import React, { useState, useEffect } from "react";
import PhotoList from "./components/PhotoList";
import RemovedList from "./components/RemovedList";
function App() {
  const [tasks, setTasks] = useState([]);
  const updateTask = updatedTask => {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const notMarketTasks = tasks.filter(task => !task.completed);
  const removedTasks = tasks.filter(task => task.completed);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);
  return (
    <>
      <h1>Photos</h1>
      <PhotoList tasks={notMarketTasks} updateTask={updateTask} />
      <RemovedList tasks={removedTasks} updatedTask={updateTask} />
    </>
  );
}

export default App;
