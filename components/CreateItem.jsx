// KanbanItem.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem as addItemAction } from "@/Slice/ItemSlice";

function CreateItem({onAddItem}) {
  const currentDate = new Date().toISOString().split('T')[0];
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [dueDate, setDueDate] = useState(currentDate);
  const [addbtn, setAddBtn] = useState(true);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName || !itemDesc ) return;

    const newItem = {
      id: Date.now(),
      itemName,
      itemDesc,
      dueDate ,
    };
    onAddItem(newItem);
    
    setItemName("");
    setItemDesc("");
    setDueDate(null);
    setAddBtn(true);
  }

  return (
    <>
      {addbtn ? (
        <button
          className="bg-violet-100 px-4 py-2 w-full rounded-full mt-2 text-violet-800 focus:outline-none "
          onClick={() => setAddBtn(!addbtn)}
        >
          {" "}
          <span className="text-xl">+ </span> Add Item{" "}
        </button>
      ) : (
        <div className="bg-violet-500 drop-shadow-lg  shadow-violet-500/20 h-auto w-full py-3 px-4 rounded-xl w-[12rem] mb-4 mt-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              className="input "
              type="text"
              placeholder="item name..."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="item Desc..."
              value={itemDesc}
              onChange={(e) => setItemDesc(e.target.value)}
            />
            <input
              type="date"
              className="input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <div className="flex justify-between items-center p-1 mt-1">
              <p className="pointer" onClick={() => setAddBtn(!addbtn)}>
                close
              </p>
              <button
                className="font-semi-bold hover:pointer active:translate-y-[1px]"
                type="submit"
              >
                {" "}
                Add Item
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateItem;
