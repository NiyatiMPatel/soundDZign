// import { useState, useRef, useEffect } from "react";
import { useState } from "react";
import { navLinks } from "../constants/constants";
// import { ScrollSpy } from "bootstrap";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
// import { NavLink } from "react-router";
import BrandLogo from "../component/BrandLogo";
const Header = () => {
  const [activeLink, setActiveLink] = useState("#hero");
  const [isExpanded, setIsExpanded] = useState(false);

  // const scrollSpyRef = useRef(null);

  // useEffect(() => {
  //   // 1. Initialize ScrollSpy on the body (or your scroll container)
  //   // The 'target' points to your navbar's ID
  //   const dataSpyList = new ScrollSpy(document.body, {
  //     target: "#main-navbar",
  //     smoothScroll: true,
  //     offset: 10, // Adjust this based on your header height
  //   });

  //   // 2. Cleanup function to prevent memory leaks when component unmounts
  //   return () => {
  //     dataSpyList.dispose();
  //   };
  // }, []);

  const toggleMenu = () => {
    // Check if screen is greater than md breakpoint
    if (window.innerWidth >= 768) {
      return; // Do nothing
    }
    setIsExpanded((prev) => !prev);
  };

  const linkClickHandler = (e, href) => {
    // 1. Prevent the URL from changing
    e.preventDefault();

    // 2. Extract the ID (e.g., "#about" -> "about")
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    // 3. Smooth scroll to the section
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // 4. Update your active state logic
    setActiveLink(href);
    toggleMenu();
  };
  return (
    <header>
      <nav id="main-navbar" className="navbar navbar-expand-md p-0">
        <BrandLogo />
        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarTogglerDemo01"
        >
          {/* <ul className="navbar-nav">
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
          </ul> */}
          <ul className="navbar-nav">
            {navLinks.map(({ name, href }) => (
              <li className="nav-item" key={href}>
                <a
                  className={`nav-link ${activeLink === href ? "active" : ""}`}
                  aria-current={activeLink === href ? "page" : undefined}
                  href={href}
                  onClick={(e) => linkClickHandler(e, href)}
                  // onClick={() => linkClickHandler(href)}
                  // onClick={toggleMenu}
                >
                  {name}
                </a>
              </li>
            ))}
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
