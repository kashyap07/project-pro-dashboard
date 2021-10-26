import React, { useState, useRef } from "react";

const initialList = [
  {
    id: 1,
    task: "Do this assignment",
    done: false,
  },
  {
    id: 2,
    task: "Drink water",
    done: true,
  },
  {
    id: 3,
    task: "Buy a kilo of Potatoes",
    done: false,
  },
  {
    id: 4,
    task: "A very lengthy task description to test styling on this particular list item should be fixed now oh yup it is",
    done: true,
  },
];

export default function Todo() {
  const [list, setList] = useState(initialList);
  const newItem = useRef(null);

  // add task to list
  const handleAddItem = () => {
    if (!newItem.current.value) return;

    setList([
      ...list,
      {
        id: list.length + 1,
        task: newItem.current.value,
        done: false,
      },
    ]);

    // reset input field
    newItem.current.value = "";
  };

  // remove task from list
  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);

    setList(updatedList);
  };

  // set task to done
  const handleUpdate = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) return { ...item, done: true };
      else return item;
    });

    setList(updatedList);
  };

  return (
    <div data-component="todo-list" className="flex flex-col h-full p-4">
      <h1 className="text-3xl mb-2">TODOs</h1>
      {list.length ? (
        <ul className="w-full flex-1 overflow-scroll mb-5">
          {list.map((item) => (
            <div key={item.id} className="flex items-center p-2 border w-full">
              {/* task item, click/press enter to finish */}
              <button
                type="button"
                className={`flex flex-1 gap-3 items-center rounded px-2 ${
                  item.done ? "" : "hover:bg-gray-300"
                }`}
                key={item.id}
                onClick={() => {
                  handleUpdate(item.id);
                }}
              >
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => {
                    handleUpdate(item.id);
                  }}
                  tabIndex="-1"
                />
                <li className={`${item.done ? "line-through" : ""} text-left`}>
                  {item.task}
                </li>
              </button>

              {/* delete button */}
              <button
                className="px-2 bg-gray-300 hover:bg-gray-400 mx-2 rounded"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                X
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="w-full flex-1 text-gray-500">
          <p>Done for the day. Hurray! 🎉</p>
        </div>
      )}

      {/* input field */}
      <div className="flex gap-5 rounded">
        <input
          type="text"
          ref={newItem}
          className="border-2 py-1 flex-1 p-2"
          placeholder="Enter task here"
        />
        <button
          type="submit"
          onClick={handleAddItem}
          className="border-2 rounded py-1 px-4 bg-blue-500 text-white font-medium"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
