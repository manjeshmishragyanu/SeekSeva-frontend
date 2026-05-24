import { useState } from "react";

function Login({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [form, setForm] = useState({ name: "", password: "", mail: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (!form.name || !form.password) {
      setError("Please fill name and password")
      return
    }
    setLoading(true)
    setError("")

    const url = isSignUp
      ? "https://seekseva-backend.onrender.com/sign-up"
      : "https://seekseva-backend.onrender.com/sign-in"

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        if (data.token) {
          localStorage.setItem("token", data.token)
          onLogin()
        } else {
          setError(data.msg)
        }
      })
      .catch(() => {
        setLoading(false)
        setError("Something went wrong. Please try again.")
      })
  }

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    marginBottom: "16px",
    borderRadius: "12px",
    border: "1.5px solid #e8d5b0",
    fontSize: "15px",
    boxSizing: "border-box",
    backgroundColor: "#fdf6ec",
    color: "#362304",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "Georgia, serif"
  }

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#fdf6ec",
      display: "flex",
      fontFamily: "Georgia, serif"
    }}>

      {/* Left Panel — decorative */}
      <div style={{
        flex: 1,
        background: "linear-gradient(135deg, #362304 0%, #6b4513 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        position: "relative",
        overflow: "hidden"
      }}
        className="login-left-panel"
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "250px", height: "250px", borderRadius: "50%",
          backgroundColor: "rgba(255,184,82,0.1)"
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: "350px", height: "350px", borderRadius: "50%",
          backgroundColor: "rgba(255,184,82,0.07)"
        }} />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>🔧</div>
          <h1 style={{ color: "#ffb852", fontSize: "36px", marginBottom: "16px" }}>
            SeekSeva
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: "1.8", maxWidth: "300px" }}>
            Find trusted plumbers, electricians, barbers and more in your city.
          </p>

          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { icon: "✅", text: "Verified local workers" },
              { icon: "📞", text: "Direct contact — no middleman" },
              { icon: "⭐", text: "Rated by real customers" },
            ].map(item => (
              <div key={item.text} style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px"
              }}>
                <span style={{ fontSize: "20px" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel — form */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px"
      }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>

          <h2 style={{ color: "#362304", fontSize: "28px", marginBottom: "8px" }}>
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p style={{ color: "#8b6914", fontSize: "15px", marginBottom: "32px" }}>
            {isSignUp ? "Join SeekSeva today — it's free" : "Sign in to find workers near you"}
          </p>

          <input
            style={inputStyle}
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            onFocus={e => e.target.style.borderColor = "#ffb852"}
            onBlur={e => e.target.style.borderColor = "#e8d5b0"}
          />

          {isSignUp && (
            <input
              style={inputStyle}
              name="mail"
              placeholder="Email address"
              value={form.mail}
              onChange={handleChange}
              onFocus={e => e.target.style.borderColor = "#ffb852"}
              onBlur={e => e.target.style.borderColor = "#e8d5b0"}
            />
          )}

          <input
            style={inputStyle}
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            onFocus={e => e.target.style.borderColor = "#ffb852"}
            onBlur={e => e.target.style.borderColor = "#e8d5b0"}
          />

          {error && (
            <div style={{
              backgroundColor: "#fff0f0",
              border: "1px solid #ffcccc",
              borderRadius: "10px",
              padding: "12px 16px",
              color: "#cc0000",
              fontSize: "14px",
              marginBottom: "16px"
            }}>
              ⚠️ {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "16px",
              backgroundColor: "#362304",
              color: "#ffb852",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              marginBottom: "16px",
              opacity: loading ? 0.8 : 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 16px rgba(54,35,4,0.2)"
            }}
            onMouseOver={e => !loading && (e.target.style.transform = "translateY(-2px)")}
            onMouseOut={e => e.target.style.transform = "translateY(0)"}
          >
            {loading
              ? "⏳ Please wait..."
              : isSignUp
                ? "Create Account →"
                : "Sign In →"}
          </button>

          <div style={{
            textAlign: "center",
            color: "#8b6914",
            fontSize: "14px",
            cursor: "pointer"
          }}
            onClick={() => { setIsSignUp(!isSignUp); setError("") }}
          >
            {isSignUp
              ? "Already have an account? "
              : "New to SeekSeva? "}
            <span style={{ color: "#362304", fontWeight: "bold", textDecoration: "underline" }}>
              {isSignUp ? "Sign In" : "Create Account"}
            </span>
          </div>
        </div>
      </div>

      {/* Hide left panel on small screens */}
      <style>{`
        @media (max-width: 768px) {
          .login-left-panel { display: none !important; }
        }
      `}</style>
    </div>
  )
}

export default Login
