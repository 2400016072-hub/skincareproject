import { motion } from "framer-motion";

export default function ProductCard({
  product,
  onEdit,
  onDelete,
  onUpdateStock,
}) {
  const stock = product.stock ? Number(product.stock) : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-5 border border-pink-200"
    >
      <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600">
        {product.category}
      </span>

      <h3 className="font-semibold text-pink-700 text-lg">{product.name}</h3>
      <p className="text-pink-500">Rp {product.price}</p>

      {/* Tampilan Stok */}
      <p
        className={`text-sm mb-3 ${
          stock === 0 ? "text-red-500" : "text-gray-600"
        }`}
      >
        Stok: {stock}
      </p>

      {/* Tombol Update Stok (TETAP ADA) */}
      <div className="flex gap-2 mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => onUpdateStock(product, stock + 1)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded py-1"
        >
          + Stok
        </motion.button>

        <motion.button
          whileHover={stock === 0 ? {} : { scale: 1.05 }}
          whileTap={stock === 0 ? {} : { scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => onUpdateStock(product, Math.max(stock - 1, 0))}
          disabled={stock === 0}
          className={`flex-1 rounded py-1 text-white ${
            stock === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          - Stok
        </motion.button>
      </div>

      {/* Tombol Edit & Hapus (TETAP ADA) */}
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={onEdit}
          className="flex-1 bg-pink-400 hover:bg-pink-500 text-white rounded py-2"
        >
          Edit
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={onDelete}
          className="flex-1 bg-pink-600 hover:bg-pink-700 text-white rounded py-2"
        >
          Hapus
        </motion.button>
      </div>
    </motion.div>
  );
}
