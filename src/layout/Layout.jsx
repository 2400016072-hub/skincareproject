import Navbar from "../components/public/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
