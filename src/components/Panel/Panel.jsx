import "./Panel.css";

const Panel = ({ taskid, taskname, taskdesc }) => {
  const handleEditTask = (taskid) => {
    console.log("Task is edited");
  };

  const handleDeleteTask = (taskid) => {
    console.log("task is deleted");
  };

  const handleReadTask = (taskid) => {
    console.log("task is read");
  };

  return (
    <>
      <div className="panel panel-info">
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
