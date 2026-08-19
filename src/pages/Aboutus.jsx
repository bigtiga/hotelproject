import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        paddingTop: isMobile ? "60px" : "70px",
        overflowX: "hidden",
      }}
    >
      {/* =====================================================
          FULL WIDTH HERO
      ===================================================== */}

<section
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: isMobile
      ? "55px 20px 50px"
      : "90px 6vw 85px",
    borderBottom: "1px solid var(--border-color)",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1600px",
      margin: "0 auto",
      boxSizing: "border-box",
      paddingLeft: isMobile ? "10px" : "70px",
      paddingRight: isMobile ? "10px" : "70px",
    }}
  >
    {/* EYEBROW */}

    <div
      style={{
        color: "var(--accent)",
        fontSize: isMobile ? "10px" : "12px",
        fontWeight: 600,
        letterSpacing: isMobile ? "2px" : "3px",
        textTransform: "uppercase",
        marginBottom: isMobile ? "14px" : "16px",
      }}
    >
      About Waje Hotel
    </div>

    {/* TITLE */}

    <h1
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: isMobile
          ? "clamp(38px, 11vw, 48px)"
          : "clamp(48px, 6vw, 76px)",
        fontWeight: 400,
        lineHeight: 1.05,
        letterSpacing: isMobile ? "-1px" : "-2px",
        margin: 0,
        padding: 0,
        width: "100%",
        maxWidth: "1150px",
        color: "var(--text-primary)",
        overflowWrap: "break-word",
      }}
    >
      A place to stay,
      <br />
      a place to{" "}
      <span
        style={{
          color: "var(--accent)",
          fontStyle: "italic",
        }}
      >
        feel at home.
      </span>
    </h1>

    {/* INTRO */}

    <p
      style={{
        width: "100%",
        maxWidth: isMobile ? "100%" : "1050px",
        marginTop: isMobile ? "22px" : "28px",
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        color: "var(--text-secondary)",
        fontSize: isMobile ? "15px" : "18px",
        lineHeight: isMobile ? 1.8 : 1.9,
        boxSizing: "border-box",
      }}
    >
      Since 2015, Waje Hotel has been creating a welcoming place
      for guests to rest, reconnect, and experience genuine
      hospitality. What began as a vision to provide comfortable
      accommodation and thoughtful service has grown into a hotel
      built around the people who walk through our doors.
    </p>
  </div>
</section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: isMobile
            ? "55px 20px 70px"
            : "85px 24px 110px",
          boxSizing: "border-box",
        }}
      >
        {/* =====================================================
            OUR STORY
        ===================================================== */}

        <section
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              color: "var(--accent)",
              fontSize: isMobile ? "10px" : "11px",
              fontWeight: 600,
              letterSpacing: isMobile ? "2px" : "2.5px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Our Story
          </div>

          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: isMobile
                ? "32px"
                : "clamp(32px, 4vw, 46px)",
              fontWeight: 400,
              lineHeight: 1.2,
              margin: "0 0 25px",
              color: "var(--text-primary)",
            }}
          >
            Built with hospitality at heart.
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: isMobile ? "14px" : "15px",
              lineHeight: 1.95,
              marginBottom: "20px",
            }}
          >
            Waje Hotel began its journey in 2015 with a simple idea:
            create a place where guests could enjoy more than just a
            room for the night. We wanted to build an environment where
            people could arrive, settle in, and feel genuinely looked
            after.
          </p>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: isMobile ? "14px" : "15px",
              lineHeight: 1.95,
              marginBottom: "20px",
            }}
          >
            Over the years, the hotel has continued to operate and grow,
            welcoming travellers, families, business guests, and visitors
            looking for a comfortable place to call home while away
            from theirs.
          </p>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: isMobile ? "14px" : "15px",
              lineHeight: 1.95,
              marginBottom: "20px",
            }}
          >
            Our experience has taught us that good hospitality is found
            in the details. It is a clean and comfortable room waiting
            after a long journey. It is a warm welcome at reception. It
            is having someone available when you need assistance and
            giving you the space and privacy you deserve when you don't.
          </p>

          {/* HIGHLIGHT */}

          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              margin: isMobile ? "35px 0" : "45px 0",
              padding: isMobile ? "22px" : "32px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "var(--text-primary)",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: isMobile ? "17px" : "21px",
                lineHeight: 1.65,
              }}
            >
              "Our goal has always been simple: make every guest feel
              welcomed, comfortable, and confident that they chose the
              right place to stay."
            </p>
          </div>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: isMobile ? "14px" : "15px",
              lineHeight: 1.95,
              marginBottom: "20px",
            }}
          >
            Today, Waje Hotel continues to build on that original
            philosophy. While hospitality continues to evolve, our
            commitment remains the same — comfortable accommodation,
            attentive service, and an experience that makes your stay
            feel effortless.
          </p>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: isMobile ? "14px" : "15px",
              lineHeight: 1.95,
              marginBottom: 0,
            }}
          >
            Whether you're staying for one night, a weekend, a business
            trip, or a longer visit, we believe your hotel should be more
            than somewhere you sleep. It should be somewhere you can
            relax, recharge, and feel at ease.
          </p>
        </section>

        {/* =====================================================
            VALUES
        ===================================================== */}

        <section
          style={{
            marginTop: isMobile ? "60px" : "85px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "var(--accent)",
              fontSize: isMobile ? "10px" : "11px",
              fontWeight: 600,
              letterSpacing: isMobile ? "2px" : "2.5px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            What We Believe
          </div>

          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: isMobile
                ? "32px"
                : "clamp(32px, 4vw, 46px)",
              fontWeight: 400,
              lineHeight: 1.2,
              margin: "0 0 30px",
              color: "var(--text-primary)",
            }}
          >
            The experience behind the stay.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3, 1fr)",
              gap: "18px",
              width: "100%",
            }}
          >
            {/* VALUE 1 */}

            <div
              style={{
                padding: isMobile ? "24px" : "28px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "25px",
                  marginBottom: "16px",
                }}
              >
                01
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "10px",
                  color: "var(--text-primary)",
                }}
              >
                Genuine Hospitality
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Every guest deserves to feel welcomed and respected.
                We focus on friendly, attentive service from arrival
                through departure.
              </p>
            </div>

            {/* VALUE 2 */}

            <div
              style={{
                padding: isMobile ? "24px" : "28px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "25px",
                  marginBottom: "16px",
                }}
              >
                02
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "10px",
                  color: "var(--text-primary)",
                }}
              >
                Comfort First
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                A great stay starts with a comfortable environment.
                We aim to make every room and every part of your stay
                feel easy and relaxing.
              </p>
            </div>

            {/* VALUE 3 */}

            <div
              style={{
                padding: isMobile ? "24px" : "28px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "25px",
                  marginBottom: "16px",
                }}
              >
                03
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "10px",
                  color: "var(--text-primary)",
                }}
              >
                Service That Matters
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                From simple requests to important details, we believe
                good service means paying attention and being there when
                our guests need us.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLOSING CTA
        ===================================================== */}

        <section
          style={{
            marginTop: isMobile ? "60px" : "80px",
            padding: isMobile ? "35px 22px" : "50px 35px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "14px",
            textAlign: "center",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: isMobile
                ? "30px"
                : "clamp(30px, 4vw, 42px)",
              fontWeight: 400,
              margin: "0 0 14px",
              color: "var(--text-primary)",
            }}
          >
            Your next stay starts here.
          </h2>

          <p
            style={{
              width: "100%",
              maxWidth: "620px",
              margin: "0 auto 28px",
              color: "var(--text-secondary)",
              fontSize: isMobile ? "13px" : "14px",
              lineHeight: 1.8,
            }}
          >
            Discover our rooms, choose the stay that suits you, and
            reserve your place at Waje Hotel.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "12px",
              flexDirection: isMobile ? "column" : "row",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <Link
              to="/rooms"
              style={{
                display: "inline-block",
                padding: "13px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                background: "var(--accent)",
                color: "#ffffff",
                transition: "all 0.25s ease",
                width: isMobile ? "100%" : "auto",
                boxSizing: "border-box",
              }}
            >
              Explore Our Rooms
            </Link>

            <Link
              to="/bookings"
              style={{
                display: "inline-block",
                padding: "13px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                background: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                transition: "all 0.25s ease",
                width: isMobile ? "100%" : "auto",
                boxSizing: "border-box",
              }}
            >
              Book Your Stay
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;