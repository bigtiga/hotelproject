import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Rooms = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: "standard",
      name: "Standard Room",
      price: 12000,
      description:
        "A comfortable and thoughtfully designed room with everything you need for a relaxing stay.",
      features: [
        "Comfortable bed",
        "Private bathroom",
        "Air conditioning",
        "Free Wi-Fi",
        "Room service",
      ],
      icon: "🛏️",

      // Add your image here later:
      // image: "/images/rooms/standard-room.jpg",
      image: null,
    },

    {
      id: "deluxe",
      name: "Deluxe Room",
      price: 19000,
      description:
        "Enjoy a little more space and comfort in our Deluxe Room, ideal for business or leisure stays.",
      features: [
        "Spacious room",
        "Premium bedding",
        "Private bathroom",
        "Air conditioning",
        "Free Wi-Fi",
        "Room service",
      ],
      icon: "🛋️",

      image: null,
    },

    {
      id: "suite",
      name: "Executive Suite",
      price: 29000,
      description:
        "A refined suite offering additional living space and an elevated level of comfort for your stay.",
      features: [
        "Separate living area",
        "Premium bedding",
        "Private bathroom",
        "Air conditioning",
        "Free Wi-Fi",
        "Room service",
        "Work area",
      ],
      icon: "🏢",

      image: null,
    },

    {
      id: "presidential",
      name: "Presidential Suite",
      price: 49000,
      description:
        "Our most luxurious accommodation, designed for guests looking for space, privacy and an exceptional stay.",
      features: [
        "Luxury bedroom",
        "Separate living room",
        "Premium bathroom",
        "Air conditioning",
        "Free Wi-Fi",
        "Room service",
        "Dining area",
        "Premium amenities",
      ],
      icon: "👑",

      image: null,
    },
  ];

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  const handleBack = () => {
    // If the visitor came from another page,
    // take them back there.
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleBookRoom = (room) => {
    navigate("/bookings", {
      state: {
        selectedRoom: room.id,
      },
    });
  };

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
        .rooms-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 24px 100px;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .room-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .room-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: var(--shadow);
        }

        .room-image {
          height: 270px;
          position: relative;
          overflow: hidden;
          background: var(--bg-primary);
        }

        .room-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .room-card:hover .room-image img {
          transform: scale(1.04);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at center,
              rgba(201, 168, 76, 0.08),
              transparent 65%
            ),
            var(--bg-primary);
        }

        .placeholder-icon {
          font-size: 55px;
          margin-bottom: 12px;
          opacity: 0.8;
        }

        .placeholder-text {
          color: var(--text-secondary);
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .room-content {
          padding: 28px;
        }

        .room-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px 16px;
          margin-top: 22px;
        }

        .room-feature {
          color: var(--text-secondary);
          font-size: 12px;
        }

        .room-actions {
          display: flex;
          gap: 10px;
          margin-top: 26px;
        }

        .room-button {
          flex: 1;
          padding: 13px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .primary-room-button {
          background: var(--accent);
          color: #fff;
          border: 1px solid var(--accent);
        }

        .primary-room-button:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
        }

        .secondary-room-button {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .secondary-room-button:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .back-button:hover {
          color: var(--accent) !important;
          border-color: var(--accent) !important;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.68);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-card {
          width: 100%;
          max-width: 620px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        .modal-close {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 18px;
        }

        .modal-close:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        @media (max-width: 768px) {
          .rooms-container {
            padding: 50px 20px 70px;
          }

          .rooms-grid {
            grid-template-columns: 1fr;
          }

          .room-image {
            height: 240px;
          }
        }

        @media (max-width: 480px) {
          .rooms-container {
            padding: 40px 16px 60px;
          }

          .room-content {
            padding: 22px;
          }

          .room-actions {
            flex-direction: column;
          }

          .room-features {
            grid-template-columns: 1fr;
          }

          .modal-card {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="rooms-container">

        {/* =====================================================
            BACK BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={handleBack}
          className="back-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 16px",
            marginBottom: "42px",
            background: "transparent",
            color: "var(--text-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
            transition: "all 0.25s ease",
          }}
        >
          ← Back
        </button>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          style={{
            maxWidth: "680px",
            marginBottom: "55px",
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
            Stay Your Way
          </div>

          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(40px, 5vw, 56px)",
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Our{" "}
            <span
              style={{
                color: "var(--accent)",
                fontStyle: "italic",
              }}
            >
              Rooms
            </span>
          </h1>

          <p
            style={{
              marginTop: "18px",
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Choose the accommodation that suits your stay. From
            comfortable rooms to our most luxurious suite, every
            option is designed with your comfort in mind.
          </p>
        </div>

        {/* =====================================================
            ROOMS
        ===================================================== */}

        <div className="rooms-grid">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="room-card"
            >

              {/* IMAGE / FUTURE IMAGE */}

              <div className="room-image">
                {room.image ? (
                  <img
                    src={room.image}
                    alt={room.name}
                  />
                ) : (
                  <div className="image-placeholder">

                    <div className="placeholder-icon">
                      {room.icon}
                    </div>

                    <div className="placeholder-text">
                      Room photos coming soon
                    </div>

                  </div>
                )}

                {/* PRICE BADGE */}

                <div
                  style={{
                    position: "absolute",
                    right: "16px",
                    bottom: "16px",
                    padding: "9px 13px",
                    background: "rgba(0,0,0,0.72)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "7px",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {formatPrice(room.price)}
                  <span
                    style={{
                      fontWeight: 400,
                      opacity: 0.75,
                    }}
                  >
                    {" "}
                    / night
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="room-content">

                <div
                  style={{
                    color: "var(--accent)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {room.id === "presidential"
                    ? "Signature Accommodation"
                    : room.id === "suite"
                    ? "Premium Accommodation"
                    : "Accommodation"}
                </div>

                <h2
                  style={{
                    fontFamily:
                      'Georgia, "Times New Roman", serif',
                    fontSize: "28px",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {room.name}
                </h2>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    marginTop: "12px",
                  }}
                >
                  {room.description}
                </p>

                {/* FEATURES */}

                <div className="room-features">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="room-feature"
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          marginRight: "6px",
                        }}
                      >
                        ✓
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>

                {/* ACTIONS */}

                <div className="room-actions">

                  <button
                    type="button"
                    className="room-button secondary-room-button"
                    onClick={() => setSelectedRoom(room)}
                  >
                    View Room
                  </button>

                  <button
                    type="button"
                    className="room-button primary-room-button"
                    onClick={() => handleBookRoom(room)}
                  >
                    Book This Room
                  </button>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div
          style={{
            marginTop: "70px",
            padding: "38px",
            textAlign: "center",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "14px",
          }}
        >
          <div
            style={{
              color: "var(--accent)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Ready to Stay?
          </div>

          <h2
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontSize: "30px",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Find Your Perfect Room
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: 1.7,
              maxWidth: "500px",
              margin: "12px auto 22px",
            }}
          >
            Select a room above or continue to booking to enter
            your dates and guest details.
          </p>

          <Link
            to="/bookings"
            style={{
              display: "inline-block",
              padding: "13px 28px",
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Start Your Booking
          </Link>
        </div>
      </div>

      {/* =====================================================
          ROOM DETAILS MODAL
      ===================================================== */}

      {selectedRoom && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                marginBottom: "25px",
              }}
            >
              <div>

                <div
                  style={{
                    color: "var(--accent)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Room Details
                </div>

                <h2
                  style={{
                    fontFamily:
                      'Georgia, "Times New Roman", serif',
                    fontSize: "32px",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {selectedRoom.name}
                </h2>

              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedRoom(null)}
              >
                ×
              </button>
            </div>

            {/* IMAGE PLACEHOLDER */}

            <div
              style={{
                height: "220px",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "24px",
              }}
            >
              {selectedRoom.image ? (
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  className="image-placeholder"
                  style={{
                    background: "var(--bg-primary)",
                  }}
                >
                  <div className="placeholder-icon">
                    {selectedRoom.icon}
                  </div>

                  <div className="placeholder-text">
                    Room photos coming soon
                  </div>
                </div>
              )}
            </div>

            {/* DESCRIPTION */}

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              {selectedRoom.description}
            </p>

            {/* PRICE */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 0",
                marginTop: "12px",
                borderTop: "1px solid var(--border-color)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                }}
              >
                Starting from
              </span>

              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                {formatPrice(selectedRoom.price)}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                  }}
                >
                  {" "}
                  / night
                </span>
              </span>
            </div>

            {/* FEATURES */}

            <div
              style={{
                marginTop: "22px",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  marginBottom: "14px",
                }}
              >
                Room Features
              </h3>

              <div className="room-features">
                {selectedRoom.features.map((feature) => (
                  <div
                    key={feature}
                    className="room-feature"
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        marginRight: "6px",
                      }}
                    >
                      ✓
                    </span>

                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* MODAL CTA */}

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="room-button secondary-room-button"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => handleBookRoom(selectedRoom)}
                className="room-button primary-room-button"
              >
                Book This Room
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};

export default Rooms;