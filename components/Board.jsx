import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteBoard } from "@/Slice/boardSlice";
import { useState } from "react";

function Board({ board }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(board.name);
  const [editedDesc, setEditedDesc] = useState(board.desc);

  const handleEditBoard = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset editedName and editedDesc to the original values
    setEditedName(board.name);
    setEditedDesc(board.desc);
  };

  const handleSaveEdit = () => {
    // Dispatch updateBoard action with the updated name and description
    dispatch(updateBoard({ id: board.id, name: editedName, desc: editedDesc }));
    setIsEditing(false);
  };

  return (
    // <div className="bg-slate-50 drop-shadow-lg shadow-violet-500/20 h-auto w-full py-3 px-4 rounded-xl">
    //   {isEditing ? (
    //     // Edit form
    //     <form>
    //       <input
    //         type="text"
    //         value={editedName}
    //         onChange={(e) => setEditedName(e.target.value)}
    //       />
    //       <textarea
    //         value={editedDesc}
    //         onChange={(e) => setEditedDesc(e.target.value)}
    //       />
    //       <button type='submit' onClick={handleSaveEdit}>Save</button>
    //       <button onClick={handleCancelEdit}>Cancel</button>
    //     </form>
    //   ) : (
    //     // Display board details
    //     <>
    //       <h2 className="text-xl font-semibold">{board.name}</h2>
    //       <p className="text-md text-stone-500 mb-6">{board.desc}</p>
    //       <div className="flex justify-between items-center">
    //         <MdDelete
    //           onClick={() => {
    //             dispatch(deleteBoard(board.id));
    //             router.push('/');
    //           }}
    //         />
    //         <MdEdit onClick={handleEditBoard} />
    //       </div>
    //     </>
    //   )}
    // </div>
    <div className="bg-slate-50 drop-shadow-lg shadow-violet-500/20 h-auto w-full py-3 px-4 rounded-xl">
      <h2 className="text-xl font-semibold">{board.name}</h2>
      <p className="text-md text-stone-500 mb-6">{board.desc}</p>
      
        <div className="flex justify-between items-center">
        
        <MdDelete onClick={() => {
          dispatch(deleteBoard(board.id));
          router.push('/'); 
        }} />
         <MdEdit onClick={handleEditBoard} />
        </div>
     
    </div>
  );
}

export default Board;


