import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
