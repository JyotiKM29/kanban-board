// KanbanColumn.js
import { useEffect, useState } from "react";
import CreateItem from "./CreateItem";
import Item from "./Item";
import { useSelector } from "react-redux";

function KanbanColumn({ columnHeading }) {

  const items = useSelector(state => state.item.item);

  return (
    <div>
      <div className="flex justify-between items-center mb-2 p-1">
        <h1 className="text-stone-800 text-lg">{columnHeading}</h1>
        <p className="text-2xl rounded-full bg-violet-100 w-8 h-8 text-center">
          +
        </p>
      </div>

      <CreateItem  />
      <ul className="flex flex-col gap-4">
        {items.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </ul>
    </div>
  );
}

export default KanbanColumn;
