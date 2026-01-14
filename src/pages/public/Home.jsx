import { Link } from "react-router-dom";
import EminaLogo from "../../assets/brands/Emina.png";
import WardahLogo from "../../assets/brands/Wardah.png";
import SkintificLogo from "../../assets/brands/Skintific.png";

export default function Home() {
  return (
    <div className="px-8 py-12">
      <h1
        className="
        text-4xl md:text-5xl
        font-extrabold
        text-center
        text-pink-500
        tracking-wide
      "
      >
        Glow S-Class
      </h1>

      <section
        className="
        max-w-2xl mx-auto mt-6 mb-16
        bg-white/70 backdrop-blur
        p-6 rounded-2xl
        shadow-md
        text-center
      "
      >
        <p className="text-gray-600 leading-relaxed">
          Haii, welcome at Glow S-Class. Enjoy your time here with us, dengan
          harga yang lebih terjangkau pastinya for you girll 🫢💗
        </p>
      </section>

      <section>
        <h2
          className="
          text-2xl font-bold
          text-center
          text-pink-400
          mb-10
        "
        >
          Pick yours 💕
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-8">
            <Link to="/products?brand=Emina">
              <div
                className="
                w-64 h-40
                bg-white
                rounded-2xl
                flex items-center justify-center
                cursor-pointer
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                hover:ring-2 hover:ring-pink-300
              "
              >
                <img
                  src={EminaLogo}
                  alt="Emina"
                  className="h-24 object-contain"
                />
              </div>
            </Link>

            <Link to="/products?brand=Wardah">
              <div
                className="
                w-64 h-40
                bg-white
                rounded-2xl
                flex items-center justify-center
                cursor-pointer
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                hover:ring-2 hover:ring-pink-300
              "
              >
                <img
                  src={WardahLogo}
                  alt="Wardah"
                  className="h-24 object-contain"
                />
              </div>
            </Link>

            <Link to="/products?brand=Skintific">
              <div
                className="
                w-64 h-40
                bg-white
                rounded-2xl
                flex items-center justify-center
                cursor-pointer
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                hover:ring-2 hover:ring-pink-300
              "
              >
                <img
                  src={SkintificLogo}
                  alt="Skintific"
                  className="h-24 object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
