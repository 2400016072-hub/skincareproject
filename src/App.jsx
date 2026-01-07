import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/public/Home";
import Products from "./pages/public/Products";
import Contact from "./pages/public/Contact";
import DetailProduct from "./pages/public/DetailProduct";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCreate from "./pages/admin/AdminCreate";
import AdminEdit from "./pages/admin/AdminEdit";

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/create" element={<AdminCreate />} />
      <Route path="/admin/edit/:id" element={<AdminEdit />} />

    </Routes>
  );
}

export default App;
