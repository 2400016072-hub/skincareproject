import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Halaman tidak ditemukan</p>

      <Link to="/">
        <Button className="mt-6">Kembali ke Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
