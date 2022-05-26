import React, { useState } from "react";
import TodoForm from "./todoForm";
import TodoCard from "./todoCard";

const List = () => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    const newList = [item, ...list];
    setList(newList);
  };

  const handleRemove = (id) => {
    const remove = [...list].filter((item) => item.id !== id);
    setList(remove);
  };

  return (
    <div className="main">
      <div className="header">
        <h1>Your Todos</h1>
        <TodoForm onSubmit={addItem} />
      </div>
      <div className="list">
        <TodoCard list={list} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

export default List;
