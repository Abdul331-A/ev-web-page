

const Navbar = () => {
  return (
    <div className="nav flex justify-between items-center mt-10 mr-28 text-amber-100 ">
      <div className="nav-logo text-5xl pl-20 font-medium cursor-pointer">EV-olution</div>
      <ul className="nav-menu flex items-center list-none text-2xl gap-20 ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Explore</li>
        <li className="cursor-pointer">About</li>
        <li className="nav-contact cursor-pointer rounded-4xl p-2 bg-white text-black">contact</li>
      </ul>
    </div>
  )
}

export default Navbar