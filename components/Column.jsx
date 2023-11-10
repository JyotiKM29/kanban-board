// KanbanColumn.js
import { useEffect, useState } from "react";
import CreateItem from "./CreateItem";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from 'react-icons/bs';
import {FiEdit2} from 'react-icons/Fi'
import{MdDelete} from 'react-icons/Md'
import { deleteColumn } from "@/Slice/ColumnSlice";

function Column({ columnHeading , columnId }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.item);

  return (
    <div>
      <div className="flex justify-between items-center mb-2 p-1">
        <h1 className="text-stone-800 text-lg">
        { columnHeading }
        </h1>
        {/* <p className="text-2xl rounded-full bg-violet-100 w-8 h-8 text-center">
          +
        </p> */}
        {/* <BsThreeDots /> */}
        
      </div>

      <CreateItem />
      <ul className="flex flex-col gap-4">
        {items.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </ul>
      <div className=" bg-violet-300 flex justify-between gap-1 px-4 py-2 w-full rounded-full text-violet-800 focus:outline-none mt-4 ">
        <FiEdit2 />
        <MdDelete  onClick={()=>dispatch(deleteColumn(columnId))}/>
        </div>
    </div>
  );
}

export default Column;
