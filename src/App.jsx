import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./layout/Layout";
import PageTransition from "./components/PageTransition";

import Home from "./pages/public/Home";
import Products from "./pages/public/Products";
import Contact from "./pages/public/Contact";
import DetailProduct from "./pages/public/DetailProduct";
import Cart from "./pages/public/Cart";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCreate from "./pages/admin/AdminCreate";
import AdminEdit from "./pages/admin/AdminEdit";

import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/login"
          element={
            user ? (
              user.role === "admin" ? (
                <Navigate to="/admin" replace />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <PageTransition>
                <Login />
              </PageTransition>
            )
          }
        />

        <Route
          element={
            <ProtectedRoute role="user">
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/products"
            element={
              <PageTransition>
                <Products />
              </PageTransition>
            }
          />

          <Route
            path="/products/:id"
            element={
              <PageTransition>
                <DetailProduct />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="/cart"
            element={
              <PageTransition>
                <Cart />
              </PageTransition>
            }
          />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create"
          element={
            <ProtectedRoute role="admin">
              <AdminCreate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute role="admin">
              <AdminEdit />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
