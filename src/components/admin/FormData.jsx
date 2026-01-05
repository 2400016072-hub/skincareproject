export default function FormData({ defaultValue = {}, onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updated = Object.fromEntries(formData.entries());

    onSave(updated); // KIRIM KE DASHBOARD
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        defaultValue={defaultValue.name}
        placeholder="Nama"
        className="border p-2 w-full rounded"
        required
      />

      <input
        name="category"
        defaultValue={defaultValue.category}
        placeholder="Kategori"
        className="border p-2 w-full rounded"
        required
      />

      <input
        name="price"
        type="number"
        defaultValue={defaultValue.price}
        placeholder="Harga"
        className="border p-2 w-full rounded"
        required
      />

      {/* 🔑 INI PENTING */}
      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-2 rounded"
      >
        Simpan
      </button>
    </form>
  );
}
