import { useState, useEffect } from "react";
import { navLinks } from "../constants/constants";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import { ScrollSpy } from "bootstrap";
import BrandLogo from "../component/BrandLogo";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getHeaderHeight = () =>
    document.querySelector("header")?.offsetHeight || 0;

  // ScrollSpy init
  useEffect(() => {
    const scrollElement = document.documentElement;
    const headerHeight = getHeaderHeight();

    const spy = new ScrollSpy(scrollElement, {
      target: "#main-navbar",
      rootMargin: `-${headerHeight + 1}px 0px -50% 0px`,
    });

    return () => spy.dispose();
  }, []);

  // Hash-based scroll correction
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    setTimeout(() => {
      const headerHeight = getHeaderHeight();
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({ top });
    }, 0);
  }, []);

  const toggleMenu = () => {
    // Check if screen is greater than md breakpoint
    if (window.innerWidth >= 768) {
      return; // Do nothing
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <header>
      <div className="container">
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
                <li className="nav-item" key={name}>
                  <a
                    className="nav-link"
                    href={`#${href}`}
                    // onClick={(e) => linkClickHandler(e, href)}
                    onClick={toggleMenu}
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
      </div>
    </header>
  );
};

export default Header;
