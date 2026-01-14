import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const stock = product.stock ? Number(product.stock) : 0;

  return (
    <div className="border rounded-lg p-4 w-72 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded transition-all duration-300 hover:scale-105"
      />

      <h3 className="mt-3 font-semibold text-lg text-pink-700">
        {product.name}
      </h3>

      <p className="text-pink-500 font-bold">
        Rp {Number(product.price).toLocaleString("id-ID")}
      </p>

      {/* TAMPILKAN JUMLAH STOK AGAR JELAS */}
      <p
        className={`text-sm mt-1 ${
          stock > 0 ? "text-gray-500" : "text-red-500"
        }`}
      >
        Stok: {stock}
      </p>

      {/* LOGIKA BARU: Cek jika stock lebih dari 0 */}
      {stock > 0 ? (
        <Link to={`/products/${product.id}`}>
          <button className="mt-3 w-full bg-green-500 text-white py-2 rounded transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            Lihat Detail
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="mt-3 w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
        >
          Stok Habis
        </button>
      )}
    </div>
  );
}
