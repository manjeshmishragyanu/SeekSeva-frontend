// Landing.jsx - Place in src/components/Landing.jsx

function Landing({ onGetStarted }) {
    const categories = [
      { icon: "🔧", label: "Plumber" },
      { icon: "⚡", label: "Electrician" },
      { icon: "✂️", label: "Barber" },
      { icon: "🛕", label: "Priest" },
      { icon: "🔨", label: "Carpenter" },
      { icon: "🧹", label: "Cleaner" },
      { icon: "🎨", label: "Painter" },
      { icon: "❄️", label: "AC Repair" },
    ]
  
    const steps = [
      { number: "01", title: "Search", desc: "Type any service you need — plumber, barber, electrician" },
      { number: "02", title: "Browse", desc: "See verified profiles with ratings, experience and location" },
      { number: "03", title: "Contact", desc: "Call or WhatsApp the worker directly. No middleman." },
    ]
  
    return (
      <div style={{ fontFamily: "'Georgia', serif", backgroundColor: "#fdf6ec", minHeight: "100vh" }}>
  
        {/* Navbar */}
        <div style={{
          backgroundColor: "#362304",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 20px rgba(54,35,4,0.3)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>🔧</span>
            <span style={{ color: "#ffb852", fontSize: "22px", fontWeight: "bold", letterSpacing: "1px" }}>
              SeekSeva
            </span>
          </div>
          <button
            onClick={onGetStarted}
            style={{
              backgroundColor: "#ffb852",
              color: "#362304",
              border: "none",
              padding: "10px 24px",
              borderRadius: "25px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={e => e.target.style.transform = "scale(1.05)"}
            onMouseOut={e => e.target.style.transform = "scale(1)"}
          >
            Sign In / Sign Up
          </button>
        </div>
  
        {/* Hero Section */}
        <div style={{
          background: "linear-gradient(135deg, #362304 0%, #6b4513 50%, #362304 100%)",
          padding: "80px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Background decoration */}
          <div style={{
            position: "absolute", top: "-50px", right: "-50px",
            width: "300px", height: "300px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,184,82,0.1)"
          }} />
          <div style={{
            position: "absolute", bottom: "-80px", left: "-80px",
            width: "400px", height: "400px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,184,82,0.05)"
          }} />
  
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-block",
              backgroundColor: "rgba(255,184,82,0.15)",
              border: "1px solid rgba(255,184,82,0.3)",
              borderRadius: "25px",
              padding: "6px 18px",
              color: "#ffb852",
              fontSize: "13px",
              marginBottom: "24px",
              letterSpacing: "1px"
            }}>
              🇮🇳 TRUSTED ACROSS INDIA
            </div>
  
            <h1 style={{
              color: "white",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "20px",
              maxWidth: "700px",
              margin: "0 auto 20px"
            }}>
              Find Trusted Local Workers{" "}
              <span style={{ color: "#ffb852" }}>Near You</span>
            </h1>
  
            <p style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "18px",
              maxWidth: "500px",
              margin: "0 auto 40px",
              lineHeight: "1.6"
            }}>
              Just moved to a new city? Need a plumber, priest, or barber?
              SeekSeva connects you with verified local workers instantly.
            </p>
  
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={onGetStarted}
                style={{
                  backgroundColor: "#ffb852",
                  color: "#362304",
                  border: "none",
                  padding: "16px 36px",
                  borderRadius: "30px",
                  fontSize: "17px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 8px 30px rgba(255,184,82,0.4)",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
                onMouseOver={e => {
                  e.target.style.transform = "translateY(-3px)"
                  e.target.style.boxShadow = "0 12px 40px rgba(255,184,82,0.5)"
                }}
                onMouseOut={e => {
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "0 8px 30px rgba(255,184,82,0.4)"
                }}
              >
                Find a Worker →
              </button>
              <button
                onClick={onGetStarted}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.4)",
                  padding: "16px 36px",
                  borderRadius: "30px",
                  fontSize: "17px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "border-color 0.2s"
                }}
                onMouseOver={e => e.target.style.borderColor = "#ffb852"}
                onMouseOut={e => e.target.style.borderColor = "rgba(255,255,255,0.4)"}
              >
                Register as Worker
              </button>
            </div>
  
            {/* Stats */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              marginTop: "60px",
              flexWrap: "wrap"
            }}>
              {[
                { number: "500+", label: "Workers" },
                { number: "50+", label: "Services" },
                { number: "20+", label: "Cities" },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ color: "#ffb852", fontSize: "28px", fontWeight: "bold" }}>
                    {stat.number}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginTop: "4px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Categories Section */}
        <div style={{ padding: "60px 40px", maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            color: "#362304",
            fontSize: "28px",
            marginBottom: "8px"
          }}>
            Browse by Service
          </h2>
          <p style={{
            textAlign: "center",
            color: "#8b6914",
            marginBottom: "36px",
            fontSize: "15px"
          }}>
            From daily needs to special occasions — we have it all
          </p>
  
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px"
          }}>
            {categories.map(cat => (
              <div
                key={cat.label}
                onClick={onGetStarted}
                style={{
                  backgroundColor: "#fffaf3",
                  border: "1px solid #e8d5b0",
                  borderRadius: "16px",
                  padding: "24px 16px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(54,35,4,0.12)"
                  e.currentTarget.style.borderColor = "#ffb852"
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.borderColor = "#e8d5b0"
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "10px" }}>{cat.icon}</div>
                <div style={{ color: "#362304", fontWeight: "bold", fontSize: "15px" }}>{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
  
        {/* How It Works */}
        <div style={{
          backgroundColor: "#362304",
          padding: "60px 40px"
        }}>
          <h2 style={{
            textAlign: "center",
            color: "#ffb852",
            fontSize: "28px",
            marginBottom: "8px"
          }}>
            How SeekSeva Works
          </h2>
          <p style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "48px",
            fontSize: "15px"
          }}>
            Find and connect in 3 simple steps
          </p>
  
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            {steps.map(step => (
              <div
                key={step.number}
                style={{
                  backgroundColor: "rgba(255,184,82,0.08)",
                  border: "1px solid rgba(255,184,82,0.2)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  textAlign: "center"
                }}
              >
                <div style={{
                  color: "#ffb852",
                  fontSize: "42px",
                  fontWeight: "bold",
                  opacity: 0.4,
                  marginBottom: "12px",
                  fontFamily: "monospace"
                }}>
                  {step.number}
                </div>
                <h3 style={{ color: "white", fontSize: "20px", marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: "1.6" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {/* CTA Section */}
        <div style={{
          padding: "60px 40px",
          textAlign: "center",
          backgroundColor: "#fdf6ec"
        }}>
          <h2 style={{ color: "#362304", fontSize: "28px", marginBottom: "12px" }}>
            Are You a Skilled Worker?
          </h2>
          <p style={{ color: "#8b6914", fontSize: "16px", marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
            Create your free profile and start getting clients in your city today.
          </p>
          <button
            onClick={onGetStarted}
            style={{
              backgroundColor: "#362304",
              color: "#ffb852",
              border: "none",
              padding: "16px 40px",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(54,35,4,0.2)",
              transition: "transform 0.2s"
            }}
            onMouseOver={e => e.target.style.transform = "translateY(-3px)"}
            onMouseOut={e => e.target.style.transform = "translateY(0)"}
          >
            Join as Worker — It's Free
          </button>
        </div>
  
        {/* Footer */}
        <div style={{
          backgroundColor: "#1a0f00",
          padding: "24px 40px",
          textAlign: "center",
          color: "rgba(255,255,255,0.4)",
          fontSize: "13px"
        }}>
          🔧 SeekSeva — Connecting people with trusted local workers across India
        </div>
      </div>
    )
  }
  
  export default Landing
  