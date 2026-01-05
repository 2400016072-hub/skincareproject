import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/brands/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b relative">
      
      <Link to="/" className="flex items-center">
        <img
          src={Logo}
          alt="Glow S-Class Logo"
          className="h-10 w-auto object-contain hover:scale-105 transition"
        />
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-pink-500">
          Home
        </Link>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="hover:text-pink-500 font-medium"
          >
            Products
          </button>

          {open && (
            <div
              className="
                absolute top-10 left-1/2 -translate-x-1/2
                bg-white rounded-2xl shadow-xl
                px-3 py-3 w-52
                animate-dropdown
                z-50
              "
            >
              <Link
                to="/products?category=facial-wash"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 my-1 rounded-full
                           hover:bg-pink-100 hover:text-pink-600
                           transition-all duration-300"
              >
                Facial Wash
              </Link>

              <Link
                to="/products?category=serum"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 my-1 rounded-full
                           hover:bg-pink-100 hover:text-pink-600
                           transition-all duration-300"
              >
                Serum
              </Link>

              <Link
                to="/products?category=moisturizer"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 my-1 rounded-full
                           hover:bg-pink-100 hover:text-pink-600
                           transition-all duration-300"
              >
                Moisturizer
              </Link>

              <Link
                to="/products?category=sunscreen"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 my-1 rounded-full
                           hover:bg-pink-100 hover:text-pink-600
                           transition-all duration-300"
              >
                Sunscreen
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:text-pink-500">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
