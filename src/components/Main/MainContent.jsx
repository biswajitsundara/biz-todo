import Panel from "../Panel/Panel";
import { useModal } from "../../Hooks/ModalContext";
import "./MainContent.css";

const MainContent = () => {
  const { filteredTaskData } = useModal();

  if (filteredTaskData.length < 1) {
    return (
      <div data-testid="maincontent">
        <div className="noData">
          <h1 className="nodataHeader">You don't have any tasks</h1>
          <img
            src="./../../assets/addnotes.svg"
            alt="add notes"
            className="noteImage"
          />
        </div>
      </div>
    );
  }

  return (
    <div data-testid="maincontent">
      {filteredTaskData.map((task) => (
        <Panel
          key={task.id}
          taskid={task.id}
          taskname={task.taskname}
          taskdesc={task.taskDesc}
          taskCategory={task.taskCategory}
        />
      ))}
    </div>
  );
};

export default MainContent;
