import { Routes, Route, HashRouter } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
