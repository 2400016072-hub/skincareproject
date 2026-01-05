import ProductCard from "../../components/public/ProductCard";
import dummyProducts from "../../data/dummyProducts";

export default function Home() {
  return (
    <div className="px-8 py-6">
      <h2 className="text-2xl font-bold mb-6">
        Katalog Skincare
      </h2>

      <div className="flex gap-6 flex-wrap">
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
