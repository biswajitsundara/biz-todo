import Panel from "../Panel/Panel";
import { useModal } from "../../Hooks/ModalContext";
import "../../../src/assets/addnotes.svg";
import "./MainContent.css";

const MainContent = () => {
  const { taskData } = useModal();

  if (taskData.length < 1) {
    return (
      <div data-testid="maincontent">
        <div className="noData">
          <h1 className="nodataHeader">You don't have any tasks</h1>
          <img
            src="../../../src/assets/addnotes.svg"
            alt="add notes"
            className="noteImage"
          />
        </div>
      </div>
    );
  }

  return (
    <div data-testid="maincontent">
      {taskData.map((tasks) => (
        <Panel
          key={tasks.id}
          taskid={tasks.id}
          taskname={tasks.taskname}
          taskdesc={tasks.taskDesc}
          taskCategory={tasks.taskCategory}
        />
      ))}
    </div>
  );
};

export default MainContent;
