import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="nav flex justify-between items-center mt-10 mr-28 text-amber-100 ">
      <div className="nav-logo text-5xl pl-20 font-medium cursor-pointer">EV-olution</div>
      <ul className="nav-menu flex items-center list-none text-2xl gap-20">
        <li className="cursor-pointer">
          <Link to="/models">Models</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/technology">Technology</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact">Contact us</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/news">News</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/event">Events</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/about">About BYD</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/alert">Alert</Link>
        </li>
        <li className="nav-contact cursor-pointer rounded-4xl p-2 bg-white text-black">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar