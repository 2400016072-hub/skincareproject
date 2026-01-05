export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg">
      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
        {product.category}
      </span>

      <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
      <p className="text-gray-600">Rp {product.price}</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={onEdit}
          className="flex-1 bg-yellow-400 text-white rounded py-1"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 bg-red-500 text-white rounded py-1"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
