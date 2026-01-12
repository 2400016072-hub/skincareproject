import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
<div className="min-h-screen bg-pink-50 p-6">
  <div className="bg-white/80 p-6 rounded-2xl shadow">
    {children}
  </div>
</div>

    </>
  );
}
