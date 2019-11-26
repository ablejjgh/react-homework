import React from "react";
import PhotoItem from "../PhotoItem";
function PhotoList({ tasks, updateTask }) {
  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <PhotoItem key={index} task={task} updateTask={updateTask} />
        ))}
      </ul>
    </>
  );
}
export default PhotoList;
