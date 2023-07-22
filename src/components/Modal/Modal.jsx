import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [taskname, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleTaskChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSave = () => {
    console.log("Modal saved");
  };

  const handleCancel = () => {
    console.log("Modal Cancelled");
  };

  return (
    <div className="modal" data-testid="modal">
      <div className="modal-content">
        <div className="titleCloseBtn">
          <button onClick={handleCancel}>X</button>
        </div>
        <div className="modal-title">
          <h2>Add Task</h2>
        </div>
        <div className="modal-body">
          <form>
            <input
              type="text"
              placeholder="Enter Task Summary"
              name="task-summary"
              value={taskname}
              onChange={handleTaskChange}
              required
            />

            <select name="dropdown">
              <option value="option1">Todos</option>
              <option value="option2">Tasks</option>
              <option value="option3">Notes</option>
            </select>

            <textarea
              name="task-desc"
              rows={4}
              cols={50}
              placeholder="Enter Task Details"
              value={taskDesc}
              onChange={handleDescChange}
            />
          </form>
        </div>
        {/**End of Modal Body */}

        <div className="modal-footer">
          <>
            <button className="button btn-primary" onClick={handleSave}>
              Save
            </button>
            <button className="button btn-danger" onClick={handleCancel}>
              Cancel
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default Modal;
