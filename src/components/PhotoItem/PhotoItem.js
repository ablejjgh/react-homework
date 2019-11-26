import React from "react";

function PhotoItem({ task, updateTask }) {
  const handleClick = event => {
    const completed = true;
    updateTask({ ...task, completed });
  };
  return (
    <>
      <button onClick={handleClick}>Remove</button>
      <p>ID: {task.albumId}</p>
      <p>Title: {task.title}</p>
      <img src={task.thumbnailUrl}></img>
      <br />
    </>
  );
}
export default PhotoItem;
