import React, { useState } from "react";

import "./App.css";

function App() {
  var [items, setItems] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    const { value } = event.target;

    setItems(value);
  }

  function addItems() {
    setItemList((prevItems) => {
      return [...prevItems, items];
    });
    setItems("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="type items here"
          onChange={handleChange}
          value={items}
        />
        <button type="submit" onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((arrayItems) => (
            <li>{arrayItems}</li>
          ))}{" "}
        </ul>
      </div>
    </div>
  );
}

export default App;
