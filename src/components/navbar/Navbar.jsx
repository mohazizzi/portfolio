import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navbar_nav">
        <Link to="/my-works" className="navbar_nav_link">
          نمونه کارها
        </Link>
        <Link to="/" className="navbar_nav_logo">
          <img src={logo} alt="لوگو" className="navbar_nav_logo_image" />
        </Link>
        <Link to="/contact-me" className="navbar_nav_link">
          ارتباط بامن
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
