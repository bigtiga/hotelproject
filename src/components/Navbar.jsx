import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Will come from backend later
  const location = useLocation();
  const [ismobile, setIsMobile] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "booking", label: "Book Now", path: "/booking" },
    { id: "rooms", label: "Rooms", path: "/rooms" },
    { id: "amenities", label: "Amenities", path: "/amenities" },
    { id: "aboutus", label: "About Us", path: "/aboutus" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Auth links - show different based on login status
  const authLinks = isLoggedIn
    ? [
        { id: "bookings", label: "My Bookings", path: "/my-bookings" },
        { id: "profile", label: "Profile", path: "/profile" },
        { id: "logout", label: "Log Out", path: "/logout", isLogout: true },
      ]
    : [
        { id: "login", label: "Log In", path: "/login" },
        { id: "signup", label: "Sign Up", path: "/signup", isPrimary: true },
      ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .navbar-container {
            padding: 0 16px !important;
            height: 64px !important;
          }
          .mobile-menu {
            top: 64px !important;
          }
          .auth-links {
            display: none !important;
          }
          .mobile-auth {
            display: flex !important;
            flex-direction: column !important;
            gap: 4px !important;
            margin-top: 12px !important;
            border-top: 1px solid var(--border-color) !important;
            padding-top: 12px !important;
          }
          .logout-btn {
            color: #e74c3c !important;
          }
        }

        @media (min-width: 769px) {
          .hamburger-btn {
            display: none !important;
          }

          .mobile-menu {
            display: none !important;
          }

          .mobile-auth {
            display: none !important;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .nav-link-text {
            font-size: 14px !important;
            padding: 6px 12px !important;
          }
        }

        .nav-link {
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          font-family: inherit;
        }

        .nav-link:hover {
          background: var(--hover-bg);
          color: var(--text-primary);
        }

        .primary-link {
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          font-family: inherit;
        }

        .primary-link:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(201, 168, 76, 0.3);
        }

        .logout-link {
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          font-family: inherit;
          color: #e74c3c !important;
        }

        .logout-link:hover {
          background: #fee !important;
          color: #c0392b !important;
        }

        .hamburger-line {
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger-line.active:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-line.active:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.active:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu {
          display: ${isMenuOpen ? "block" : "none"};
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "var(--navbar-bg)",
          borderBottom: "1px solid var(--border-color)",
          transition: "background 0.3s ease, border-color 0.3s ease",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div
          className="navbar-container"
          style={{
            width: "100%",
            maxWidth: "none",
            margin: "10px 0",
            padding: "0 20px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>

          <ul
            className="desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              paddingLeft: "120px",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={link.isPrimary ? "primary-link" : "nav-link"}
                  style={{
                    display: "block",
                    marginLeft: "10px",
                    color: isActive(link.path)
                      ? link.isPrimary
                        ? "#ffffff"
                        : "var(--text-primary)"
                      : link.isPrimary
                      ? "#ffffff"
                      : "var(--text-secondary)",
                    fontSize: "15px",
                    fontWeight: link.isPrimary
                      ? 600
                      : isActive(link.path)
                      ? 600
                      : 500,
                    borderRadius: "8px",
                    borderBottom:
                      isActive(link.path) && !link.isPrimary
                        ? "2px solid var(--accent)"
                        : "2px solid transparent",
                  }}
                >
                  {link.label}
                </Link>

              </li>
              
            ))}
          </ul>

          {/* Right side controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginLeft: "20px",
              paddingLeft: "20px",
            }}
          >
            {/* Desktop Auth Links */}
            <ul
              className="auth-links"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}>
                 <ThemeToggle />
            </ul>

         

            <button
              className="hamburger-btn"
              onClick={toggleMenu}
              style={{
                display: "none",
                flexDirection: "column",
                gap: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
              }}
              aria-label="Toggle menu"
            >
              <span
                className={
                  isMenuOpen
                    ? "hamburger-line active"
                    : "hamburger-line"
                }
                style={{
                  display: "block",
                  width: "26px",
                  height: "2.5px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                }}
              />

              <span
                className={
                  isMenuOpen
                    ? "hamburger-line active"
                    : "hamburger-line"
                }
                style={{
                  display: "block",
                  width: "26px",
                  height: "2.5px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                }}
              />

              <span
                className={
                  isMenuOpen
                    ? "hamburger-line active"
                    : "hamburger-line"
                }
                style={{
                  display: "block",
                  width: "26px",
                  height: "2.5px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                }}
              />
            </button>
          </div>
        </div>

        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "var(--navbar-bg)",
            borderBottom: "1px solid var(--border-color)",
            padding: "20px 24px",
            boxShadow: "var(--shadow)",
            zIndex: 999,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    color: isActive(link.path)
                      ? link.isPrimary
                        ? "#ffffff"
                        : "var(--text-primary)"
                      : link.isPrimary
                      ? "#ffffff"
                      : "var(--text-secondary)",
                    fontSize: "16px",
                    fontWeight: link.isPrimary
                      ? 600
                      : isActive(link.path)
                      ? 600
                      : 500,
                    borderRadius: "8px",
                    background:
                      isActive(link.path) && !link.isPrimary
                        ? "var(--hover-bg)"
                        : link.isPrimary
                        ? "var(--accent)"
                        : "transparent",
                    textAlign: link.isPrimary ? "center" : "left",
                    textDecoration: "none",
                    borderLeft:
                      isActive(link.path) && !link.isPrimary
                        ? "3px solid var(--accent)"
                        : "3px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Auth Links */}
          <ul
            className="mobile-auth"
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              borderTop: "1px solid var(--border-color)",
              paddingTop: "12px",
            }}
          >
            {authLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    color: link.isLogout
                      ? "#e74c3c"
                      : link.isPrimary
                      ? "#ffffff"
                      : "var(--text-secondary)",
                    fontSize: "16px",
                    fontWeight: link.isPrimary ? 600 : 500,
                    borderRadius: "8px",
                    background: link.isPrimary
                      ? "var(--accent)"
                      : link.isLogout
                      ? "transparent"
                      : "transparent",
                    textAlign: "center",
                    border: link.isPrimary
                      ? "none"
                      : link.isLogout
                      ? "1px solid #e74c3c"
                      : "1px solid var(--border-color)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;