import { useParams } from "react-router-dom";
import Navbar from "../../components/public/Navbar";
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
    <>
      <Navbar />

      <div className="px-8 py-6 flex gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 rounded"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-xl text-pink-600 mt-2">
            Rp {product.price}
          </p>

          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          {product.isAvailable && (
            <a
              href={`https://wa.me/6282184677951?text=Halo,%20saya%20ingin%20membeli%20${product.name}`}
              target="_blank"
            >
              <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded">
                Beli via WhatsApp
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
