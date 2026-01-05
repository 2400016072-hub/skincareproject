import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-4 border-b">
      <h1 className="font-bold text-pink-600">Glow S-Class</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
