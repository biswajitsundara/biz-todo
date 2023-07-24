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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveTaskData = (data) => {
    const taskInfo = [...taskData, data];
    setTaskData(taskInfo);
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
