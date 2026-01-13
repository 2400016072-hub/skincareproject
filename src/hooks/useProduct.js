import { useEffect, useState } from "react";

const API_URL =
  "https://6958bce26c3282d9f1d5ab1d.mockapi.io/skincare/database/v1/product";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        setProducts(
          data.filter((p) => !p.isDeleted)
        );
      } catch (err) {
        setError("Gagal memuat produk");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}

