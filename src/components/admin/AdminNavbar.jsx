export default function AdminNavbar() {
  return (
    <div className="bg-pink-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">
        Glow S-Class Admin
      </h1>

      <div className="flex gap-4">
        <a className="hover:text-pink-200 cursor-pointer">
          Dashboard
        </a>
        <a className="hover:text-pink-200 cursor-pointer">
          Tambah Produk
        </a>
      </div>
    </div>
  );
}
