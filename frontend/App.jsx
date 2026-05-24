import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WorkerCard from "./components/WorkerCard";
import WorkerProfile from "./components/WorkerProfile";
import RegisterWorker from "./components/RegisterWorker";
import Login from "./components/Login";
import Landing from "./components/Landing";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  )
  const [showLanding, setShowLanding] = useState(
    localStorage.getItem("token") ? false : true
  )
  const [loading, setLoading] = useState(true)
  const [workers, setWorkers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedWorker, setSelectedWorker] = useState(null)

  useEffect(() => {
    if (!isLoggedIn) return
    fetch("https://seekseva-backend.onrender.com/worker", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        setWorkers(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [isLoggedIn])

  const filteredWorkers = Array.isArray(workers) ? workers.filter(function (worker) {
    return (
      worker.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }) : []

  function handleRegister(newWorker) {
    fetch("https://seekseva-backend.onrender.com/worker/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(newWorker)
    })
      .then(res => res.json())
      .then(data => {
        setWorkers([...workers, data.msg])
        setCurrentPage("home")
      })
  }

  function handleWorkerClick(worker) {
    setSelectedWorker(worker)
    setCurrentPage("profile")
  }

  // Show Landing page first
  if (showLanding) {
    return <Landing onGetStarted={() => setShowLanding(false)} />
  }

  // Show Login if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fdf6ec", fontFamily: "Georgia, serif" }}>
      <Navbar
        title="SeekSeva"
        buttonText="Register as Worker"
        onRegisterClick={() => setCurrentPage("register")}
        onLogout={() => {
          localStorage.removeItem("token")
          setIsLoggedIn(false)
          setShowLanding(true)
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>

        {currentPage === "home" && (
          <div>
            {/* Hero text */}
            <div style={{ textAlign: "center", padding: "40px 20px 30px" }}>
              <h1 style={{ fontSize: "32px", color: "#362304", marginBottom: "8px" }}>
                Find Trusted Workers 🔧
              </h1>
              <p style={{ color: "#8b6914", fontSize: "16px" }}>
                Plumbers, Electricians, Barbers and more near you
              </p>
            </div>

            {/* Search Bar */}
            <div style={{ position: "relative", marginBottom: "12px" }}>
              <span style={{
                position: "absolute", left: "18px", top: "50%",
                transform: "translateY(-50%)", fontSize: "18px"
              }}>🔍</span>
              <input
                type="text"
                placeholder="Search plumber, barber, electrician..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 16px 16px 48px",
                  fontSize: "16px",
                  borderRadius: "12px",
                  border: "1.5px solid #e8d5b0",
                  boxSizing: "border-box",
                  backgroundColor: "#fffaf3",
                  color: "#362304",
                  outline: "none",
                  fontFamily: "Georgia, serif",
                  boxShadow: "0 2px 8px rgba(54,35,4,0.06)"
                }}
              />
            </div>

            {/* Results count */}
            <p style={{ color: "#8b6914", marginBottom: "16px", fontSize: "14px" }}>
              {loading ? "Loading..." : `${filteredWorkers.length} workers found`}
            </p>

            {/* Loading state */}
            {loading ? (
              <div style={{ textAlign: "center", padding: "60px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>⚙️</div>
                <p style={{ color: "#8b6914", fontSize: "16px" }}>Finding workers near you...</p>
              </div>
            ) : filteredWorkers.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
                <p style={{ color: "#8b6914", fontSize: "16px" }}>
                  No workers found. Try a different search.
                </p>
              </div>
            ) : (
              filteredWorkers.map(function (worker) {
                return (
                  <WorkerCard
                    key={worker._id}
                    worker={worker}
                    onClick={handleWorkerClick}
                  />
                )
              })
            )}
          </div>
        )}

        {currentPage === "profile" && (
          <WorkerProfile
            worker={selectedWorker}
            onBack={() => setCurrentPage("home")}
          />
        )}

        {currentPage === "register" && (
          <RegisterWorker
            onRegister={handleRegister}
            onBack={() => setCurrentPage("home")}
          />
        )}

      </div>
    </div>
  )
}

export default App
