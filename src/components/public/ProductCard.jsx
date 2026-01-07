import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 w-72 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded transition-all duration-300 hover:scale-105"
      />

      <h3 className="mt-3 font-semibold">
        {product.name}
      </h3>

      <p className="text-gray-600">
        Rp {product.price}
      </p>

      {product.isAvailable ? (
        <Link to={`/products/${product.id}`}>
          <button className="mt-3 w-full bg-green-500 text-white py-2 rounded transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            Lihat Detail
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="mt-3 w-full bg-gray-400 text-white py-2 rounded"
        >
          Stok Habis
        </button>
      )}
    </div>
  );
}
