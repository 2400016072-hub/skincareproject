export default function EditModal({ isOpen, product, onClose, onSave }) {
  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    onSave({
      ...product,
      name: formData.get("name"),
      category: formData.get("category"),
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")), // 🔥 TAMBAHAN
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold">Edit Produk</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            defaultValue={product.name}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="category"
            defaultValue={product.category}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="price"
            type="number"
            defaultValue={product.price}
            className="w-full border p-2 rounded"
            required
          />

          {/* ✅ INPUT STOK */}
          <input
            name="stock"
            type="number"
            defaultValue={product.stock}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
