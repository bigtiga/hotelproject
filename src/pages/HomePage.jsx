import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import AIChat from "../components/AiChat";

const HomePage = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        overflowX: "hidden",
      }}
    >
      {/* Responsive behavior only */}
      <style>{`
        @media (max-width: 800px) {
          .intro-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .ai-container {
            grid-template-columns: 1fr !important;
            gap: 55px !important;
          }

          .ai-content {
            max-width: 650px !important;
          }

          .ai-visual {
            justify-content: flex-start !important;
          }

          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .home-hero {
            min-height: auto !important;
            padding: 120px 20px 65px !important;
          }

          .welcome-label {
            gap: 9px !important;
            font-size: 10px !important;
            letter-spacing: 3px !important;
            margin-bottom: 20px !important;
          }

          .welcome-line {
            width: 25px !important;
          }

          .hero-title {
            font-size: clamp(46px, 14vw, 66px) !important;
            letter-spacing: -1.5px !important;
            line-height: 1.05 !important;
          }

          .hero-description {
            font-size: 15px !important;
            line-height: 1.8 !important;
            margin-top: 24px !important;
          }

          .hero-actions {
            flex-direction: column !important;
            width: 100% !important;
            margin-top: 30px !important;
          }

          .hero-button {
            width: 100% !important;
            max-width: 300px !important;
          }

          .hero-decoration {
            height: 65px !important;
            margin-top: 45px !important;
          }

          .intro-section {
            padding: 70px 20px !important;
          }

          .intro-container {
            gap: 35px !important;
          }

          .intro-heading {
            font-size: 39px !important;
          }

          .intro-text {
            font-size: 15px !important;
            line-height: 1.8 !important;
          }

          .ai-section {
            padding: 75px 20px !important;
          }

          .ai-title {
            font-size: 42px !important;
          }

          .ai-description {
            font-size: 15px !important;
            line-height: 1.8 !important;
          }

          .ai-button {
            width: 100% !important;
          }

          .ai-card {
            padding: 22px !important;
          }

          .ai-message {
            max-width: 90% !important;
            font-size: 12px !important;
          }

          .why-section {
            padding: 75px 20px !important;
          }

          .why-heading {
            font-size: 42px !important;
          }

          .why-description {
            font-size: 15px !important;
            line-height: 1.8 !important;
          }

          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }

          .why-card {
            padding: 25px !important;
          }
        }

        .hero-primary-button:hover {
          background: var(--accent-hover) !important;
          border-color: var(--accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(201, 168, 76, 0.25) !important;
        }

        .hero-secondary-button:hover {
          background: var(--hover-bg) !important;
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }

        .ai-button:hover {
          background: var(--accent-hover) !important;
          border-color: var(--accent-hover) !important;
          transform: translateY(-2px);
        }

        .why-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent) !important;
          box-shadow: var(--shadow);
        }
      `}</style>

      {/* =====================================================
          HERO / WELCOME
      ===================================================== */}

      <section
        className="home-hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "120px 24px 80px",
          background:
            "radial-gradient(circle at 50% 40%, rgba(201, 168, 76, 0.10), transparent 45%), var(--bg-primary)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Welcome Label */}

          <div
            className="welcome-label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "24px",
              color: "var(--accent)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            <span
              className="welcome-line"
              style={{
                width: "42px",
                height: "1px",
                background: "var(--accent)",
                opacity: 0.7,
              }}
            />

            Welcome To Waje Hotel

            <span
              className="welcome-line"
              style={{
                width: "42px",
                height: "1px",
                background: "var(--accent)",
                opacity: 0.7,
              }}
            />
          </div>

          {/* Main Heading */}

          <h1
            className="hero-title"
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 1.02,
              fontWeight: 400,
              letterSpacing: "-2px",
              color: "var(--text-primary)",
            }}
          >
            A Beautiful Stay

            <span
              style={{
                display: "block",
                color: "var(--accent)",
                fontStyle: "italic",
                marginTop: "4px",
              }}
            >
              Begins Here.
            </span>
          </h1>

          {/* Description */}

          <p
            className="hero-description"
            style={{
              maxWidth: "680px",
              margin: "30px auto 0",
              color: "var(--text-secondary)",
              fontSize: "17px",
              lineHeight: 1.9,
              fontWeight: 400,
            }}
          >
            Welcome to a place where comfort meets elegance. Our hotel offers
            world-class amenities, breathtaking views, and exceptional service.
            Take a moment to slow down, settle in, and enjoy an experience
            created around you.
          </p>

          {/* Hero Buttons */}

          <div
            className="hero-actions"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              marginTop: "38px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/booking"
              className="hero-button hero-primary-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "170px",
                padding: "14px 26px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.3px",
                color: "#ffffff",
                background: "var(--accent)",
                border: "1px solid var(--accent)",
                boxShadow: "0 8px 25px rgba(201, 168, 76, 0.18)",
                transition: "all 0.25s ease",
              }}
            >
              Book Your Stay
            </Link>

            <Link
              to="/rooms"
              className="hero-button hero-secondary-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "170px",
                padding: "14px 26px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.3px",
                color: "var(--text-primary)",
                background: "transparent",
                border: "1px solid var(--border-color)",
                transition: "all 0.25s ease",
              }}
            >
              Explore Our Rooms
            </Link>
          </div>

          {/* Decorative Line */}

          <div
            className="hero-decoration"
            style={{
              width: "1px",
              height: "90px",
              background:
                "linear-gradient(to bottom, transparent, var(--accent), transparent)",
              margin: "60px auto 0",
              opacity: 0.65,
            }}
          />

          <div
            style={{
              marginTop: "14px",
              color: "var(--text-secondary)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Discover
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        className="intro-section"
        style={{
          width: "100%",
          padding: "100px 24px",
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div
          className="intro-container"
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "70px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                color: "var(--accent)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Your Comfort Matters
            </div>

            <h2
              className="intro-heading"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(36px, 5vw, 58px)",
                lineHeight: 1.1,
                fontWeight: 400,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              More than a room,

              <span
                style={{
                  color: "var(--accent)",
                  fontStyle: "italic",
                }}
              >
                {" "}
                a feeling.
              </span>
            </h2>
          </div>

          <div>
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "var(--accent)",
                marginBottom: "28px",
              }}
            />

            <p
              className="intro-text"
              style={{
                color: "var(--text-secondary)",
                fontSize: "16px",
                lineHeight: 1.9,
                margin: "0 0 22px",
              }}
            >
              Every detail has been thoughtfully created to make your stay
              comfortable, relaxing, and memorable.
            </p>

            <p
              className="intro-text"
              style={{
                color: "var(--text-secondary)",
                fontSize: "16px",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              Whether you are here for a quiet escape, a special occasion, or
              simply a well-deserved break, we are here to make you feel at
              home from the moment you arrive.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI CONCIERGE / AI BOOKING
      ===================================================== */}

      <section
        className="ai-section"
        style={{
          width: "100%",
          padding: "110px 24px",
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div
          className="ai-container"
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 0.9fr",
            gap: "90px",
            alignItems: "center",
          }}
        >
          {/* AI CONTENT */}

          <div
            className="ai-content"
            style={{
              maxWidth: "560px",
            }}
          >
            <div
              style={{
                color: "var(--accent)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Intelligent Hospitality
            </div>

            <h2
              className="ai-title"
              style={{
                margin: 0,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(42px, 5vw, 64px)",
                lineHeight: 1.08,
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              Meet Your

              <span
                style={{
                  display: "block",
                  color: "var(--accent)",
                  fontStyle: "italic",
                }}
              >
                AI Concierge.
              </span>
            </h2>

            <p
              className="ai-description"
              style={{
                margin: "26px 0 34px",
                color: "var(--text-secondary)",
                fontSize: "16px",
                lineHeight: 1.85,
              }}
            >
              Your stay should feel effortless. Our intelligent concierge is
              here to help you discover the right room, plan your stay, and
              make booking easier — all through a simple conversation.
            </p>

            {/* AI FEATURES */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "34px",
              }}
            >
              {/* Smart Recommendations */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-color)",
                    borderRadius: "50%",
                    color: "var(--accent)",
                    fontSize: "18px",
                    background: "var(--bg-secondary)",
                  }}
                >
                  ✦
                </div>

                <div>
                  <h3
                    style={{
                      margin: "0 0 5px",
                      color: "var(--text-primary)",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Smart Recommendations
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    Find rooms and experiences based on what you actually
                    need.
                  </p>
                </div>
              </div>

              {/* AI Booking */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-color)",
                    borderRadius: "50%",
                    color: "var(--accent)",
                    fontSize: "18px",
                    background: "var(--bg-secondary)",
                  }}
                >
                  ✧
                </div>

                <div>
                  <h3
                    style={{
                      margin: "0 0 5px",
                      color: "var(--text-primary)",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    AI-Assisted Booking
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    Let your AI concierge guide you through the booking
                    process.
                  </p>
                </div>
              </div>

              {/* Always Available */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-color)",
                    borderRadius: "50%",
                    color: "var(--accent)",
                    fontSize: "18px",
                    background: "var(--bg-secondary)",
                  }}
                >
                  ◇
                </div>

                <div>
                  <h3
                    style={{
                      margin: "0 0 5px",
                      color: "var(--text-primary)",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Always Available
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    Get help with your stay whenever you need it.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/booking"
              className="ai-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 23px",
                color: "#ffffff",
                background: "var(--accent)",
                border: "1px solid var(--accent)",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                transition: "all 0.25s ease",
              }}
            >
              Start Planning Your Stay
            </Link>
          </div>

          {/* AI CHAT PREVIEW */}

          <div
            className="ai-visual"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="ai-card"
              style={{
                width: "100%",
                maxWidth: "420px",
                padding: "28px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "18px",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* AI Header */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                  paddingBottom: "22px",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    color: "#ffffff",
                    background: "var(--accent)",
                    fontSize: "20px",
                  }}
                >
                  ✦
                </div>

                <div>
                  <div
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    AI Concierge
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "3px",
                      color: "var(--text-secondary)",
                      fontSize: "11px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#4caf50",
                      }}
                    />

                    Ready to assist
                  </div>
                </div>
              </div>

              {/* User Message */}

              <div
                style={{
                  maxWidth: "85%",
                  padding: "12px 14px",
                  marginTop: "18px",
                  marginLeft: "auto",
                  borderRadius: "12px",
                  color: "var(--text-primary)",
                  background: "var(--hover-bg)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                I want a quiet room with a beautiful view.
              </div>

              {/* AI Message */}

              <div
                style={{
                  maxWidth: "85%",
                  padding: "12px 14px",
                  marginTop: "18px",
                  borderRadius: "12px",
                  color: "var(--text-secondary)",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border-color)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                I'd be happy to help. I found a few rooms that would be
                perfect for a peaceful stay.
              </div>

              {/* Recommendation */}

              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  border: "1px solid var(--border-color)",
                  borderRadius: "12px",
                  background: "var(--bg-primary)",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    color: "var(--accent)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Perfect For You
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  <span>Deluxe View Room</span>

                  <span
                    style={{
                      color: "var(--accent)",
                      fontSize: "18px",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE WAJE
      ===================================================== */}

      <section
        className="why-section"
        style={{
          width: "100%",
          padding: "105px 24px",
          background: "var(--bg-secondary)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Section Heading */}

          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto 55px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "var(--accent)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              The Waje Experience
            </div>

            <h2
              className="why-heading"
              style={{
                margin: 0,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(42px, 5vw, 62px)",
                lineHeight: 1.08,
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              Why Choose

              <span
                style={{
                  color: "var(--accent)",
                  fontStyle: "italic",
                }}
              >
                {" "}
                Waje Hotel?
              </span>
            </h2>

            <p
              className="why-description"
              style={{
                maxWidth: "620px",
                margin: "24px auto 0",
                color: "var(--text-secondary)",
                fontSize: "16px",
                lineHeight: 1.85,
              }}
            >
              Thoughtful hospitality, modern comfort, and intelligent
              technology come together to make your stay effortless.
            </p>
          </div>

          {/* Feature Cards */}

          <div
            className="why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {/* Card 1 */}

            <div
              className="why-card"
              style={{
                padding: "30px 24px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "14px",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                  borderRadius: "50%",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--accent)",
                  fontSize: "20px",
                }}
              >
                ✦
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Exceptional Comfort
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                Thoughtfully designed spaces made for relaxation, rest, and a
                memorable stay.
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="why-card"
              style={{
                padding: "30px 24px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "14px",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                  borderRadius: "50%",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--accent)",
                  fontSize: "20px",
                }}
              >
                ✧
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Personalized Experience
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                A stay designed around your preferences, needs, and the
                experience you want.
              </p>
            </div>

            {/* Card 3 */}

            <div
              className="why-card"
              style={{
                padding: "30px 24px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "14px",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                  borderRadius: "50%",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--accent)",
                  fontSize: "20px",
                }}
              >
                ◇
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Intelligent Booking
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                AI-assisted booking helps you discover the right room and
                plan your stay with ease.
              </p>
            </div>

            {/* Card 4 */}

            <div
              className="why-card"
              style={{
                padding: "30px 24px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "14px",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                  borderRadius: "50%",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--accent)",
                  fontSize: "20px",
                }}
              >
                ♢
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Exceptional Service
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                From arrival to departure, our team is here to make every
                part of your stay feel effortless.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <AIChat/>

    </main>
  );
};

export default HomePage;