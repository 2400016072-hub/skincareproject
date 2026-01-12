export default function AdminHeader() {
  return (
    <div className="bg-pink-500 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-lg">Glow S-Class Admin</h1>

      <div className="flex gap-4">
        <a className="hover:text-pink-200">Dashboard</a>
        <a className="hover:text-pink-200">Tambah Produk</a>
      </div>
    </div>
  );
}
