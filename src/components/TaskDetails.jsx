import { useParams } from "react-router-dom";
import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
   const params = useParams();

   return (
      <>
         <div className="back-button-container">
            <Button>Voltar</Button>
         </div>

         <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
               numquam et eaque at iusto totam.
            </p>
         </div>
      </>
   );
};

export default TaskDetails;
