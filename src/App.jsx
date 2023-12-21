import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import Tasks from "./components/Tasks";

import "./app.css";

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

   const handleTaskClick = (taskId) => {
      const newTask = tasks.map((task) => {
         if (task.id === taskId) return { ...task, completed: !task.completed };

         return task;
      });

      setTasks(newTask);
   };

   const handleTaskAddition = (taskTitle) => {
      const newTasks = [
         ...tasks,
         {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
         },
      ];

      setTasks(newTasks);
   };

   const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter((task) => task.id !== taskId);

      setTasks(newTasks);
   };

   return (
      <Router>
         <div className="container">
            <Header />
            <Route
               path="/"
               exact
               render={() => {
                  return (
                     <>
                        <AddTask handleTaskAddition={handleTaskAddition} />
                        <Tasks
                           tasks={tasks}
                           handleTaskClick={handleTaskClick}
                           handleTaskDeletion={handleTaskDeletion}
                        />
                     </>
                  );
               }}
            />
            <Route path="/:taskTitle" exact component={TaskDetails} />
         </div>
      </Router>
   );
};

export default Home;
