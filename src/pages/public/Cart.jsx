import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const message = encodeURIComponent(
    `Hai gurl 💕 Aku mau pesan:\n\n` +
      cart
        .map(
          (item) =>
            `- ${item.name} x${item.qty} (Rp ${item.price * item.qty})`
        )
        .join("\n") +
      `\n\nTotal: Rp ${total}`
  );

  return (
    <div className="px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          Keranjang Belanja 🛒
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🛍️</p>
            <p className="text-gray-500 text-lg">
              Keranjang kamu masih kosong
            </p>
          </div>
        ) : (
          <>
 
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex gap-6 items-center
                    border rounded-2xl
                    p-4
                    hover:shadow-md
                    transition
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">
                      {item.qty} x Rp {item.price}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-pink-600">
                      Rp {item.price * item.qty}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="
                        text-sm text-red-500 mt-2
                        hover:underline
                      "
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t pt-6">
              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span className="text-pink-600">
                  Rp {total}
                </span>
              </div>

              <a
                href={`https://wa.me/6285728472918?text=${message}`}
                target="_blank"
                rel="noreferrer"
                onClick={clearCart}
              >
                <button
                  className="
                    mt-6 w-full
                    bg-gradient-to-r from-pink-500 to-pink-400
                    text-white
                    py-4
                    rounded-2xl
                    text-lg
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  Checkout via WhatsApp 💬
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
