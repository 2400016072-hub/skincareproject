import { useSearchParams, Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import ProductCard from "../../components/public/ProductCard";

const categories = [
  { label: "Facial Wash", value: "facial wash" },
  { label: "Serum", value: "serum" },
  { label: "Moisturizer", value: "moisturizer" },
  { label: "Sunscreen", value: "sunscreen" },
];

export default function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const brand = searchParams.get("brand");

  const { products, loading, error } = useProduct();

  let filteredProducts = products;

  if (brand) {
    filteredProducts = filteredProducts.filter(
      (p) => p.brand?.toLowerCase() === brand.toLowerCase()
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category?.toLowerCase() === category.toLowerCase()
    );
  }

  if (loading) return <p className="text-center">Loading produk...</p>;
  if (error) return <p className="text-center">{error}</p>;

  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Produk Skincare</h2>

        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              to={`/products?brand=${brand || ""}&category=${cat.value}`}
              className="px-5 py-2 rounded-full bg-pink-100 text-pink-600"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Produk tidak ditemukan
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
