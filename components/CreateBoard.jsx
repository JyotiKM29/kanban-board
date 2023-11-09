import { addBoard } from "@/Slice/boardSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CreateBoard({ onAddBoard }) {
  const [boardName, setBoardName] = useState("");
  const [boardDesc, setBoardDesc] = useState("");
  const [addBtn, setAddBtn] = useState(true);
  const board = useSelector(state => state.board.board);

  

  const dispatch= useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!boardName || !boardDesc) return;

    const newBoard = {
      id: Date.now(),
      name :boardName,
      desc: boardDesc,
    };
     
    dispatch(addBoard(newBoard)); 
  
   
    setBoardName("");
    setBoardDesc("");

    setAddBtn(true);
    console.log(newBoard);
    console.log(board);
  }

  return (
    <>
      {addBtn ? (
        <button
          className="bg-violet-100 px-4 py-2 w-full rounded-full text-violet-800 focus:outline-none mb-4 fixed bottom-0 right-[5%] z-50 md: h-50 "
          onClick={() => setAddBtn(!addBtn)}
        >
          {" "}
          <span className="text-xl"> + </span> Add Item{" "}
        </button>
      ) : (
        <div className="bg-violet-500 drop-shadow-lg shadow-violet-500/20 h-auto w-[90%] py-4 px-4 rounded-xl w-[12rem] mb-4 h-44 sm:w-4/6 md:2/6 lg:1/3 fixed bottom-0 right-[5%] z-50">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 relative h-full"
          >
            <input
              className="input w-3/4"
              type="text"
              placeholder="Project name..."
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />
            <input
              type="text"
              className="input w-4/4"
              placeholder="Project Desc..."
              value={boardDesc}
              onChange={(e) => setBoardDesc(e.target.value)}
            />

           
              <ul className="flex justify-between items-center p-1 mb-4">
                <li>
                  <p
                    className="pointer"
                    onClick={() => setAddBtn(!addBtn)}
                  >
                    close
                  </p>
                </li>
                <li>
                  <button
                    className="font-semi-bold hover:pointer active:translate-y-[1px]"
                    type="submit"
                  >
                    Add Item
                  </button>
                </li>
              </ul>
           
          </form>
        </div>
      )}
    </>
  );
}

export default CreateBoard;
