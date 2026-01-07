import { useState } from "react";
import EditModal from "./EditModal";

export default function DataTable({ products, setProducts }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSave = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {item.category}
            </span>

            <h3 className="text-lg font-semibold mt-2">
              {item.name}
            </h3>

            <p>Rp {item.price}</p>

            <button
              onClick={() => setSelectedProduct(item)}
              className="mt-3 w-full bg-yellow-400 text-white py-2 rounded"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      <EditModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSave={(data) => {
          handleSave(data);
          setSelectedProduct(null);
        }}
      />
    </>
  );
}
