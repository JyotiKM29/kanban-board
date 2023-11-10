import KanbanBoard from "@/components/KanbanBoard";

function App() {
  
  return (
    <div className="bg-violet-100 w-screen  h-screen p-4">
      <h1 className="text-5xl text-center font-bold mt-4 overflow-hidden"> 🎯 Kanban-Board</h1>

      <KanbanBoard />
    
    </div>
  );
}

export default App;
