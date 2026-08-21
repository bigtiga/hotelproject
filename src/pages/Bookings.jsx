import { useState } from "react";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "standard",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [bookingStep, setBookingStep] = useState("form");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Modal state
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  // Test card fields (used for both online and counter deposit)
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  // Opay phone number
  const [opayPhone, setOpayPhone] = useState("");

  // Confirmation code
  const [prCode, setPrCode] = useState("");

  const roomTypes = [
    {
      id: "studio",
      label: "Studio Room",
      price: "₦30,000/night",
      priceNumber: 30000,
      icon: "🛏️",
    },
    {
      id: "standard",
      label: "Standard Room",
      price: "₦36,000/night",
      priceNumber: 36000,
      icon: "🛋️",
    },
    {
      id: "deluxe",
      label: "Deluxe Suite",
      price: "₦38,000/night",
      priceNumber: 38000,
      icon: "🏢",
    },
    {
      id: "executive",
      label: "Executive Suite",
      price: "₦42,000/night",
      priceNumber: 42000,
      icon: "👑",
    },
  ];

  const today = new Date().toISOString().split("T")[0];

  const selectedRoom =
    roomTypes.find((room) => room.id === formData.roomType) ||
    roomTypes[0];

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) {
      return 0;
    }

    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);

    const difference =
      checkOutDate.getTime() - checkInDate.getTime();

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  const totalAmount =
    nights > 0 ? nights * selectedRoom.priceNumber : 0;

  // Small 20% deposit to hold a counter reservation
  const depositAmount =
    totalAmount > 0 ? Math.ceil(totalAmount * 0.2) : 0;

  const remainingBalance =
    totalAmount > 0 ? totalAmount - depositAmount : 0;

  const formatAmount = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }

    if (name === "expiry") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 5);
    }

    if (name === "cvv") {
      formattedValue = value
        .replace(/\D/g, "")
        .slice(0, 4);
    }

    setCardData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleOpayPhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    setOpayPhone(value);
  };

  const generatePRCode = () => {
    return `WAJE-${Date.now()
      .toString()
      .slice(-6)}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;
  };

  const finishBooking = () => {
    const code = generatePRCode();

    setPrCode(code);
    setIsSubmitted(true);
    setBookingStep("confirmed");
    setShowPaymentModal(false);
    setPaymentProcessing(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleReviewBooking = (e) => {
    e.preventDefault();

    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select your check-in and check-out dates.");
      return;
    }

    if (nights <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    setBookingStep("review");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  /*
   * This opens the correct modal after the user
   * chooses a payment method.
   */
  const handleContinueToPayment = () => {
    if (!paymentMethod) {
      alert("Please choose a payment method first.");
      return;
    }

    // For counter payment, check if deposit amount is valid
    if (paymentMethod === "counter" && depositAmount <= 0) {
      alert("Unable to process deposit. Please check your booking details.");
      return;
    }

    setShowPaymentModal(true);
  };

  /*
   * TEST CARD PAYMENT
   *
   * This currently simulates payment.
   *
   * Replace this function later with your
   * Paystack / Flutterwave / Stripe integration.
   */
  const processCardPayment = (e) => {
    e.preventDefault();

    if (
      !cardData.cardNumber ||
      !cardData.expiry ||
      !cardData.cvv ||
      !cardData.cardName
    ) {
      alert("Please complete all card details.");
      return;
    }

    setPaymentProcessing(true);

    setTimeout(() => {
      finishBooking();
    }, 1200);
  };

  /*
   * OPAY PAYMENT
   *
   * This simulates Opay payment.
   *
   * Later you can integrate the actual Opay API here.
   */
  const processOpayPayment = (e) => {
    e.preventDefault();

    if (!opayPhone || opayPhone.length < 10) {
      alert("Please enter a valid phone number for Opay.");
      return;
    }

    setPaymentProcessing(true);

    setTimeout(() => {
      finishBooking();
    }, 1500);
  };

  /*
   * COUNTER DEPOSIT PAYMENT
   *
   * This processes the deposit payment for counter bookings using card.
   * The deposit secures the reservation, and the remaining
   * balance is paid at the hotel counter.
   */
  const processCounterDeposit = (e) => {
    e.preventDefault();

    if (
      !cardData.cardNumber ||
      !cardData.expiry ||
      !cardData.cvv ||
      !cardData.cardName
    ) {
      alert("Please complete all card details to pay the deposit.");
      return;
    }

    setPaymentProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      finishBooking();
    }, 1000);
  };

  const handleBackToForm = () => {
    setBookingStep("form");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackToReview = () => {
    setBookingStep("review");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
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

        * {
          box-sizing: border-box;
        }

        @media (max-width: 768px) {

          .booking-container {
            padding: 55px 20px 80px !important;
          }

          .booking-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .booking-summary {
            position: static !important;
          }

          .form-row {
            grid-template-columns: 1fr !important;
          }

          .booking-title {
            font-size: 38px !important;
          }

          .room-selector {
            grid-template-columns: 1fr 1fr !important;
          }

          .payment-options {
            grid-template-columns: 1fr !important;
          }

          .review-grid {
            grid-template-columns: 1fr !important;
          }

          .button-row {
            flex-direction: column !important;
          }

        }

        @media (max-width: 480px) {

          .booking-container {
            padding: 40px 16px 60px !important;
          }

          .booking-title {
            font-size: 30px !important;
          }

          .room-selector {
            grid-template-columns: 1fr !important;
          }

          .review-card {
            padding: 22px !important;
          }

          .payment-box {
            padding: 24px !important;
          }

          .modal-box {
            width: calc(100% - 28px) !important;
            padding: 24px !important;
          }

        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent) !important;
          box-shadow:
            0 0 0 3px rgba(201, 168, 76, 0.15) !important;
        }

        .room-card {
          transition: all 0.25s ease;
        }

        .room-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-3px);
        }

        .room-card.selected {
          border-color: var(--accent) !important;
          background: rgba(201, 168, 76, 0.06) !important;
        }

        .payment-card {
          transition: all 0.25s ease;
        }

        .payment-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }

        .payment-card.selected {
          border-color: var(--accent) !important;
          background: rgba(201, 168, 76, 0.07) !important;
          box-shadow: 0 0 0 1px var(--accent);
        }

        .submit-btn:hover {
          background: var(--accent-hover) !important;
          transform: translateY(-2px);
        }

        .back-btn:hover {
          color: var(--accent) !important;
          border-color: var(--accent) !important;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(5px);
        }

        .modal-box {
          width: min(500px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 25px 70px rgba(0,0,0,.35);
          animation: modalIn .2s ease;
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-input {
          width: 100%;
          padding: 13px 14px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 14px;
          margin-top: 6px;
        }

        .modal-input:focus {
          outline: none;
          border-color: var(--accent);
        }

        .review-item {
          border-bottom: 1px solid var(--border-color);
        }

        .review-item:last-child {
          border-bottom: none;
        }

      `}</style>

      <div
        className="booking-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 100px",
        }}
      >

        {/* HEADER - Only show when NOT submitted */}

        {!isSubmitted && (
          <div style={{ marginBottom: "45px" }}>
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
              Plan Your Stay
            </div>

            <h1
              className="booking-title"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(40px, 5vw, 56px)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-1px",
              }}
            >
              Book Your{" "}
              <span
                style={{
                  color: "var(--accent)",
                  fontStyle: "italic",
                }}
              >
                Stay
              </span>
            </h1>

            <p
              style={{
                maxWidth: "560px",
                marginTop: "16px",
                color: "var(--text-secondary)",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Fill in your details below and we'll take care of the rest.
              Your perfect stay at Waje Hotel is just a few clicks away.
            </p>
          </div>
        )}

        {/* PROGRESS - Only show when NOT submitted */}

        {!isSubmitted && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "45px",
              flexWrap: "wrap",
            }}
          >
            {[
              { id: "form", label: "Your Details" },
              { id: "review", label: "Review" },
              { id: "payment", label: "Payment" },
            ].map((step, index) => {
              const active =
                bookingStep === step.id ||
                (bookingStep === "confirmed" && index <= 2);

              return (
                <div
                  key={step.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: active
                        ? "var(--accent)"
                        : "var(--bg-secondary)",
                      color: active
                        ? "#fff"
                        : "var(--text-secondary)",
                      border: "1px solid var(--border-color)",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {index + 1}
                  </div>

                  <span
                    style={{
                      fontSize: "12px",
                      color: active
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                      fontWeight: active ? 600 : 400,
                    }}
                  >
                    {step.label}
                  </span>

                  {index < 2 && (
                    <div
                      style={{
                        width: "35px",
                        height: "1px",
                        background: "var(--border-color)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* =====================================================
            CONFIRMED
        ===================================================== */}

        {isSubmitted ? (
          <div
            style={{
              maxWidth: "650px",
              margin: "40px auto",
              padding: "55px 45px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >

            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                margin: "0 auto 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(201,168,76,.12)",
                border: "1px solid var(--accent)",
                fontSize: "32px",
              }}
            >
              ✓
            </div>

            <div
              style={{
                color: "var(--accent)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Reservation Complete
            </div>

            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "34px",
                fontWeight: 400,
                margin: "12px 0",
              }}
            >
              Booking Confirmed
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              Thank you, {formData.name}. Your reservation at Waje Hotel
              has been successfully secured.
            </p>

            {/* PR CODE */}

            <div
              style={{
                padding: "20px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "10px",
                marginTop: "25px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-secondary)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Your PR Code
              </div>

              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  marginTop: "8px",
                }}
              >
                {prCode}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  color: "var(--text-secondary)",
                  fontSize: "11px",
                }}
              >
                Please keep this code for check-in.
              </div>
            </div>

            {/* PAYMENT STATUS */}

            <div
              style={{
                marginTop: "18px",
                padding: "17px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                borderRadius: "9px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "7px",
                }}
              >
                Payment Arrangement
              </div>

              {paymentMethod === "online" && (
                <>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    ✓ Paid in Full Online (Card)
                  </div>

                  <div
                    style={{
                      color: "var(--accent)",
                      marginTop: "6px",
                      fontWeight: 600,
                    }}
                  >
                    {formatAmount(totalAmount)}
                  </div>
                </>
              )}

              {paymentMethod === "opay" && (
                <>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    ✓ Paid in Full via Opay
                  </div>

                  <div
                    style={{
                      color: "var(--accent)",
                      marginTop: "6px",
                      fontWeight: 600,
                    }}
                  >
                    {formatAmount(totalAmount)}
                  </div>

                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
                    Opay: {opayPhone}
                  </div>
                </>
              )}

              {paymentMethod === "counter" && (
                <>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    ✓ Reservation Deposit Paid
                  </div>

                  <div
                    style={{
                      color: "var(--accent)",
                      marginTop: "7px",
                      fontWeight: 600,
                    }}
                  >
                    Deposit: {formatAmount(depositAmount)}
                  </div>

                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    Balance due at the hotel:{" "}
                    {formatAmount(remainingBalance)}
                  </div>
                </>
              )}
            </div>

            <Link
              to="/"
              style={{
                display: "inline-block",
                marginTop: "25px",
                padding: "12px 32px",
                background: "var(--accent)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Return Home
            </Link>
          </div>
        ) : (

          <>
            {/* =====================================================
                FORM
            ===================================================== */}

            {bookingStep === "form" && (
              <div
                className="booking-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr",
                  gap: "60px",
                  alignItems: "start",
                }}
              >

                <form onSubmit={handleReviewBooking}>

                  {/* PERSONAL */}

                  <section style={{ marginBottom: "32px" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        marginBottom: "20px",
                      }}
                    >
                      Personal Information
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                        style={{
                          padding: "14px 16px",
                          borderRadius: "8px",
                          border: "1px solid var(--border-color)",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          fontSize: "15px",
                        }}
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                        style={{
                          padding: "14px 16px",
                          borderRadius: "8px",
                          border: "1px solid var(--border-color)",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          fontSize: "15px",
                        }}
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        required
                        style={{
                          padding: "14px 16px",
                          borderRadius: "8px",
                          border: "1px solid var(--border-color)",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          fontSize: "15px",
                        }}
                      />
                    </div>
                  </section>

                  {/* ROOMS */}

                  <section style={{ marginBottom: "32px" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        marginBottom: "16px",
                      }}
                    >
                      Select Your Room
                    </h3>

                    <div
                      className="room-selector"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "12px",
                      }}
                    >
                      {roomTypes.map((room) => (
                        <div
                          key={room.id}
                          className={`room-card ${
                            formData.roomType === room.id
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              roomType: room.id,
                            }))
                          }
                          style={{
                            padding: "16px",
                            borderRadius: "10px",
                            border: "2px solid var(--border-color)",
                            cursor: "pointer",
                            background: "var(--bg-secondary)",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "28px",
                              marginBottom: "6px",
                            }}
                          >
                            {room.icon}
                          </div>

                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: 600,
                            }}
                          >
                            {room.label}
                          </div>

                          <div
                            style={{
                              color: "var(--accent)",
                              fontSize: "13px",
                              marginTop: "4px",
                            }}
                          >
                            {room.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* DATES */}

                  <section style={{ marginBottom: "32px" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        marginBottom: "16px",
                      }}
                    >
                      Dates & Guests
                    </h3>

                    <div
                      className="form-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                      }}
                    >
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "13px",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Check-in
                        </label>

                        <input
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          min={today}
                          required
                          className="form-input"
                          style={{
                            width: "100%",
                            marginTop: "6px",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-color)",
                            background: "var(--bg-secondary)",
                            color: "var(--text-primary)",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "13px",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Check-out
                        </label>

                        <input
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          min={formData.checkIn || today}
                          required
                          className="form-input"
                          style={{
                            width: "100%",
                            marginTop: "6px",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-color)",
                            background: "var(--bg-secondary)",
                            color: "var(--text-primary)",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "16px" }}>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Number of Guests
                      </label>

                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="form-input"
                        style={{
                          width: "100%",
                          marginTop: "6px",
                          padding: "12px",
                          borderRadius: "8px",
                          border: "1px solid var(--border-color)",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </section>

                  {/* REQUESTS */}

                  <section style={{ marginBottom: "32px" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        marginBottom: "12px",
                      }}
                    >
                      Special Requests
                    </h3>

                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Any special requests?"
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "8px",
                        border: "1px solid var(--border-color)",
                        background: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        resize: "vertical",
                        fontFamily: "inherit",
                      }}
                    />
                  </section>

                  <button
                    type="submit"
                    className="submit-btn"
                    style={{
                      width: "100%",
                      padding: "16px",
                      background: "var(--accent)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Review Booking
                  </button>
                </form>

                {/* SUMMARY */}

                <div
                  className="booking-summary"
                  style={{
                    position: "sticky",
                    top: "90px",
                  }}
                >
                  <div
                    style={{
                      padding: "28px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "14px",
                    }}
                  >
                    <h3>Booking Summary</h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ color: "var(--text-secondary)" }}>
                          Room
                        </span>

                        <strong>{selectedRoom.label}</strong>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ color: "var(--text-secondary)" }}>
                          Check-in
                        </span>

                        <span>{formData.checkIn || "—"}</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ color: "var(--text-secondary)" }}>
                          Check-out
                        </span>

                        <span>{formData.checkOut || "—"}</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          borderTop: "1px solid var(--border-color)",
                          paddingTop: "16px",
                        }}
                      >
                        <span>Total</span>

                        <strong
                          style={{
                            color: "var(--accent)",
                            fontSize: "20px",
                          }}
                        >
                          {totalAmount
                            ? formatAmount(totalAmount)
                            : "₦—"}
                        </strong>
                      </div>

                      {nights > 0 && (
                        <div
                          style={{
                            color: "var(--text-secondary)",
                            fontSize: "12px",
                            textAlign: "right",
                          }}
                        >
                          {nights} night{nights !== 1 ? "s" : ""}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =====================================================
                REVIEW + PAYMENT OPTIONS
            ===================================================== */}

            {bookingStep === "review" && (
              <div
                className="review-card"
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                  padding: "35px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "14px",
                }}
              >

                <div style={{ marginBottom: "30px" }}>
                  <div
                    style={{
                      color: "var(--accent)",
                      fontSize: "11px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Almost There
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: "34px",
                      fontWeight: 400,
                      marginTop: "8px",
                    }}
                  >
                    Review Your Booking
                  </h2>
                </div>

                {/* REVIEW GRID */}

                <div
                  className="review-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0 40px",
                  }}
                >

                  <div
                    className="review-item"
                    style={{ padding: "17px 0" }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        textTransform: "uppercase",
                      }}
                    >
                      Guest
                    </div>

                    <strong>{formData.name}</strong>

                    <div
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {formData.email}
                    </div>
                  </div>

                  <div
                    className="review-item"
                    style={{ padding: "17px 0" }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        textTransform: "uppercase",
                      }}
                    >
                      Phone
                    </div>

                    <strong>{formData.phone}</strong>
                  </div>

                  <div
                    className="review-item"
                    style={{ padding: "17px 0" }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        textTransform: "uppercase",
                      }}
                    >
                      Room
                    </div>

                    <strong>
                      {selectedRoom.icon} {selectedRoom.label}
                    </strong>

                    <div
                      style={{
                        color: "var(--accent)",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {selectedRoom.price}
                    </div>
                  </div>

                  <div
                    className="review-item"
                    style={{ padding: "17px 0" }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        textTransform: "uppercase",
                      }}
                    >
                      Stay
                    </div>

                    <strong>
                      {formData.checkIn} → {formData.checkOut}
                    </strong>

                    <div
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {nights} night{nights !== 1 ? "s" : ""} ·{" "}
                      {formData.guests} guest
                      {Number(formData.guests) !== 1 ? "s" : ""}
                    </div>
                  </div>

                </div>

                {/* TOTAL */}

                <div
                  style={{
                    marginTop: "28px",
                    padding: "22px",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "13px",
                      }}
                    >
                      Total Stay
                    </div>

                    <div
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {nights} night{nights !== 1 ? "s" : ""}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "var(--accent)",
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    {formatAmount(totalAmount)}
                  </div>
                </div>

                {/* =================================================
                    PAYMENT CHOICE
                ================================================= */}

                <div
                  style={{
                    marginTop: "35px",
                  }}
                >
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
                    Payment
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "20px",
                    }}
                  >
                    How would you like to pay?
                  </h3>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      marginTop: "8px",
                    }}
                  >
                    Select an option below. You will be asked to confirm
                    the payment before your reservation is finalized.
                  </p>

                  {/* THREE PAYMENT GRIDS */}

                  <div
                    className="payment-options"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "14px",
                      marginTop: "20px",
                    }}
                  >

                    {/* ONLINE CARD */}

                    <div
                      className={`payment-card ${
                        paymentMethod === "online"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handlePaymentSelection("online")
                      }
                      style={{
                        padding: "20px",
                        border: "2px solid var(--border-color)",
                        borderRadius: "12px",
                        cursor: "pointer",
                        background: "var(--bg-primary)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(201,168,76,.12)",
                            fontSize: "18px",
                          }}
                        >
                          💳
                        </div>

                        {paymentMethod === "online" && (
                          <span
                            style={{
                              color: "var(--accent)",
                              fontSize: "20px",
                            }}
                          >
                            ✓
                          </span>
                        )}
                      </div>

                      <h3
                        style={{
                          fontSize: "15px",
                          margin: "14px 0 6px",
                        }}
                      >
                        Pay with Card
                      </h3>

                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        Pay securely with your credit or debit card.
                      </p>

                      <div
                        style={{
                          marginTop: "14px",
                          paddingTop: "12px",
                          borderTop: "1px solid var(--border-color)",
                          color: "var(--accent)",
                          fontWeight: 700,
                          fontSize: "16px",
                        }}
                      >
                        {formatAmount(totalAmount)}
                      </div>
                    </div>

                    {/* OPAY */}

                    <div
                      className={`payment-card ${
                        paymentMethod === "opay"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handlePaymentSelection("opay")
                      }
                      style={{
                        padding: "20px",
                        border: "2px solid var(--border-color)",
                        borderRadius: "12px",
                        cursor: "pointer",
                        background: "var(--bg-primary)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(201,168,76,.12)",
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                        >
                          O
                        </div>

                        {paymentMethod === "opay" && (
                          <span
                            style={{
                              color: "var(--accent)",
                              fontSize: "20px",
                            }}
                          >
                            ✓
                          </span>
                        )}
                      </div>

                      <h3
                        style={{
                          fontSize: "15px",
                          margin: "14px 0 6px",
                        }}
                      >
                        Pay with Opay
                      </h3>

                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        Pay instantly using your Opay wallet or bank
                        transfer.
                      </p>

                      <div
                        style={{
                          marginTop: "14px",
                          paddingTop: "12px",
                          borderTop: "1px solid var(--border-color)",
                          color: "var(--accent)",
                          fontWeight: 700,
                          fontSize: "16px",
                        }}
                      >
                        {formatAmount(totalAmount)}
                      </div>
                    </div>

                    {/* COUNTER */}

                    <div
                      className={`payment-card ${
                        paymentMethod === "counter"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handlePaymentSelection("counter")
                      }
                      style={{
                        padding: "20px",
                        border: "2px solid var(--border-color)",
                        borderRadius: "12px",
                        cursor: "pointer",
                        background: "var(--bg-primary)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(201,168,76,.12)",
                            fontSize: "18px",
                          }}
                        >
                          🏨
                        </div>

                        {paymentMethod === "counter" && (
                          <span
                            style={{
                              color: "var(--accent)",
                              fontSize: "20px",
                            }}
                          >
                            ✓
                          </span>
                        )}
                      </div>

                      <h3
                        style={{
                          fontSize: "15px",
                          margin: "14px 0 6px",
                        }}
                      >
                        Pay at Counter
                      </h3>

                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        Hold your room with a deposit and pay the
                        balance when you arrive.
                      </p>

                      <div
                        style={{
                          marginTop: "14px",
                          paddingTop: "12px",
                          borderTop: "1px solid var(--border-color)",
                        }}
                      >
                        <div
                          style={{
                            color: "var(--accent)",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          {formatAmount(depositAmount)}
                        </div>

                        <div
                          style={{
                            color: "var(--text-secondary)",
                            fontSize: "10px",
                            marginTop: "3px",
                          }}
                        >
                          Deposit to hold reservation
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* SELECTED METHOD EXPLANATION */}

                  {paymentMethod === "online" && (
                    <div
                      style={{
                        marginTop: "18px",
                        padding: "14px",
                        background: "rgba(201,168,76,.06)",
                        border:
                          "1px solid rgba(201,168,76,.25)",
                        borderRadius: "9px",
                      }}
                    >
                      <strong style={{ fontSize: "13px" }}>
                        Online card payment selected
                      </strong>

                      <div
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        You will enter your card details in a secure
                        payment box before the reservation is confirmed.
                      </div>
                    </div>
                  )}

                  {paymentMethod === "opay" && (
                    <div
                      style={{
                        marginTop: "18px",
                        padding: "14px",
                        background: "rgba(201,168,76,.06)",
                        border:
                          "1px solid rgba(201,168,76,.25)",
                        borderRadius: "9px",
                      }}
                    >
                      <strong style={{ fontSize: "13px" }}>
                        Opay payment selected
                      </strong>

                      <div
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        You will enter your Opay phone number to receive
                        a payment request.
                      </div>
                    </div>
                  )}

                  {paymentMethod === "counter" && (
                    <div
                      style={{
                        marginTop: "18px",
                        padding: "14px",
                        background: "rgba(201,168,76,.06)",
                        border:
                          "1px solid rgba(201,168,76,.25)",
                        borderRadius: "9px",
                      }}
                    >
                      <strong style={{ fontSize: "13px" }}>
                        Deposit required to hold your room
                      </strong>

                      <div
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "12px",
                          lineHeight: 1.7,
                          marginTop: "4px",
                        }}
                      >
                        A {formatAmount(depositAmount)} deposit will
                        secure your reservation. You will pay this
                        deposit now with your card.
                      </div>

                      <div
                        style={{
                          color: "var(--accent)",
                          fontSize: "13px",
                          fontWeight: 600,
                          marginTop: "6px",
                        }}
                      >
                        Balance at hotel:{" "}
                        {formatAmount(remainingBalance)}
                      </div>
                    </div>
                  )}

                </div>

                {/* BUTTONS */}

                <div
                  className="button-row"
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "30px",
                  }}
                >
                  <button
                    type="button"
                    onClick={handleBackToForm}
                    className="back-btn"
                    style={{
                      flex: 1,
                      padding: "15px",
                      background: "transparent",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "9px",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleContinueToPayment}
                    disabled={!paymentMethod}
                    className="submit-btn"
                    style={{
                      flex: 2,
                      padding: "15px",
                      background: paymentMethod
                        ? "var(--accent)"
                        : "var(--border-color)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "9px",
                      cursor: paymentMethod
                        ? "pointer"
                        : "not-allowed",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    {paymentMethod
                      ? paymentMethod === "online"
                        ? "Continue to Card Payment"
                        : paymentMethod === "opay"
                        ? "Continue to Opay"
                        : "Continue to Deposit"
                      : "Choose a Payment Method"}
                  </button>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    color: "var(--text-secondary)",
                    fontSize: "11px",
                  }}
                >
                  Your reservation will not be confirmed until the
                  selected payment step is completed.
                </div>

              </div>
            )}
          </>
        )}
      </div>

      {/* =========================================================
          PAYMENT MODAL
      ========================================================= */}

      {showPaymentModal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget && !paymentProcessing) {
              setShowPaymentModal(false);
            }
          }}
        >
          <div className="modal-box">

            {/* ONLINE CARD PAYMENT */}

            {paymentMethod === "online" && (
              <form onSubmit={processCardPayment}>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--accent)",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      Secure Payment
                    </div>

                    <h2
                      style={{
                        margin: "7px 0 0",
                        fontFamily:
                          'Georgia, "Times New Roman", serif',
                        fontSize: "27px",
                        fontWeight: 400,
                      }}
                    >
                      Card Payment
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      !paymentProcessing &&
                      setShowPaymentModal(false)
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>

                {/* AMOUNT */}

                <div
                  style={{
                    padding: "16px",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "9px",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                    }}
                  >
                    Amount
                  </span>

                  <strong
                    style={{
                      color: "var(--accent)",
                      fontSize: "18px",
                    }}
                  >
                    {formatAmount(totalAmount)}
                  </strong>
                </div>

                {/* CARD NUMBER */}

                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Card Number

                  <input
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                    placeholder="4242 4242 4242 4242"
                    className="modal-input"
                    inputMode="numeric"
                    autoComplete="cc-number"
                  />
                </label>

                {/* EXPIRY + CVV */}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginTop: "15px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    Expiry

                    <input
                      name="expiry"
                      value={cardData.expiry}
                      onChange={handleCardChange}
                      placeholder="MM/YY"
                      className="modal-input"
                      inputMode="numeric"
                    />
                  </label>

                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    CVV

                    <input
                      name="cvv"
                      value={cardData.cvv}
                      onChange={handleCardChange}
                      placeholder="123"
                      className="modal-input"
                      inputMode="numeric"
                    />
                  </label>
                </div>

                {/* CARD NAME */}

                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginTop: "15px",
                  }}
                >
                  Name on Card

                  <input
                    name="cardName"
                    value={cardData.cardName}
                    onChange={handleCardChange}
                    placeholder="John Doe"
                    className="modal-input"
                    autoComplete="cc-name"
                  />
                </label>

                {/* TEST MODE NOTICE */}

                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px",
                    background: "rgba(201,168,76,.07)",
                    border:
                      "1px solid rgba(201,168,76,.25)",
                    borderRadius: "8px",
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  <strong
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    TEST MODE
                  </strong>
                  <br />
                  For testing, use a test card such as{" "}
                  <strong>4242 4242 4242 4242</strong>.
                  This demo does not charge a real card.
                </div>

                <button
                  type="submit"
                  disabled={paymentProcessing}
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    padding: "15px",
                    background: paymentProcessing
                      ? "var(--border-color)"
                      : "var(--accent)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "9px",
                    cursor: paymentProcessing
                      ? "not-allowed"
                      : "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {paymentProcessing
                    ? "Processing Payment..."
                    : `Pay ${formatAmount(totalAmount)}`}
                </button>

                <button
                  type="button"
                  disabled={paymentProcessing}
                  onClick={() => setShowPaymentModal(false)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "12px",
                    background: "transparent",
                    color: "var(--text-secondary)",
                    border: "none",
                    cursor: paymentProcessing
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  Cancel
                </button>

              </form>
            )}

            {/* =====================================================
                OPAY PAYMENT MODAL
            ===================================================== */}

            {paymentMethod === "opay" && (
              <form onSubmit={processOpayPayment}>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--accent)",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      Opay Payment
                    </div>

                    <h2
                      style={{
                        margin: "7px 0 0",
                        fontFamily:
                          'Georgia, "Times New Roman", serif',
                        fontSize: "27px",
                        fontWeight: 400,
                      }}
                    >
                      Pay with Opay
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      !paymentProcessing &&
                      setShowPaymentModal(false)
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  Enter your Opay phone number to receive a payment
                  request. You will be prompted to confirm the payment
                  on your Opay app.
                </p>

                {/* AMOUNT */}

                <div
                  style={{
                    padding: "16px",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "9px",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                    }}
                  >
                    Amount
                  </span>

                  <strong
                    style={{
                      color: "var(--accent)",
                      fontSize: "18px",
                    }}
                  >
                    {formatAmount(totalAmount)}
                  </strong>
                </div>

                {/* OPAY PHONE NUMBER */}

                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Opay Phone Number

                  <input
                    type="tel"
                    name="opayPhone"
                    value={opayPhone}
                    onChange={handleOpayPhoneChange}
                    placeholder="08012345678"
                    className="modal-input"
                    inputMode="numeric"
                    required
                  />
                </label>

                {/* OPAY INFO */}

                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px",
                    background: "rgba(201,168,76,.07)",
                    border:
                      "1px solid rgba(201,168,76,.25)",
                    borderRadius: "8px",
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  <strong
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    How it works
                  </strong>
                  <br />
                  A payment request will be sent to your Opay app.
                  Confirm the payment to complete your booking.
                </div>

                <button
                  type="submit"
                  disabled={paymentProcessing}
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    padding: "15px",
                    background: paymentProcessing
                      ? "var(--border-color)"
                      : "var(--accent)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "9px",
                    cursor: paymentProcessing
                      ? "not-allowed"
                      : "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {paymentProcessing
                    ? "Processing Payment..."
                    : `Pay ${formatAmount(totalAmount)} with Opay`}
                </button>

                <button
                  type="button"
                  disabled={paymentProcessing}
                  onClick={() => setShowPaymentModal(false)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "12px",
                    background: "transparent",
                    color: "var(--text-secondary)",
                    border: "none",
                    cursor: paymentProcessing
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  Cancel
                </button>

              </form>
            )}

            {/* =====================================================
                COUNTER DEPOSIT MODAL (NOW WITH CARD FORM)
            ===================================================== */}

            {paymentMethod === "counter" && (
              <form onSubmit={processCounterDeposit}>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--accent)",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      Secure Your Room
                    </div>

                    <h2
                      style={{
                        margin: "7px 0 0",
                        fontFamily:
                          'Georgia, "Times New Roman", serif',
                        fontSize: "27px",
                        fontWeight: 400,
                      }}
                    >
                      Pay Deposit
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      !paymentProcessing &&
                      setShowPaymentModal(false)
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  Pay a {formatAmount(depositAmount)} deposit to secure
                  your room. The remaining balance of{" "}
                  {formatAmount(remainingBalance)} will be paid when
                  you arrive at the hotel.
                </p>

                {/* DEPOSIT AMOUNT */}

                <div
                  style={{
                    padding: "16px",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "9px",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                    }}
                  >
                    Deposit Amount
                  </span>

                  <strong
                    style={{
                      color: "var(--accent)",
                      fontSize: "18px",
                    }}
                  >
                    {formatAmount(depositAmount)}
                  </strong>
                </div>

                {/* CARD NUMBER */}

                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Card Number

                  <input
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                    placeholder="4242 4242 4242 4242"
                    className="modal-input"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    required
                  />
                </label>

                {/* EXPIRY + CVV */}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginTop: "15px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    Expiry

                    <input
                      name="expiry"
                      value={cardData.expiry}
                      onChange={handleCardChange}
                      placeholder="MM/YY"
                      className="modal-input"
                      inputMode="numeric"
                      required
                    />
                  </label>

                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    CVV

                    <input
                      name="cvv"
                      value={cardData.cvv}
                      onChange={handleCardChange}
                      placeholder="123"
                      className="modal-input"
                      inputMode="numeric"
                      required
                    />
                  </label>
                </div>

                {/* CARD NAME */}

                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginTop: "15px",
                  }}
                >
                  Name on Card

                  <input
                    name="cardName"
                    value={cardData.cardName}
                    onChange={handleCardChange}
                    placeholder="John Doe"
                    className="modal-input"
                    autoComplete="cc-name"
                    required
                  />
                </label>

                {/* DEPOSIT INFO */}

                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px",
                    background: "rgba(201,168,76,.07)",
                    border:
                      "1px solid rgba(201,168,76,.25)",
                    borderRadius: "8px",
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  <strong
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    Deposit Policy
                  </strong>
                  <br />
                  This deposit will be applied toward your final hotel
                  bill. Balance of {formatAmount(remainingBalance)} due
                  at check-in.
                </div>

                <button
                  type="submit"
                  disabled={paymentProcessing}
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    padding: "15px",
                    background: paymentProcessing
                      ? "var(--border-color)"
                      : "var(--accent)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "9px",
                    cursor: paymentProcessing
                      ? "not-allowed"
                      : "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {paymentProcessing
                    ? "Processing Deposit..."
                    : `Pay ${formatAmount(depositAmount)} Deposit`}
                </button>

                <button
                  type="button"
                  disabled={paymentProcessing}
                  onClick={() => setShowPaymentModal(false)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "12px",
                    background: "transparent",
                    color: "var(--text-secondary)",
                    border: "none",
                    cursor: paymentProcessing
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  Cancel
                </button>

              </form>
            )}

          </div>
        </div>
      )}
    </main>
  );
};

export default Bookings;