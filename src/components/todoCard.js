import React from "react";
import { MdDeleteForever } from "react-icons/md";

function TodoCard({ list, handleRemove }) {
  return list.map((lists, index) => (
    <div key={index} className="card-todo">
      <div id={lists.id} className="card-content">
        <div className="card-text">{lists.text}</div>
        <div>
          <MdDeleteForever size={25} onClick={() => handleRemove(lists.id)} />
        </div>
      </div>
    </div>
  ));
}

export default TodoCard;
