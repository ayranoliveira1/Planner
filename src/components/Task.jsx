import { CgClose, CgInfo } from "react-icons/cg";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
   return (
      <div
         className="task-container"
         style={task.completed ? { borderLeft: "6px solid #ee6e83" } : {}}
      >
         <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
         </div>

         <div className="buttons-container">
            <button
               onClick={() => handleTaskDeletion(task.id)}
               className="remove-task-button"
            >
               <CgClose />
            </button>

            <button className="see-task-details-button">
               <CgInfo />
            </button>
         </div>
      </div>
   );

   // return <div className="task-container">{task.title}</div>;
};

export default Task;
