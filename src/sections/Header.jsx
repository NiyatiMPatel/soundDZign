import { useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import { NavLink } from "react-router";
import BrandLogo from "../component/BrandLogo";
const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => {
    // Check if screen is greater than your breakpoint
    if (window.innerWidth >= 768) {
      return; // Do nothing
    }
    setIsExpanded((prev) => !prev);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-md p-0">
        <BrandLogo />
        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/topics"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Course Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="testimonials"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Testimonials
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isExpanded}
          onClick={toggleMenu}
        >
          {!isExpanded ? (
            <img src={menuIcon} className="menu-icon" alt="Open menu" />
          ) : (
            <img src={closeIcon} className="close-icon" alt="Close menu" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
