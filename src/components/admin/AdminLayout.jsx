import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-pink-50">
      <AdminNavbar />
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
