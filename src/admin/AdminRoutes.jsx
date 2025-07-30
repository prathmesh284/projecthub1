import { Routes, Route } from "react-router-dom";
import AdminBlankPage from "./AdminBlankPage";
import AdminAddProject from "./AdminAddProject";

function AdminRoutes() {
  return (
    <div style={{ padding: "20px", flex: 1 }}>
      <Routes>
        <Route path="blank" element={<AdminBlankPage/>} />
        <Route path="projects" element={<AdminAddProject/>} />
      </Routes>
    </div>
  )
}

export default AdminRoutes;