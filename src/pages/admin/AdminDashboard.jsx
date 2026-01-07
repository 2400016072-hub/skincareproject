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

  const handleSave = (updatedData) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === selected.id
          ? { ...p, ...updatedData, price: Number(updatedData.price) }
          : p
      )
    );
    setSelected(null); // tutup modal
  };

  return (
    <AdminLayout>
      <AdminHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onEdit={() => setSelected(p)}
            onDelete={() =>
              setProducts(products.filter((item) => item.id !== p.id))
            }
          />
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
    </AdminLayout>
  );
}
