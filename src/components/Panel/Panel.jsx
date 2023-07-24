import "./Panel.css";
import { useModal } from "../../Hooks/ModalContext";

const Panel = ({ taskid, taskname, taskCategory, taskdesc }) => {
  const { deleteTaskData } = useModal();

  const panelTypes = {
    todos: "info",
    tasks: "primary",
    notes: "secondary",
  };

  const handleEditTask = (taskid) => {
    console.log("Task is edited");
  };

  const handleDeleteTask = (taskid) => {
    deleteTaskData(taskid);
  };

  const handleReadTask = (taskid) => {
    console.log("task is read");
  };

  return (
    <>
      <div className={`panel panel-${panelTypes[taskCategory]}`}>
        <div className="panel-header">
          <h4>{taskname}</h4>
        </div>
        <div className="panel-body">{taskdesc}</div>
        <div className="panel-footer">
          <div className="icons">
            <i
              className="fa fa-edit"
              onClick={() => {
                handleEditTask(taskid);
              }}
            ></i>
            <i
              className="fa fa-trash"
              onClick={() => {
                handleDeleteTask(taskid);
              }}
            ></i>
            <i className="fa fa-eye" onClick={() => handleReadTask(taskid)}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
