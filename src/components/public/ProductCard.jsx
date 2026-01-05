import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 w-72">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded"
      />

      <h3 className="mt-3 font-semibold">
        {product.name}
      </h3>

      <p className="text-gray-600">
        Rp {product.price}
      </p>

      {product.isAvailable ? (
        <Link to={`/product/${product.id}`}>
          <button className="mt-3 w-full bg-green-500 text-white py-2 rounded">
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
