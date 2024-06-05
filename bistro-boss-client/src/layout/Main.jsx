
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/Navbar/Navbar'
import Footer from '../pages/shared/footer/Footer'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main