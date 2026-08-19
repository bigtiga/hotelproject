import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--navbar-bg)",
        color: "var(--text-primary)",
        borderTop: "1px solid var(--border-color)",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <style>{`
        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .footer-link:hover {
          color: var(--accent);
          padding-left: 3px;
        }

        .footer-social {
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          transition: all 0.25s ease;
        }

        .footer-social:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
        }

        .footer-bottom-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-bottom-link:hover {
          color: var(--accent);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 70px !important;
            row-gap: 55px !important;
          }
        }

        @media (max-width: 520px) {
          .footer-main {
            padding: 65px 20px 45px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 42px !important;
          }

          .footer-brand {
            max-width: 100% !important;
          }

          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 18px !important;
          }

          .footer-bottom-links {
            flex-wrap: wrap !important;
            gap: 15px !important;
          }
        }
      `}</style>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="footer-main"
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "90px 35px 70px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
            columnGap: "95px",
            rowGap: "50px",
            alignItems: "start",
          }}
        >

          {/* =================================================
              COLUMN 1 — BRAND
          ================================================= */}

          <div
            className="footer-brand"
            style={{
              maxWidth: "330px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  marginBottom: "22px",
                }}
              >
                <div
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: "26px",
                    fontWeight: 400,
                    letterSpacing: "2px",
                    color: "var(--text-primary)",
                  }}
                >
                  WAJE
                </div>

                <div
                  style={{
                    color: "var(--accent)",
                    fontSize: "8px",
                    letterSpacing: "4px",
                    marginTop: "5px",
                    marginLeft:"5px"
                  }}
                >
                   HOTEL
                </div>
              </div>
            </Link>

            <p
              style={{
                margin: "0 0 25px",
                color: "var(--text-secondary)",
                fontSize: "14px",
                lineHeight: 1.9,
              }}
            >
              A place where comfort meets elegance. Discover thoughtful
              hospitality, modern comfort, and a stay created around you.
            </p>

            <div
              style={{
                width: "48px",
                height: "2px",
                background: "var(--accent)",
              }}
            />
          </div>


          {/* =================================================
              COLUMN 2 — EXPLORE
          ================================================= */}

          <div>
            <h3
              style={{
                margin: "0 0 25px",
                color: "var(--text-primary)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Explore
            </h3>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Link className="footer-link" to="/">
                Home
              </Link>

              <Link className="footer-link" to="/rooms">
                Rooms
              </Link>

              <Link className="footer-link" to="/amenities">
                Amenities
              </Link>

              <Link className="footer-link" to="/aboutus">
                About Us
              </Link>

              <Link className="footer-link" to="/contact">
                Contact
              </Link>
            </nav>
          </div>


          {/* =================================================
              COLUMN 3 — STAY WITH US
          ================================================= */}

          <div>
            <h3
              style={{
                margin: "0 0 25px",
                color: "var(--text-primary)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Stay With Us
            </h3>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Link className="footer-link" to="/booking">
                Book Your Stay
              </Link>

              <Link className="footer-link" to="/my-bookings">
                My Bookings
              </Link>

              <Link className="footer-link" to="/profile">
                My Profile
              </Link>

              <Link className="footer-link" to="/contact">
                Get In Touch
              </Link>
            </nav>
          </div>


          {/* =================================================
              COLUMN 4 — CONNECT
          ================================================= */}

          <div>
            <h3
              style={{
                margin: "0 0 25px",
                color: "var(--text-primary)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Connect
            </h3>

            {/* Contact Details */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginBottom: "28px",
              }}
            >

              {/* Location / Description */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "11px",
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "15px",
                    marginTop: "1px",
                  }}
                >
                  ◇
                </span>

                <span>
                  Your destination for
                  <br />
                  comfort & elegance
                </span>
              </div>


              {/* Email */}

              <a
                href="mailto:info@wajehotel.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "13px",
                  transition: "color 0.2s ease",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "14px",
                  }}
                >
                  @
                </span>

                info@wajehotel.com
              </a>


              {/* Phone */}

              <a
                href="tel:+10000000000"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "14px",
                  }}
                >
                  ☎
                </span>

                +1 (000) 000-0000
              </a>
            </div>


            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >

              {/* Instagram */}

              <a
                href="#"
                className="footer-social"
                aria-label="Instagram"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.7"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* Facebook */}

              <a
                href="#"
                className="footer-social"
                aria-label="Facebook"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>


              {/* X */}

              <a
                href="#"
                className="footer-social"
                aria-label="X"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                𝕏
              </a>


              {/* TikTok */}

              <a
                href="#"
                className="footer-social"
                aria-label="TikTok"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                ♪
              </a>

            </div>
          </div>
        </div>
      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div
        style={{
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <div
          className="footer-bottom"
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            padding: "23px 35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >

          {/* Copyright */}

          <p
            style={{
              margin: 0,
              color: "var(--text-secondary)",
              fontSize: "12px",
            }}
          >
            © 2026 Waje Hotel. All rights reserved.
          </p>


          {/* Bottom Links */}

          <div
            className="footer-bottom-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              fontSize: "12px",
            }}
          >
            <Link
              to="/privacy"
              className="footer-bottom-link"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="footer-bottom-link"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;