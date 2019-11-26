import React from "react";
import PhotoTitle from "../PhotoTitle";
function RemovedList({ tasks, updateTask }) {
  return (
    <>
      <h2>Removed Photos</h2>
      {tasks.map((task, index) => (
        <PhotoTitle key={index} task={task} updateTask={updateTask} />
      ))}
    </>
  );
}
export default RemovedList;
