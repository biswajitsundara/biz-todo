import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import SideNav from "./components/Sidenav/SideNav";
import MainContent from "./components/Main/MainContent";
import Footer from "./components/Footer/Footer";
import { ModalProvider } from "./Hooks/ModalContext";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <ModalProvider>
      <Layout
        header={<Header />}
        sideNav={<SideNav />}
        main={<MainContent />}
        footer={<Footer />}
      />
      <Modal />
    </ModalProvider>
  );
}

export default App;
