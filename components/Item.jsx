import { FiEdit2 } from 'react-icons/Fi';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Item({ item, onDeleteItem, onUpdateItem }) {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [editedItemName, setEditedItemName] = useState(item.itemName);
  const [editedItemDesc, setEditedItemDesc] = useState(item.itemDesc);
  const [editedDueDate, setEditedDueDate] = useState(item.dueDate);

  const handleUpdateItem = () => {
    onUpdateItem(item.id, {
      itemName: editedItemName,
      itemDesc: editedItemDesc,
      dueDate: editedDueDate,
    });
    setEditing(false);
  };

  return (
    <div className="bg-slate-50 drop-shadow-lg  shadow-violet-500/20 h-auto w-full py-3 px-4 rounded-xl mt-2 mb-4">
      {editing ? (
        <form className='flex flex-col gap-2' onSubmit={handleUpdateItem}>
  <input
    type="text"
    className='input bg-violet-100 focus:ring-violet-200 '
    value={editedItemName}
    onChange={(e) => setEditedItemName(e.target.value)}
  />
  <textarea
    className='input bg-violet-100 focus:ring-violet-200'
    value={editedItemDesc}
    onChange={(e) => setEditedItemDesc(e.target.value)}
  />

<input
            type="date"
            className='input'
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
          />
  <div className='flex justify-between items-center p-1 sm:p-2'>
    <p className="font-bold text-md text-violet-950" onClick={() => setEditing(false)}>Cancel</p>
    <button className="font-bold text-md text-violet-950" type='submit'>Save</button>
  </div>
</form>
      ) : (
        <>
          <h2 className="text-lg">{item.itemName}</h2>
          <p className="text-md text-stone-500 mb-6">{item.itemDesc}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-stone-400">{item.dueDate}</p>
            <div className='flex gap-1 '>
              <FiEdit2 onClick={() => setEditing(true)} />
              <MdDelete onClick={() => onDeleteItem(item.id)} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Item;
