import { useState } from "react";
import { productsData } from "../../data/products";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminHeader from "../../components/admin/AdminHeader";
import ProductCard from "../../components/admin/ProductCard";
import AdminModal from "../../components/admin/AdminModal";
import FormData from "../../components/admin/FormData";

export default function AdminDashboard() {
  const [products, setProducts] = useState(productsData);
  const [selected, setSelected] = useState(null);
  const [isAdd, setIsAdd] = useState(false);

  const handleSave = (updatedData) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === selected.id
          ? { ...p, ...updatedData, price: Number(updatedData.price) }
          : p
      )
    );
    setSelected(null);
  };

  const handleAdd = (newData) => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newData,
        price: Number(newData.price),
        isDeleted: false,
      },
    ]);
    setIsAdd(false);
  };

  const handleDelete = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isDeleted: true } : p
      )
    );
  };

  const handleRestore = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isDeleted: false } : p
      )
    );
  };

  return (
    <AdminLayout>
      <AdminHeader />

      <button
        onClick={() => setIsAdd(true)}
        className="mb-6 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl font-semibold transition"
      >
        + Tambah Produk
      </button>

      <h2 className="text-xl font-semibold mb-4">Produk Aktif</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {products
          .filter((p) => !p.isDeleted)
          .map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onEdit={() => setSelected(p)}
              onDelete={() => handleDelete(p.id)}
            />
          ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Produk Terhapus</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products
          .filter((p) => p.isDeleted)
          .map((p) => (
            <div
              key={p.id}
              className="bg-gray-100 rounded-xl p-4 shadow"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-600">Rp {p.price}</p>

              <button
                onClick={() => handleRestore(p.id)}
                className="mt-3 bg-green-600 text-white rounded px-4 py-1"
              >
                Restore
              </button>
            </div>
          ))}
      </div>

      <AdminModal
        show={!!selected}
        title="Edit Produk"
        onClose={() => setSelected(null)}
      >
        {selected && (
          <FormData
            defaultValue={selected}
            onSave={handleSave}
          />
        )}
      </AdminModal>

      <AdminModal
        show={isAdd}
        title="Tambah Produk"
        onClose={() => setIsAdd(false)}
      >
        <FormData onSave={handleAdd} />
      </AdminModal>
    </AdminLayout>
  );
}
