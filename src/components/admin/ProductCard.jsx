export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-pink-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-pink-400"
    >
      <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600">
        {product.category}
      </span>

      <h3 className="font-semibold text-pink-700 text-lg">
        {product.name}
      </h3>

      <p className="text-pink-500 mb-4">
        Rp {product.price}
      </p>

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="flex-1 bg-pink-400 hover:bg-pink-500 text-white rounded-lg py-2 transition"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 bg-pink-600 hover:bg-pink-700 text-white rounded-lg py-2 transition"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
