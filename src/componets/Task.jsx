import "./Task.css";

const Task = ({ task }) => {
  return <div className="task-conatiner">{task.title}</div>;
};

export default Task;
