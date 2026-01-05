import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">Glow S-Class Admin</h1>
      <div className="space-x-4">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/create">Tambah Produk</Link>
      </div>
    </nav>
  );
}
