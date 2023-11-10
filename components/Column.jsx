import { useState } from "react";
import CreateItem from "./CreateItem";
import Item from "./Item";
import { FiEdit2,} from 'react-icons/Fi';
import { MdDelete } from 'react-icons/Md';

function Column({ columnHeading, columnId, boardId, onDeleteCol, onEditCol }) {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [newColumnName, setNewColumnName] = useState(columnHeading);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function handleDelete() {
    onDeleteCol(columnId);
  }

  function handleEditColumnName() {
    onEditCol(columnId, newColumnName);
    setEditing(false);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2 p-1">
        {editing ? (
          <input
            className="input"
            type="text"
            value={newColumnName}
            onChange={(e) => setNewColumnName(e.target.value)}
          />
        ) : (
          <h1 className="text-stone-800 text-lg">
            {columnHeading}
          </h1>
        )}

        <div className="flex gap-1 sm:gap-2">
          {editing ? (
            <button onClick={handleEditColumnName}>Save</button>
          ) : (
            <FiEdit2 onClick={() => setEditing(true)} />
          )}
          <MdDelete onClick={handleDelete} />
        </div>
      </div>

      
      <ul className="flex flex-col gap-4">
        {items.map((el) => (
          <Item key={el.id} item={el} boardId={boardId} onDeleteItem={handleDeleteItem}/>
        ))}
      </ul>

      <CreateItem onAddItem={handleAddItem} />
    </div>
  );
}

export default Column;
