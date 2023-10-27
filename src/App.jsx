import React, { useState } from "react";
import "./app.css";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programaçãos",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);
  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default Home;
