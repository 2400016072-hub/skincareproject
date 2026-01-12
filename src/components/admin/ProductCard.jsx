export default function ProductCard({
  product,
  onEdit,
  onDelete,
  onUpdateStock,
}) {
  const stock = Number(product.stock) || 0;

  return (
    <div className="bg-white rounded-2xl p-5 border border-pink-200">
      <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600">
        {product.category}
      </span>

      <h3 className="font-semibold text-pink-700 text-lg">{product.name}</h3>

      <p className="text-pink-500">Rp {product.price}</p>

      <p
        className={`text-sm mb-3 ${
          stock === 0 ? "text-red-500" : "text-gray-600"
        }`}
      >
        Stok: {stock}
      </p>

      {/* KONTROL STOK */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => onUpdateStock(product, stock + 1)}
          className="flex-1 bg-green-500 hover:bg-green-600
          text-white rounded py-1"
        >
          + Stok
        </button>

        <button
          onClick={() => onUpdateStock(product, Math.max(stock - 1, 0))}
          disabled={stock === 0}
          className={`flex-1 rounded py-1 text-white ${
            stock === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          - Stok
        </button>
      </div>

      {/* AKSI */}
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="flex-1 bg-pink-400 hover:bg-pink-500
          text-white rounded py-2"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 bg-pink-600 hover:bg-pink-700
          text-white rounded py-2"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
