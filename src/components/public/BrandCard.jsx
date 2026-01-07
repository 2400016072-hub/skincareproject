import { Link } from "react-router-dom";

export default function BrandCard({ name, image }) {
  return (
    <Link to={`/products?brand=${name}`}>
      <div className="flex flex-col items-center gap-4 p-6 border rounded-xl hover:shadow-lg transition cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <h3 className="font-semibold text-lg">
          {name}
        </h3>
      </div>
    </Link>
  );
}
