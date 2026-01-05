import { useParams } from "react-router-dom";
import dummyProducts from "../../data/dummyProducts";

export default function DetailProduct() {
  const { id } = useParams();

  const product = dummyProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p className="p-8">Produk tidak ditemukan</p>;
  }

  return (
    <div className="
      min-h-screen
      px-8 py-12
      bg-gradient-to-b from-pink-50 via-white to-pink-100
    ">
      {/* CARD */}
      <div className="
        max-w-5xl mx-auto
        bg-white
        rounded-3xl
        shadow-lg
        p-10
      ">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="
              w-80
              rounded-2xl
              shadow-md
              transition-all duration-300
              hover:scale-105
            "
          />

          {/* CONTENT */}
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {product.name}
            </h1>

            <p className="text-2xl text-pink-600 font-semibold">
              Rp {product.price}
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {product.isAvailable && (
              <a
                href={`https://wa.me/6285728472918?text=Halo,%20saya%20ingin%20membeli%20${product.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="
                    mt-8
                    bg-green-500
                    text-white
                    px-8 py-3
                    rounded-2xl
                    transition-all duration-300
                    hover:-translate-y-1 hover:scale-105
                    active:scale-95
                  "
                >
                  Beli via WhatsApp
                </button>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
