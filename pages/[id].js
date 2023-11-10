//[id].js
import KanbanColumn from "@/components/Column";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";
import CreateItem from "@/components/CreateItem"; // Import CreateItem
import CreateColumn from "@/components/CreateColumn";
import Column from "@/components/Column";
import { useEffect, useState } from "react";

function KanbanBoardDetails() {
  const [columns , setColumns] = useState([]);

  
  const boards = useSelector((state) => state.board.board);
  const router = useRouter();
  const { id } = router.query;

  const board = boards.find((board) => board.id.toString() === id);

  function handleAddColumn(newCol) {
    setColumns([...columns, newCol]);
  }

  function handleDeleteColumn(columnId) {
    setColumns((prevColumns) => prevColumns.filter((column) => column.id !== columnId));


  }

  function handleEditColumnName(columnId, newColumnName) {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId ? { ...column, name: newColumnName } : column
      )
    );
  }

  useEffect(() => {
    // Check if there are no columns, then add default columns
    if (columns.length === 0) {
      const defaultColumns = [
        { id: 1, name: "To do", boardId: id },
        { id: 2, name: "In Progress", boardId: id },
        { id: 3, name: "Completed", boardId: id },
      ];
      setColumns(defaultColumns);
    }
  }, [columns, id]);
  

  if (!board) {
    return <p>Board not found</p>;
  }

  return (
    <div className="bg-violet-200 w-screen h-max sm:h-screen p-6">
      <Link href="/">
        <HiArrowSmallLeft />
      </Link>
      <div className="bg-stone-50 rounded-xl h-max sm:h-[94%] px-5 pt-4 sm:p-4 sm:pt-2">
        <div className="bg-stone-50 rounded-xl h-[94%]  sm:p-4 sm:pt-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col  sm:gap-1 justify-start items-start">
              <h1 className="text-2xl sm:text-3xl text-stone-950 ml-4 font-semibold">
                {board && board.name}
              </h1>
              <p className="ml-4">{board && board.desc}</p>
            </div>

            <CreateColumn onAddCol={handleAddColumn} />
          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
           
            {columns && columns.map((column) => (
              <Column
                columnHeading={column.name}
                key={column.id}
                columnId={column.id}
                boardId ={id}
                onDeleteCol={handleDeleteColumn}
                onEditCol={handleEditColumnName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoardDetails;
