import { useState } from "react";
import Navbar from "./components/Navbar";
import WorkerCard from "./components/WorkerCard";
import WorkerProfile from "./components/WorkerProfile";
import RegisterWorker from "./components/RegisterWorker";


function App(){

  
  
const [workers, setWorkers] = useState([
  {
    id: 1,
    name: "Rahul kumar",
    profession: "Plumber",
    phone: "9837640322",
    location: "Pune, Maharastra",
    photo: "https://i.pravatar.cc/150?img=1",
    verified: true,
    experience: "5 years",
    rating: 4.5
  },
  {
    id: 2,
    name: "Suresh Sharma",
    profession: "Electrician",
    phone: "9837374738",
    location: "Patna, Bihar",
    photo: "https://i.pravatar.cc/150?img=2",
    verified: true,
    experience: "8 years",
    rating: 4.7
  },
  {
    id: 3,
    name: "Anil Barber",
    profession: "Barber",
    phone: "9812345670",
    location: "Pune, Maharashtra",
    photo: "https://i.pravatar.cc/150?img=3",
    verified: false,
    experience: "3 years",
    rating: 4.2
  }
])

const [searchQuery, setSearchQuery] = useState("");

const filteredWorkers = workers.filter(function(worker){
  return(
  worker.profession.toLowerCase().includes(searchQuery.toLowerCase()) || worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||worker.location.toLowerCase().includes(searchQuery.toLowerCase())
  )
})


  const [currentPage, setCurrentPage] = useState("home");
  const [selectedWorker, setSelectedWorker] = useState(null);

  function handleRegister(newWorker){
   setWorkers([...workers, {
    ...newWorker,
    id: workers.length + 1,
    rating: 0,
    verified: false
   }])
   setCurrentPage("home")
  }

  function handleWorkerClick(worker){
    setSelectedWorker(worker)
    setCurrentPage("profile")
  }

  return (
    <div style={{minHeight: "100vh", backgroundColor: "#fdf6ec"}}>
      <Navbar title = "SeekSeva" buttonText = "Register as Worker" onRegisterClick={() => setCurrentPage("register")} 
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px"}}>


      {currentPage === "home" && (
  <div>
    <div style={{
      textAlign: "center",
      padding: "40px 20px",
      marginBottom: "20px"
    }}>
      <h1 style={{
        fontSize: "32px",
        color: "#362304",
        marginBottom: "10px"
      }}>
        Find Trusted Workers 🔧
      </h1>
      <p style={{
        color: "#8b6914",
        fontSize: "16px"
      }}>
        Plumbers, Electricians, Barbers and more near you
      </p>
    </div>


   

{/* search input */}
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
      color: "362304",
      ouyline: "none"
    }}
    />

    <p style={{ color: "#8b6914", marginBottom: "15px"}}>
      {filteredWorkers.length} workers found
    </p>

    {filteredWorkers.length === 0 && (
      <p style={{ textAlign: "center", color: "#8b6914", padding: "40px"}}>No workers found. Try a different search.</p>
    )}

    {filteredWorkers.map(function(worker) {
                return (
                  <WorkerCard 
                  key = {worker.id}
                  worker ={worker}
                  onClick={handleWorkerClick}
                  />
                )
              })}
            </div>
          )
        }
      </div>
      
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
  )
}

export default App