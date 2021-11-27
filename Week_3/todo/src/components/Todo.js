import React, { useState } from "react";

const Todo = (props) => {
  const [item, setItem] = useState("");
  const [todos, settodos] = useState([]);
  const [itemError, setItemError] = useState("");
  const [checked, setChecked] = useState([]);

  const handleCheckBox = (e, index) => {
    const c = checked.slice();
    c[index] = !c[index];
    setChecked(c);
  };

  const handDelete = (index) => {
    const filter = todos.filter((todo, i) => {
      return i !== index;
    });
    settodos(filter);
  };

  const createItem = (e) => {
    e.preventDefault();
    settodos([...todos, item]);
  };

  const handleItem = (e) => {
    setItem(e.target.value);
    if (e.target.value.length < 2) {
      setItemError("Must be 2 characters or more");
    } else {
      setItemError("");
    }
  };
  return (
    <div>
      <form onSubmit={createItem}>
        <div>
          <label>Add To Do Item</label>
          <p>
            <input type="text" value={item} onChange={handleItem} />
            {itemError ? <p>{itemError}</p> : ""}
          </p>
          <input type="submit" value="submit"></input>
        </div>
      </form>
      <hr></hr>

      {todos.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={checked[index]}
              onClick={(e) => handleCheckBox(e, index)}
            />

            <div className={checked[index] ? "crossed" : ""}>{item}</div>
          </label>
          <button onClick={() => handDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
