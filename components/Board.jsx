import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteBoard } from "@/Slice/boardSlice";

function Board({ board }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-50 drop-shadow-lg shadow-violet-500/20 h-auto w-full py-3 px-4 rounded-xl">
      <h2 className="text-xl font-semibold">{board.name}</h2>
      <p className="text-md text-stone-500 mb-6">{board.desc}</p>
      <button
        onClick={() => {
          dispatch(deleteBoard(board.id));
          router.push('/'); 
        }}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default Board;


