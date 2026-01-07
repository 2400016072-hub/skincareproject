import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/brands/Logo.png";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalItem = (cart || []).reduce(
    (total, item) => total + item.qty,
    0
  );

  // 🔥 ANIMASI STATE
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalItem > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 400);
      return () => clearTimeout(timer);
    }
  }, [totalItem]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b relative">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img
          src={Logo}
          alt="Glow S-Class Logo"
          className="h-10 hover:scale-105 transition"
        />
      </Link>

      {/* MENU */}
      <div className="flex gap-6 items-center">

        <Link to="/" className="hover:text-pink-500">Home</Link>

        {/* PRODUCTS */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="hover:text-pink-500"
          >
            Products
          </button>

          {open && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow p-3 w-52 z-50">
              {[
                ["facial-wash", "Facial Wash"],
                ["serum", "Serum"],
                ["moisturizer", "Moisturizer"],
                ["sunscreen", "Sunscreen"],
              ].map(([slug, label]) => (
                <Link
                  key={slug}
                  to={`/products?category=${slug}`}
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 rounded hover:bg-pink-100"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:text-pink-500">Contact</Link>

        {/* 🛒 CART */}
        <Link to="/cart" className="relative text-2xl">
          🛒
          {totalItem > 0 && (
            <span
              className={`
                absolute -top-2 -right-3
                bg-pink-500 text-white text-xs
                w-5 h-5 flex items-center justify-center
                rounded-full
                ${animate ? "cart-pop" : ""}
              `}
            >
              {totalItem}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
