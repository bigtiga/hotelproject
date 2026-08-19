import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log("Contact Form Data:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "123 Beach Road, Waje City, Nigeria",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+234 800 123 4567",
      link: "tel:+2348001234567",
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@wajehotel.com",
      link: "mailto:info@wajehotel.com",
    },
    {
      icon: "🕐",
      title: "Front Desk Hours",
      details: "24/7 - Always Open",
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "f", url: "#", color: "#1877f2" },
    { name: "Instagram", icon: "📷", url: "#", color: "#e4405f" },
    { name: "X", icon: "𝕏", url: "#", color: "#000000" },
    { name: "TikTok", icon: "♪", url: "#", color: "#000000" },
    { name: "YouTube", icon: "▶️", url: "#", color: "#ff0000" },
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
        @media (max-width: 768px) {
          .contact-container {
            padding: 60px 20px 80px !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-title {
            font-size: 36px !important;
          }
          .info-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .form-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .social-links {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .contact-container {
            padding: 40px 16px 60px !important;
          }
          .contact-title {
            font-size: 28px !important;
          }
          .info-grid {
            grid-template-columns: 1fr !important;
          }
          .form-input {
            font-size: 14px !important;
            padding: 12px 14px !important;
          }
        }
        .form-input:focus {
          outline: none;
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.15) !important;
        }
        .info-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent) !important;
          box-shadow: var(--shadow);
        }
        .submit-btn:hover {
          background: var(--accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(201, 168, 76, 0.3) !important;
        }
        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        .success-banner {
          animation: slideDown 0.4s ease;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        className="contact-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 100px",
        }}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto 50px",
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
              marginBottom: "12px",
            }}
          >
            Get In Touch
          </div>

          <h1
            className="contact-title"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(40px, 5vw, 56px)",
              fontWeight: 400,
              margin: 0,
              color: "var(--text-primary)",
              letterSpacing: "-1px",
            }}
          >
            Contact{" "}
            <span
              style={{
                color: "var(--accent)",
                fontStyle: "italic",
              }}
            >
              Us
            </span>
          </h1>

          <p
            style={{
              marginTop: "16px",
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Have a question, special request, or want to plan something
            extraordinary? We'd love to hear from you. Reach out and
            we'll respond within 24 hours.
          </p>
        </div>

        {/* =====================================================
            SUCCESS BANNER
        ===================================================== */}

        {isSubmitted && (
          <div
            className="success-banner"
            style={{
              maxWidth: "700px",
              margin: "0 auto 30px",
              padding: "16px 24px",
              background: "rgba(46, 204, 113, 0.12)",
              border: "1px solid #2ecc71",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#2ecc71",
                fontSize: "18px",
                marginRight: "10px",
              }}
            >
              ✓
            </span>
            <span
              style={{
                color: "var(--text-primary)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Your message has been sent successfully! We'll get back to you soon.
            </span>
          </div>
        )}

        {/* =====================================================
            CONTACT GRID
        ===================================================== */}

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* =====================================================
              FORM
          ===================================================== */}

          <form onSubmit={handleSubmit}>
            <div
              style={{
                padding: "32px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "14px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Send a Message
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  marginBottom: "24px",
                }}
              >
                Fill in the form below and we'll get back to you as soon
                as possible.
              </p>

              {/* NAME */}

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    transition: "all 0.25s ease",
                  }}
                />
              </div>

              {/* EMAIL */}

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="form-input"
                  required
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    transition: "all 0.25s ease",
                  }}
                />
              </div>

              {/* PHONE */}

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 123 4567"
                  className="form-input"
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    transition: "all 0.25s ease",
                  }}
                />
              </div>

              {/* SUBJECT */}

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  Subject *
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    transition: "all 0.25s ease",
                  }}
                >
                  <option value="">Select a subject...</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="availability">Room Availability</option>
                  <option value="event">Event Planning</option>
                  <option value="feedback">Feedback / Suggestion</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* MESSAGE */}

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="form-input"
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    transition: "all 0.25s ease",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="submit-btn"
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "var(--accent)",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  letterSpacing: "0.5px",
                }}
              >
                Send Message
              </button>

              <p
                style={{
                  marginTop: "12px",
                  color: "var(--text-secondary)",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                We'll get back to you within 24 hours.
              </p>
            </div>
          </form>

          {/* =====================================================
              CONTACT INFO SIDEBAR
          ===================================================== */}

          <div>
            {/* INFO CARDS */}

            <div
              className="info-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginBottom: "24px",
              }}
            >
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="info-card"
                  style={{
                    padding: "20px",
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "12px",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </div>

                  {item.link ? (
                    <a
                      href={item.link}
                      style={{
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "var(--text-primary)";
                      }}
                    >
                      {item.details}
                    </a>
                  ) : (
                    <div
                      style={{
                        color: "var(--text-primary)",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {item.details}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* SOCIAL LINKS */}

            <div
              style={{
                padding: "24px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "var(--text-primary)",
                }}
              >
                Follow Us
              </div>

              <div
                className="social-links"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-btn"
                    aria-label={social.name}
                    style={{
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "50%",
                      textDecoration: "none",
                      color: "var(--text-secondary)",
                      fontSize: "16px",
                      fontWeight: 600,
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = social.color;
                      e.target.style.color = social.color;
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(0,0,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "var(--border-color)";
                      e.target.style.color = "var(--text-secondary)";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}

            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "var(--text-primary)",
                }}
              >
                Quick Links
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Link
                  to="/booking"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--text-secondary)";
                  }}
                >
                  📅 Book a Room
                </Link>

                <Link
                  to="/rooms"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--text-secondary)";
                  }}
                >
                  🛏️ View Rooms
                </Link>

                <Link
                  to="/amenities"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--text-secondary)";
                  }}
                >
                  🏊 Explore Amenities
                </Link>

                <Link
                  to="/aboutus"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--text-secondary)";
                  }}
                >
                  ℹ️ About Waje Hotel
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAP PLACEHOLDER
        ===================================================== */}

        <div
          style={{
            marginTop: "60px",
            padding: "40px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              marginBottom: "16px",
            }}
          >
            🗺️
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "8px",
              color: "var(--text-primary)",
            }}
          >
            Find Us Here
          </h3>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              marginBottom: "16px",
            }}
          >
            123 Beach Road, Waje City, Nigeria
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 28px",
              background: "var(--accent)",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--accent-hover)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--accent)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Open in Google Maps
          </a>

          <div
            style={{
              marginTop: "20px",
              padding: "30px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              color: "var(--text-secondary)",
              fontSize: "14px",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "12px",
                color: "var(--text-secondary)",
                opacity: 0.6,
              }}
            >
              Interactive map coming soon
            </span>
            <div
              style={{
                marginTop: "10px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-secondary)",
                borderRadius: "8px",
                border: "1px dashed var(--border-color)",
              }}
            >
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  opacity: 0.5,
                }}
              >
                📍 Google Maps Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;