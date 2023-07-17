import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import SideNav from "./components/Sidenav/SideNav";
import MainContent from "./components/Main/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout
      header={<Header />}
      sideNav={<SideNav />}
      main={<MainContent />}
      footer={<Footer />}
    />
  );
}

export default App;
