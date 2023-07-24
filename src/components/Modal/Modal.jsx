import React, { useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import { useModal } from "../../Hooks/ModalContext";

const Modal = () => {
  const { isModalOpen, closeModal, saveTaskData } = useModal();

  const [taskname, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const handleTaskChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setTaskCategory(event.target.value);
  };

  const resetModalData = () => {
    setTaskName("");
    setTaskDesc("");
    setTaskCategory("");
  };

  const handleSave = () => {
    const newData = { taskname, taskDesc, taskCategory };
    newData.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    saveTaskData(newData);
    resetModalData();
    closeModal();
  };

  const handleCancel = () => {
    console.log("Modal Cancelled");
    resetModalData();
    closeModal();
  };

  if (!isModalOpen) {
    return null; // Hide the modal if it's not open
  }

  return ReactDOM.createPortal(
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

            <select
              name="task-category"
              value={taskCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="todos">Todos</option>
              <option value="tasks">Tasks</option>
              <option value="notes">Notes</option>
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
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
