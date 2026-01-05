import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCreate from "./pages/admin/AdminCreate";
import AdminEdit from "./pages/admin/AdminEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create" element={<AdminCreate />} />
        <Route path="/admin/edit/:id" element={<AdminEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
