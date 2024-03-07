import { useState } from "react";
import { Card } from "./components/Card";
import { toast } from "sonner";

export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask((prevState) => [
        ...prevState,
        { id: Math.random(), name: newTask },
      ]);
      setNewTask("");
      toast.success("Task criada com sucesso");
    }
  };

  const handleResetTasks = () => {
    setTask([]);
  };

  const removeTask = (id) => {
    const newTasks = [...task];
    const filteredTask = newTasks.filter((tasks) =>
      tasks.id !== id ? tasks : null
    );
    setTask(filteredTask);
  };

  return (
    <div className="h-screen flex flex-col items-center mt-10 ">
      <div className="bg-white rounded-xl w-96 p-6 flex flex-col gap-4">
        <h1 className="flex justify-center text-2xl text-gray-800 ">
          toDo List
        </h1>
        <input
          className="p-2 border rounded-xl outline-none"
          type="text"
          placeholder="Insira a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <div className="flex justify-center gap-x-8">
          <button
            className="border p-2 rounded-xl bg-green-400 hover:bg-green-300"
            type="button"
            onClick={handleAddTask}
          >
            Adicionar
          </button>
          <button
            className="border p-2 rounded-xl hover:bg-red-300"
            type="button"
            onClick={handleResetTasks}
          >
            Resetar Lista
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center">
        {task.map((tasks) => (
          <Card key={tasks.id} {...tasks} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}
