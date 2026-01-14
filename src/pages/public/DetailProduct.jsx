import { useParams } from "react-router-dom";
import { useState } from "react";
import useProduct from "../../hooks/useProduct";
import { useCart } from "../../context/CartContext";

export default function DetailProduct() {
  const { id } = useParams();
  const { products, loading } = useProduct();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (loading) {
    return <p className="p-8">Loading...</p>;
  }

  // Pastikan ID tipe datanya sama (string vs number)
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return <p className="p-8">Produk tidak ditemukan</p>;
  }

  // Ganti 'product.stok' jadi 'product.stock' sesuai data dari Admin/API
  const stockCount = product.stock ? Number(product.stock) : 0;

  const handleAddToCart = () => {
    if (stockCount === 0) return;

    addToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="px-8 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow p-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 rounded-xl"
        />

        <h1 className="text-3xl font-bold mt-6">{product.name}</h1>

        <p className="text-xl text-pink-600">Rp {product.price}</p>

        {/* TAMPILKAN STOK */}
        <p className="mt-2 text-sm">Stok: {stockCount}</p>

        <button
          onClick={handleAddToCart}
          disabled={stockCount === 0}
          className={`
            mt-6 px-6 py-2 rounded-xl text-white
            ${
              stockCount === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-pink-500 hover:scale-105"
            }
          `}
        >
          {stockCount === 0 ? "Stok Habis" : "+ Keranjang"}
        </button>
      </div>
    </div>
  );
}
