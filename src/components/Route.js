import { Routes, Route } from "react-router-dom";
import BlankPage from "../pages/BlankPage";
import ProjectGrid from "../pages/Projects";
import ProjectIdeasByDomain from "../pages/Ideas";
import SuggestionPage from "../pages/SuggestionsPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

function HomeRoutes() {
  return (
    <div style={{ padding: "20px", flex: 1 }}>
      <Routes>
        <Route path="blank" element={<BlankPage/>} />
        <Route path="home" element={<HomePage/>}/>
        <Route path="projects" element={<ProjectGrid/>} />
        <Route path="ideas" element={<ProjectIdeasByDomain/>}/>
        <Route path="suggestions" element={<SuggestionPage/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default HomeRoutes;