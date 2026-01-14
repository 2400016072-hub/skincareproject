import { useState, useEffect } from "react";

export default function FormData({ defaultValue, onSave }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stok: 0,
  });

  useEffect(() => {
    if (defaultValue) {
      setForm({
        name: defaultValue.name || "",
        category: defaultValue.category || "",
        price: defaultValue.price || "",
        stok: defaultValue.stok ?? 0,
      });
    }
  }, [defaultValue]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stok: Number(form.stok),
      isDeleted: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nama Produk"
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Kategori"
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Harga"
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="stok"
        type="number"
        value={form.stok}
        onChange={handleChange}
        placeholder="Stok Produk"
        className="w-full border p-2 rounded"
        min="0"
        required
      />

      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600
        text-white py-2 rounded-xl font-semibold transition"
      >
        Simpan
      </button>
    </form>
  );
}
