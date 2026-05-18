import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WorkerCard from "./components/WorkerCard";
import WorkerProfile from "./components/WorkerProfile";
import RegisterWorker from "./components/RegisterWorker";
import Login from "./components/Login";


function App(){

const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("token") ? true : false
)


const [loading, setLoading] = useState(true)

const [workers, setWorkers] = useState([])

useEffect(() =>{
  if(!isLoggedIn) return
  fetch("https://seekseva-backend.onrender.com", {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => res.json())
  .then(data =>
    {
     setWorkers(data)
     setLoading(false)
})
}, [isLoggedIn] )

const [searchQuery, setSearchQuery] = useState("");

const filteredWorkers = Array.isArray(workers) ? workers.filter(function(worker){
  return(
  worker.profession.toLowerCase().includes(searchQuery.toLowerCase()) || worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||worker.location.toLowerCase().includes(searchQuery.toLowerCase())
  )
}) : []


  const [currentPage, setCurrentPage] = useState("home");
  const [selectedWorker, setSelectedWorker] = useState(null);

  function handleRegister(newWorker){
   fetch("https://seekseva-backend.onrender.com/worker/register", {
    method: "POST",
    headers:{
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



  
  function handleWorkerClick(worker){
    setSelectedWorker(worker)
    setCurrentPage("profile")
  }

  if(!isLoggedIn){
    return <Login onLogin={() => setIsLoggedIn(true)}/>
  }



return (
    <div style={{minHeight: "100vh", backgroundColor: "#fdf6ec"}}>
      <Navbar title = "SeekSeva" buttonText = "Register as Worker" onRegisterClick={() => setCurrentPage("register")}
      onLogout = {() => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
      }} 
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px"}}>


      {currentPage === "home" && (
  <div>
    <div style={{ textAlign: "center", padding: "40px 20px", marginBottom: "20px" }}>
      <h1 style={{ fontSize: "32px", color: "#362304", marginBottom: "10px" }}>
        Find Trusted Workers 🔧
      </h1>
      <p style={{ color: "#8b6914", fontSize: "16px" }}>
        Plumbers, Electricians, Barbers and more near you
      </p>
    </div>

    {loading ? (
      <p style={{ textAlign: "center", color: "#8b6914", padding: "40px" }}>
        Loading workers...
      </p>
    ) : (
      <div>
        <input
          type="text"
          placeholder="Search plumber, barber, electrician..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "1px solid #e8d5b0",
            marginBottom: "10px",
            boxSizing: "border-box",
            backgroundColor: "#fffaf3",
            color: "#362304",
            outline: "none"
          }}
        />

        <p style={{ color: "#8b6914", marginBottom: "15px" }}>
          {filteredWorkers.length} workers found
        </p>

        {filteredWorkers.length === 0 && (
          <p style={{ textAlign: "center", color: "#8b6914", padding: "40px" }}>
            No workers found. Try a different search.
          </p>
        )}

        {filteredWorkers.map(function(worker) {
          return (
            <WorkerCard
              key={worker._id}
              worker={worker}
              onClick={handleWorkerClick}
            />
          )
        })}
      </div>
    )}
  </div>
)}
      
      {currentPage == "profile" && (< WorkerProfile
      worker = {selectedWorker}
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

)}
    
  


export default App