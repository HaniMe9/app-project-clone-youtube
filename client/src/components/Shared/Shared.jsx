import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

function Shared() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Shared