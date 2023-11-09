import Link from "next/link";
import { useState } from "react";
import Kanban from "./Board";
import CreateNewBoard from "./CreateBoard";
import Board from "./Board";
import { useSelector } from "react-redux";

function KanbanBoard() {
  const boards = useSelector(state => state.board.board);
 

  return (
    <>
      
      <div className="relative h-[94%]">
        <ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {boards.map((board) => (
            <Link key={board.id} href={`/${board.id}`}>
              <Board className="min-w-[250px] max-w-full" board={board} 
             
              key={board.id} />
            </Link>
          ))}
        </ul>
        <CreateNewBoard />

      </div>
    </>
  );
}

export default KanbanBoard;
