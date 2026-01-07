import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg shadow">
          {children}
        </div>
      </div>
    </>
  );
}
