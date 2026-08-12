import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        } ${menuOpen ? "navbar-open" : ""}`}
      >
        {/* Hamburger */}
        <button
          className="navbar-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.2} />
          ) : (
            <Menu size={21} strokeWidth={1.2} />
          )}
        </button>

        {/* Murec Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/media/murec-logo.png"
            alt="Murec"
          />
        </a>

        {/* Small right-side detail */}
        <div className="navbar-detail">
          <span>EST. 1950</span>
        </div>
      </header>

      {/* Navigation Overlay */}
      <div
        className={`navigation-overlay ${
          menuOpen ? "navigation-overlay-open" : ""
        }`}
      >
        <div className="navigation-inner">

          <div className="navigation-top">
            <span>EXPLORE</span>
            <span>MUREC</span>
          </div>

          <nav className="navigation-links">

            <a href="#legacy" onClick={closeMenu}>
              <span className="navigation-number">01</span>

              <span className="navigation-title">
                Legacy
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.1}
              />
            </a>

            <a href="#principles" onClick={closeMenu}>
              <span className="navigation-number">02</span>

              <span className="navigation-title">
                Principles
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.1}
              />
            </a>

            <a href="#collection" onClick={closeMenu}>
              <span className="navigation-number">03</span>

              <span className="navigation-title">
                Collection
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.1}
              />
            </a>

            <a href="#contact" onClick={closeMenu}>
              <span className="navigation-number">04</span>

              <span className="navigation-title">
                Contact
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.1}
              />
            </a>

          </nav>

          <div className="navigation-footer">

            <span>MUREC / MADHUSUDAN</span>

            <span>78+ YEARS OF LEGACY</span>

          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;