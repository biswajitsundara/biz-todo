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
  const [showError, setShowError] = useState(false);

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

  const resetError = () => {
    if (showError) {
      setShowError(false);
    }
  };

  const handleTaskChange = (event) => {
    setTaskName(event.target.value);
    resetError();
  };

  const handleDescChange = (event) => {
    setTaskDesc(event.target.value);
    resetError();
  };

  const handleCategoryChange = (event) => {
    setTaskCategory(event.target.value);
    resetError();
  };

  const resetModalData = () => {
    setTaskName("");
    setTaskDesc("");
    setTaskCategory("");
    setShowError(false);
  };

  const handleSave = () => {
    if (!taskname.trim() || !taskDesc.trim() || !taskCategory.trim()) {
      setShowError(true);
    } else {
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
    }
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
          {showError && (
            <p className="error-msg">
              Please fill in all the fields: {taskname.trim() ? "" : "name "}
              {taskCategory.trim() ? "" : "category "}
              {taskDesc.trim() ? "" : "details"}
            </p>
          )}
        </div>
        <div className="modal-body">
          <form>
            <input
              type="text"
              placeholder="Enter Task Name"
              name="task-summary"
              value={taskname}
              onChange={handleTaskChange}
              readOnly={isReadOnly}
              style={{
                borderColor: showError && !taskname.trim() ? "red" : "",
              }}
              required
            />

            <select
              name="task-category"
              value={taskCategory}
              onChange={handleCategoryChange}
              disabled={isReadOnly}
              style={{
                borderColor: showError && !taskCategory.trim() ? "red" : "",
              }}
            >
              <option value="">Select Category</option>
              <option value="Todos">Todos</option>
              <option value="Tasks">Tasks</option>
              <option value="Notes">Notes</option>
            </select>

            <textarea
              name="task-desc"
              rows={4}
              cols={50}
              placeholder="Enter Task Details"
              value={taskDesc}
              onChange={handleDescChange}
              readOnly={isReadOnly}
              style={{
                borderColor: showError && !taskDesc.trim() ? "red" : "",
              }}
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
