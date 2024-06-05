

const Navbar = () => {
    const navOptions = <>
    <li>Home</li>
    <li>Contact Us</li>
    <li>Dashboard</li>
    <li>Our Menu</li>
    <li>Our Shop</li>
    <li>Sign Up</li>
    </>
  return (
    <>
      <div className="navbar fixed z-50 bg-black bg-opacity-5 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="text-xl font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu text-xl menu-horizontal gap-5">
     
     {navOptions}
    </ul>
  </div>
  
      </div>
    </>
  )
}

export default Navbar