import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import ProjectDetailCard from "./pages/ProjectDetailCard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
