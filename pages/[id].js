import KanbanColumn from "@/components/KanbanColumn";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";

function KanbanBoardDetails() {
  const boards = useSelector((state) => state.board.board);
  const router = useRouter();
  const { id } = router.query;

  // Find the board with the matching id
  // Find the board with the matching id
  const board = boards.find((board) => board.id.toString() === id);

  if (!board) {
    // Handle the case when the board with the specified id is not found
    return <p>Board not found</p>;
  }

  return (
    <div className="bg-violet-200 w-screen h-screen p-6">
      <Link href="/">
        <HiArrowSmallLeft />
      </Link>
      <div className="bg-stone-50  rounded-xl h-[94%] p-4 pt-2 ">
        <div className="bg-stone-50  rounded-xl h-[94%] p-4 pt-6 ">
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col gap-1 justify-start items-start">
              <h1 className="text-2xl sm:text-3xl text-stone-950 ml-4 font-semibold">
                {board && board.name}
              </h1>
              <p className="ml-4">{board && board.desc}</p>
            </div>

            <button className="mr-4 text-md sm:text-lg bg-violet-800 px-6 py-3  rounded-full  text-stone-200   ml-4">
              New Boards
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 sm:gap-8 md:gap-12">
            <KanbanColumn
              class="min-w-[250px] max-w-full p-4 rounded-md"
              columnHeading={"To do"}
            />
            <KanbanColumn
              class="min-w-[250px] max-w-full  p-4 rounded-md"
              columnHeading={"In Progress"}
            />
            <KanbanColumn
              class="min-w-[250px] max-w-full  p-4 rounded-md"
              columnHeading={"Completed"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoardDetails;
