import AdminNavbar from "../../components/admin/AdminNavbar";
import FormData from "../../components/admin/FormData";

export default function AdminCreate() {
  const handleSubmit = (data) => {
    console.log("Tambah produk:", data);
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-xl font-bold mb-4">Tambah Produk</h2>
        <FormData onSave={handleSubmit} />
      </div>
    </>
  );
}
