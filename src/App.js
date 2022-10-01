// import "./App.css";
import "../src/sass/style.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HelloScreen from "./screens/HelloScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMeScreen from "./screens/AboutMeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import SideNav from "./components/SideNav";
import MiniHeader from "./components/MiniHeader";
import { useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MiniHeader />
        <div className="content-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<HelloScreen />} />
            <Route path="/about" element={<AboutMeScreen />} />
            <Route path="/projects" element={<ProjectsScreen />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
