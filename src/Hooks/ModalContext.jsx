import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [taskData, setTaskData] = useState([]);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const editTaskData = (id) => {
    const taskInfo = taskData.filter((task) => task.id === id);
    setModalData(taskInfo[0]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalData({});
    setIsModalOpen(false);
    setIsReadOnly(false);
  };

  const saveTaskData = (data) => {
    const taskInfo = [...taskData, data];
    setTaskData(taskInfo);
  };

  const readTaskData = (id) => {
    const taskInfo = taskData.filter((task) => task.id === id);
    setModalData(taskInfo[0]);
    setIsModalOpen(true);
    setIsReadOnly(true);
  };

  const updateTaskData = (data) => {
    const updatedTaskData = taskData.map((task) =>
      data.id == task.id ? data : task
    );

    setTaskData(updatedTaskData);
  };

  const deleteTaskData = (id) => {
    const updatedTaskData = taskData.filter((task) => task.id != id);
    setTaskData(updatedTaskData);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalData,
        taskData,
        isReadOnly,
        openModal,
        editTaskData,
        updateTaskData,
        readTaskData,
        closeModal,
        saveTaskData,
        deleteTaskData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
