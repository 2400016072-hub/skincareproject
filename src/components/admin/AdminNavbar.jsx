import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-pink-500 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      
      <h1 className="font-bold text-lg">
        Glow S-Class Admin
      </h1>

      <div className="flex gap-6 items-center">

        <Link
          to="/admin"
          className="hover:text-pink-200 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/create"
          className="hover:text-pink-200 transition"
        >
          Tambah Produk
        </Link>

        <button
          onClick={handleLogout}
          className="bg-white text-pink-500 px-4 py-1.5 rounded-xl font-semibold hover:bg-pink-100 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
