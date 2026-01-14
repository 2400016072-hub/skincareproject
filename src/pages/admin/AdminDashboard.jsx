import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import ProductCard from "../../components/admin/ProductCard";
import AdminModal from "../../components/admin/AdminModal";
import FormData from "../../components/admin/FormData";

const API_URL =
  "https://6958bce26c3282d9f1d5ab1d.mockapi.io/skincare/database/v1/product";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isAdd, setIsAdd] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Gagal fetch produk", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ FIXED HANDLE SAVE
  const handleSave = async (updatedProduct) => {
    try {
      await fetch(`${API_URL}/${selected.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...selected,
          ...updatedProduct,
          stock: Number(updatedProduct.stock) ?? selected.stock ?? 0,
        }),
      });

      setSelected(null);
      fetchProducts();
    } catch (err) {
      console.error("Gagal update produk", err);
    }
  };

  const handleAdd = async (newData) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newData,
          price: Number(newData.price),
          stock: Number(newData.stock) || 0,
          isDeleted: false,
        }),
      });

      setIsAdd(false);
      fetchProducts();
    } catch (err) {
      console.error("Gagal tambah produk", err);
    }
  };

  const handleDelete = async (product) => {
    try {
      await fetch(`${API_URL}/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          isDeleted: true,
        }),
      });

      fetchProducts();
    } catch (err) {
      console.error("Gagal hapus produk", err);
    }
  };

  const handleRestore = async (product) => {
    try {
      await fetch(`${API_URL}/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          isDeleted: false,
        }),
      });

      fetchProducts();
    } catch (err) {
      console.error("Gagal restore produk", err);
    }
  };

  const handleUpdateStock = async (product, newStock) => {
    try {
      await fetch(`${API_URL}/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          stock: newStock,
        }),
      });

      fetchProducts();
    } catch (err) {
      console.error("Gagal update stok", err);
    }
  };

  return (
    <AdminLayout>
      {/* 🔙 TOMBOL KEMBALI */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 hover:bg-gray-300
        text-gray-700 px-4 py-2 rounded-xl font-medium"
      >
        ← Kembali
      </button>

      {/* ➕ TAMBAH PRODUK */}
      <button
        onClick={() => setIsAdd(true)}
        className="mb-6 bg-pink-500 hover:bg-pink-600
        text-white px-4 py-2 rounded-xl font-semibold"
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
              onDelete={() => handleDelete(p)}
              onUpdateStock={handleUpdateStock}
            />
          ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Produk Terhapus</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products
          .filter((p) => p.isDeleted)
          .map((p) => (
            <div key={p.id} className="bg-gray-100 rounded-xl p-4 shadow">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-600">Rp {p.price}</p>

              <button
                onClick={() => handleRestore(p)}
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
        {selected && <FormData defaultValue={selected} onSave={handleSave} />}
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
