import React from "react";
import styled from "styled-components";

import Banner from "../Banner";
import Task from "../Task";

export default ({
  text,
  primary,
  trash,
  todos,
  setCompleted,
  deleteTodo,
  editTodo,
  deleteForeverTodo,
}) => {
  return (
    <TaskList>
      <Banner
        primary={primary}
        trash={trash}
        deleteForeverTodo={deleteForeverTodo}
      >
        {text}
      </Banner>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          todo={todo}
          primary={primary}
          setCompleted={setCompleted}
          deleteTodo={deleteTodo}
          deleteForeverTodo={deleteForeverTodo}
          editTodo={editTodo}
        />
      ))}
    </TaskList>
  );
};

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
