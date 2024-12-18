import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Sidebar from "./components/AdminPanel/Topbar";
import Topbar from "./components/AdminPanel/Sidebar";
// import Footer from "./components/AdminPanel/Footer";

const App = () => {
  return (
    <Router>
      <Topbar />

      <Sidebar />

      <AppRoutes />

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
