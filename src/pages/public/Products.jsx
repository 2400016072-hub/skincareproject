import { useSearchParams } from "react-router-dom";
import dummyProducts from "../../data/dummyProducts";
import ProductCard from "../../components/public/ProductCard";
import Navbar from "../../components/public/Navbar";

export default function Products() {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand");

  const filteredProducts = brand
    ? dummyProducts.filter(
        (product) => product.brand === brand
      )
    : dummyProducts;

  return (
    <>
      <Navbar />

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
