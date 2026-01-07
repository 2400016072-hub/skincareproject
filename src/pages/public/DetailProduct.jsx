import { useParams } from "react-router-dom";
import { useState } from "react";
import dummyProducts from "../../data/dummyProducts";
import { useCart } from "../../context/CartContext";

export default function DetailProduct() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = dummyProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p className="p-8">Produk tidak ditemukan</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <div className="px-8 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow p-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          <img
            src={product.image}
            alt={product.name}
            className={`w-80 rounded-xl transition-all duration-300
              ${added ? "scale-105" : ""}
            `}
          />

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl text-pink-600 mt-2">
              Rp {product.price}
            </p>
            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">

              <button
                onClick={handleAddToCart}
                className={`
                  px-6 py-2 rounded-xl text-white
                  transition-all duration-300
                  ${added
                    ? "bg-green-500 scale-110"
                    : "bg-pink-500 hover:scale-105"}
                `}
              >
                {added ? "✓ Ditambahkan" : "+ Keranjang"}
              </button>

              <a
                href={`https://wa.me/6285728472918?text=Halo,%20saya%20ingin%20membeli%20${product.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-green-500 text-white px-6 py-2 rounded-xl hover:scale-105 transition">
                  Beli via WhatsApp
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
