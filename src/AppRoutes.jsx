import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import SimpleCrud from "./pages/jsonCrudSimple/SimpleCrud";
import Accordion from "./pages/accordion/Accordion";
import Counter from "./pages/counter/Counter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/crud/simplecrud" element={<SimpleCrud />} />
      <Route path="/operation/Accordion" element={<Accordion />} />
      <Route path="/events" element={<Events />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/operation/counter" element={<Counter/>} />
    </Routes>
  );
};

export default AppRoutes;
