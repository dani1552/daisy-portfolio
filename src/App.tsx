import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import ValueDetailCard from "./pages/ValueDetailCard";
import ProjectDetailCard from "./pages/ProjectDetailCard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/values/:slug" element={<ValueDetailCard />} />
        <Route path="/projects/:slug" element={<ProjectDetailCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
