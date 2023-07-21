import Panel from "../Panel/Panel";

const MainContent = () => {
  return (
    <div data-testid="maincontent">
      <h1>Main Content</h1>
      <Panel taskid={"1"} taskname={"Task name"} taskdesc={"description"} />
    </div>
  );
};

export default MainContent;
