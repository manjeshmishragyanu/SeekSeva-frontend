function WorkerCard({ worker, onClick }) {
    const professionColors = {
      "Plumber": { bg: "#e8f4fd", color: "#1a6fa8" },
      "Electrician": { bg: "#fff8e1", color: "#f57f17" },
      "Barber": { bg: "#f3e5f5", color: "#7b1fa2" },
      "Carpenter": { bg: "#e8f5e9", color: "#2e7d32" },
      "Painter": { bg: "#fce4ec", color: "#c62828" },
      "Priest": { bg: "#fff3e0", color: "#e65100" },
      "Cleaner": { bg: "#e0f7fa", color: "#00838f" },
      "AC Repair": { bg: "#e8eaf6", color: "#283593" },
    }
  
    const profColor = professionColors[worker.profession] || { bg: "#f5f0e8", color: "#362304" }
  
    const stars = []
    const rating = worker.rating || 0
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= Math.round(rating) ? "#ffb852" : "#ddd", fontSize: "14px" }}>
          ★
        </span>
      )
    }
  
    return (
      <div
        onClick={() => onClick(worker)}
        style={{
          backgroundColor: "#fffaf3",
          borderRadius: "16px",
          padding: "20px 24px",
          marginBottom: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          border: "1.5px solid #e8d5b0",
          boxShadow: "0 2px 8px rgba(54,35,4,0.06)",
          transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
          fontFamily: "Georgia, serif"
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = "translateY(-3px)"
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(54,35,4,0.12)"
          e.currentTarget.style.borderColor = "#ffb852"
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(54,35,4,0.06)"
          e.currentTarget.style.borderColor = "#e8d5b0"
        }}
      >
        {/* Photo */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <img
            src={worker.photo || "https://i.pravatar.cc/150?img=8"}
            alt={worker.name}
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #ffb852"
            }}
          />
          {worker.verified && (
            <div style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              backgroundColor: "#16a34a",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              border: "2px solid white"
            }}>
              ✓
            </div>
          )}
        </div>
  
        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
            <h2 style={{ margin: 0, color: "#1a0f00", fontSize: "17px", fontWeight: "bold" }}>
              {worker.name}
            </h2>
            <span style={{
              backgroundColor: profColor.bg,
              color: profColor.color,
              padding: "3px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              whiteSpace: "nowrap"
            }}>
              {worker.profession}
            </span>
          </div>
  
          <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
            {stars}
            {rating > 0 && (
              <span style={{ color: "#8b6914", fontSize: "13px", marginLeft: "4px" }}>
                {rating.toFixed(1)}
              </span>
            )}
          </div>
  
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ color: "#8b6914", fontSize: "13px" }}>
              📍 {worker.location || "Location not set"}
            </span>
            <span style={{ color: "#8b6914", fontSize: "13px" }}>
              💼 {worker.experience || "Experience not set"}
            </span>
          </div>
        </div>
  
        {/* Right side */}
        <div style={{ flexShrink: 0, textAlign: "right" }}>
          {worker.verified && (
            <div style={{
              backgroundColor: "#dcfce7",
              color: "#16a34a",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              marginBottom: "8px",
              whiteSpace: "nowrap"
            }}>
              ✅ Verified
            </div>
          )}
          <div style={{
            color: "#362304",
            fontSize: "13px",
            fontWeight: "bold",
            opacity: 0.6
          }}>
            Tap to view →
          </div>
        </div>
      </div>
    )
  }
  
  export default WorkerCard
  