import { useState } from "react";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
