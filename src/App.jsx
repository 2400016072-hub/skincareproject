import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/public/Home";
import Products from "./pages/public/Products";
import Contact from "./pages/public/Contact";
import DetailProduct from "./pages/public/DetailProduct";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCreate from "./pages/admin/AdminCreate";
import AdminEdit from "./pages/admin/AdminEdit";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 PUBLIC */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/create" element={<AdminCreate />} />
      <Route path="/admin/edit/:id" element={<AdminEdit />} />

      {/* GLOBAL 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
