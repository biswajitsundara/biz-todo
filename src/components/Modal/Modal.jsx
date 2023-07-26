import React, { useEffect, useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import { useModal } from "../../Hooks/ModalContext";

const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    saveTaskData,
    modalData,
    updateTaskData,
    isReadOnly,
  } = useModal();

  const [taskname, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [headingText, setHeadingText] = useState("");

  useEffect(() => {
    if (Object.keys(modalData).length != 0) {
      isReadOnly
        ? setHeadingText("Task Details")
        : setHeadingText("Edit Task Details");
      setTaskName(modalData.taskname);
      setTaskDesc(modalData.taskDesc);
      setTaskCategory(modalData.taskCategory);
    } else {
      setHeadingText("Add Task Details");
    }
  }, [modalData]);

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

    const modalDataExists = Object.keys(modalData).length !== 0;
    if (modalDataExists) {
      newData.id = modalData.id;
      updateTaskData(newData);
    } else {
      newData.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      saveTaskData(newData);
    }

    resetModalData();
    closeModal();
  };

  const handleCancel = () => {
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
          <h2>{headingText}</h2>
        </div>
        <div className="modal-body">
          <form>
            <input
              type="text"
              placeholder="Enter Task Summary"
              name="task-summary"
              value={taskname}
              onChange={handleTaskChange}
              readOnly={isReadOnly}
              required
            />

            <select
              name="task-category"
              value={taskCategory}
              onChange={handleCategoryChange}
              disabled={isReadOnly}
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
              readOnly={isReadOnly}
            />
          </form>
        </div>
        {/**End of Modal Body */}

        <div className="modal-footer">
          {!isReadOnly && (
            <>
              <button className="button btn-primary" onClick={handleSave}>
                {Object.keys(modalData).length != 0 ? "Update" : "Save"}
              </button>
              <button className="button btn-danger" onClick={handleCancel}>
                Cancel
              </button>
            </>
          )}

          {isReadOnly && (
            <button className="button btn-danger" onClick={handleCancel}>
              Close
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
