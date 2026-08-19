import { Link, useNavigate } from "react-router-dom";

const Amenities = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/rooms");
    }
  };

  const amenities = [
    {
      id: 1,
      icon: "📶",
      category: "Connectivity",
      title: "Complimentary Wi-Fi",
      description:
        "Stay connected throughout your visit with complimentary Wi-Fi available across the hotel.",
      image: null,
    },
    {
      id: 2,
      icon: "❄️",
      category: "Comfort",
      title: "Air Conditioning",
      description:
        "Relax in a cool and comfortable environment with individually controlled air conditioning.",
      image: null,
    },
    {
      id: 3,
      icon: "🛏️",
      category: "Comfort",
      title: "Premium Bedding",
      description:
        "Enjoy a restful night's sleep with comfortable beds and quality bedding designed for relaxation.",
      image: null,
    },
    {
      id: 4,
      icon: "🚿",
      category: "Comfort",
      title: "Private Bathrooms",
      description:
        "Each room provides a private bathroom with essential toiletries and modern conveniences.",
      image: null,
    },
    
    {
      id: 5,
      icon: "🛎️",
      category: "Guest Services",
      title: "Front Desk Assistance",
      description:
        "Our team is available to assist with your stay, questions, requests, and local information.",
      image: null,
    },
    {
      id: 6,
      icon: "🧹",
      category: "Guest Services",
      title: "Housekeeping",
      description:
        "Enjoy a clean and welcoming room with housekeeping services throughout your stay.",
      image: null,
    },
    {
      id: 7,
      icon: "🚗",
      category: "Convenience",
      title: "Parking",
      description:
        "Convenient parking options are available for guests arriving by car.",
      image: null,
    },
    {
      id: 8,
      icon: "🕐",
      category: "Convenience",
      title: "Flexible Guest Support",
      description:
        "Our hospitality team is here to make your arrival, stay, and departure as smooth as possible.",
      image: null,
    },
    {
      id: 9,
      icon: "📺",
      category: "In-Room",
      title: "Entertainment",
      description:
        "Unwind in your room with entertainment options available for a relaxing evening.",
      image: null,
    },
    {
      id: 10,
      icon: "🔐",
      category: "Security",
      title: "Secure Environment",
      description:
        "Guest comfort and security are important to us, with measures in place throughout the property.",
      image: null,
    },
  ];

  const categories = [
    "All",
    "Comfort",
    "Connectivity",
    "Guest Services",
    "Convenience",
    "In-Room",
    "Security",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        paddingTop: "70px",
      }}
    >
      <style>{`
        .amenities-back:hover {
          color: var(--accent) !important;
          transform: translateX(-3px);
        }

        .amenity-card {
          transition: all 0.25s ease;
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent) !important;
          box-shadow: var(--shadow);
        }

        .amenity-image {
          transition: transform 0.4s ease;
        }

        .amenity-card:hover .amenity-image {
          transform: scale(1.03);
        }

        .amenity-cta:hover {
          background: var(--accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(201, 168, 76, 0.3);
        }

        .amenity-secondary:hover {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
          transform: translateY(-2px);
        }

        .category-btn {
          transition: all 0.2s ease;
        }

        .category-btn:hover {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
        }

        @media (max-width: 900px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .amenities-hero {
            grid-template-columns: 1fr !important;
          }

          .hero-image-placeholder {
            min-height: 300px !important;
          }
        }

        @media (max-width: 600px) {
          .amenities-container {
            padding: 45px 18px 70px !important;
          }

          .amenities-grid {
            grid-template-columns: 1fr !important;
          }

          .amenities-title {
            font-size: 38px !important;
          }

          .category-list {
            justify-content: flex-start !important;
            overflow-x: auto;
            flex-wrap: nowrap !important;
            padding-bottom: 8px;
          }

          .category-btn {
            white-space: nowrap;
          }

          .amenity-card {
            padding: 22px !important;
          }

          .cta-title {
            font-size: 30px !important;
          }

          .cta-buttons {
            flex-direction: column !important;
          }

          .cta-buttons a,
          .cta-buttons button {
            width: 100% !important;
            box-sizing: border-box;
          }
        }
      `}</style>

      <div
        className="amenities-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "75px 24px 100px",
        }}
      >
        {/* =====================================================
            BACK BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={handleGoBack}
          className="amenities-back"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "38px",
            padding: 0,
            background: "transparent",
            border: "none",
            color: "var(--text-secondary)",
            cursor: "pointer",
            fontSize: "13px",
            transition: "all 0.2s ease",
          }}
        >
          <span
            style={{
              fontSize: "18px",
            }}
          >
            ←
          </span>

          <span>Back</span>
        </button>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="amenities-hero"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "55px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          {/* HERO TEXT */}

          <div>
            <div
              style={{
                color: "var(--accent)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Hotel Amenities
            </div>

            <h1
              className="amenities-title"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(42px, 5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
                margin: 0,
              }}
            >
              Everything You Need
              <br />
              <span
                style={{
                  color: "var(--accent)",
                  fontStyle: "italic",
                }}
              >
                Under One Roof
              </span>
            </h1>

            <p
              style={{
                maxWidth: "570px",
                marginTop: "22px",
                color: "var(--text-secondary)",
                fontSize: "16px",
                lineHeight: 1.9,
              }}
            >
              From everyday essentials to thoughtful comforts, Waje Hotel
              provides the amenities you need for a relaxing and enjoyable
              stay.
            </p>

            <div
              className="cta-buttons"
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/bookings"
                className="amenity-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 26px",
                  background: "var(--accent)",
                  color: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                }}
              >
                Book Your Stay
              </Link>

              <Link
                to="/rooms"
                className="amenity-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 26px",
                  background: "transparent",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                }}
              >
                Explore Rooms
              </Link>
            </div>
          </div>

          {/* HERO IMAGE PLACEHOLDER */}

          <div
            className="hero-image-placeholder"
            style={{
              minHeight: "390px",
              borderRadius: "16px",
              border: "1px solid var(--border-color)",
              background: "var(--bg-secondary)",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 
              LATER:
              Replace this entire placeholder with:

              <img
                src="/images/amenities-hero.jpg"
                alt="Waje Hotel amenities"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            */}

            <div
              style={{
                textAlign: "center",
                padding: "30px",
              }}
            >
              <div
                style={{
                  fontSize: "55px",
                  marginBottom: "15px",
                }}
              >
                🏨
              </div>

              <div
                style={{
                  color: "var(--accent)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Hotel Image
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "12px",
                  marginTop: "8px",
                }}
              >
                Add your amenities photo here later
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto 55px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "var(--accent)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Designed Around You
          </div>

          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "34px",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Comfort, Convenience & Hospitality
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: 1.8,
              marginTop: "15px",
            }}
          >
            Whether you're staying for one night or several days, our
            facilities and services are designed to make your time with us
            comfortable and convenient.
          </p>
        </section>

        {/* =====================================================
            CATEGORY FILTER VISUAL
        ===================================================== */}

        <div
          className="category-list"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className="category-btn"
              style={{
                padding: "9px 15px",
                borderRadius: "20px",
                border: "1px solid var(--border-color)",
                background:
                  index === 0
                    ? "var(--accent)"
                    : "var(--bg-secondary)",
                color:
                  index === 0
                    ? "#ffffff"
                    : "var(--text-secondary)",
                fontSize: "12px",
                cursor: "default",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =====================================================
            AMENITIES GRID
        ===================================================== */}

        <section
          className="amenities-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {amenities.map((amenity) => (
            <article
              key={amenity.id}
              className="amenity-card"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "14px",
                padding: "26px",
                overflow: "hidden",
              }}
            >
              {/* OPTIONAL IMAGE */}

              {amenity.image ? (
                <div
                  style={{
                    height: "170px",
                    margin: "-26px -26px 22px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="amenity-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    height: "130px",
                    margin: "-26px -26px 22px",
                    background: "var(--bg-primary)",
                    borderBottom:
                      "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "62px",
                      height: "62px",
                      borderRadius: "14px",
                      background:
                        "rgba(201, 168, 76, 0.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "29px",
                    }}
                  >
                    {amenity.icon}
                  </div>
                </div>
              )}

              <div
                style={{
                  color: "var(--accent)",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {amenity.category}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {amenity.title}
              </h3>

              <p
                style={{
                  margin: "10px 0 0",
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.75,
                }}
              >
                {amenity.description}
              </p>
            </article>
          ))}
        </section>

        {/* =====================================================
            PHOTO CTA
        ===================================================== */}

        <section
          style={{
            marginTop: "75px",
            padding: "35px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                color: "var(--accent)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              See It For Yourself
            </div>

            <h3
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "27px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Explore Our Rooms
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "13px",
                lineHeight: 1.7,
                margin: "8px 0 0",
              }}
            >
              Discover the rooms and suites available for your stay.
            </p>
          </div>

          <Link
            to="/rooms"
            className="amenity-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "13px 24px",
              background: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.25s ease",
            }}
          >
            View Rooms →
          </Link>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          style={{
            marginTop: "28px",
            padding: "60px 30px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, var(--bg-secondary), var(--bg-primary))",
            border: "1px solid var(--border-color)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "var(--accent)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Ready When You Are
          </div>

          <h2
            className="cta-title"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "38px",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Make Your Stay
            <span
              style={{
                color: "var(--accent)",
                fontStyle: "italic",
              }}
            >
              {" "}
              Comfortable
            </span>
          </h2>

          <p
            style={{
              maxWidth: "550px",
              margin: "15px auto 25px",
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            Choose your room, select your preferred payment option, and
            secure your reservation with Waje Hotel.
          </p>

          <div
            className="cta-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/bookings"
              className="amenity-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 30px",
                background: "var(--accent)",
                color: "#ffffff",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                transition: "all 0.25s ease",
              }}
            >
              Book Your Stay
            </Link>

            <button
              type="button"
              onClick={handleGoBack}
              className="amenity-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 30px",
                background: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              ← Go Back
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Amenities;