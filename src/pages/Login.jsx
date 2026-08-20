import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    // Temporary front-end login.
    // Firebase authentication can be connected later.
    setTimeout(() => {
      setLoading(false);
      setMessage("Demo login successful. Welcome back!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 700);
  };

  const handleForgotPassword = () => {
    if (!form.email) {
      setError("Enter your email address first.");
      return;
    }

    setError("");
    setMessage(
      "Password reset is currently unavailable. Please contact the hotel."
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              color: "var(--accent)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Welcome Back
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(38px, 7vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Log in to{" "}
            <span
              style={{
                color: "var(--accent)",
                fontStyle: "italic",
              }}
            >
              Portal.
            </span>
          </h1>

          <p
            style={{
              margin: "16px 0 0",
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            Sign in to manage your bookings and continue planning
            your stay.
          </p>
        </div>

        <div
          style={{
            padding: "30px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "14px",
            boxShadow: "var(--shadow)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  outline: "none",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  outline: "none",
                  fontSize: "14px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "22px",
              }}
            >
              <button
                type="button"
                onClick={handleForgotPassword}
                style={{
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  color: "var(--accent)",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <div
                style={{
                  marginBottom: "18px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "rgba(220, 70, 70, 0.08)",
                  border: "1px solid rgba(220, 70, 70, 0.2)",
                  color: "#d66",
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                {error}
              </div>
            )}

            {message && (
              <div
                style={{
                  marginBottom: "18px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "rgba(76, 175, 80, 0.08)",
                  border: "1px solid rgba(76, 175, 80, 0.2)",
                  color: "#69b86d",
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid var(--accent)",
                background: loading
                  ? "var(--border-color)"
                  : "var(--accent)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div
            style={{
              marginTop: "25px",
              paddingTop: "22px",
              borderTop: "1px solid var(--border-color)",
              textAlign: "center",
              color: "var(--text-secondary)",
              fontSize: "13px",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Create one
            </Link>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            ← Back to Waje Hotel
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;