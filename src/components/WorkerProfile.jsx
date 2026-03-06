function WorkerProfile({ worker, onBack }){
    return(
        <div style={{
            backgroundColor: "#fffaf3",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <button
            onClick={onBack}
            style={{
                backgroundColor: "none",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                color: "#362304",
                marginBottom: "20px"
            }}
            >
                ← Back to Search
            </button>
            <div style={{ textAlign: "center" , marginBottom: "20px" }}>
                <img 
                src={worker.photo}
                alt={worker.name}
                style={{
                    width: "120px",
                    height: "120px",
                    borderRadius : "50p%"
                }}
                />
                <h1 style={{ margin: "10px 0 5px 0"}}>
                    {worker.name}
                </h1>
                <p style={{
                    color: "#362304",
                    fontWeight: "bold",
                    fontSize: "18px"
                }}>
                    {worker.profession}
                </p>
                {worker.verified && (
                    <span style={{
                        backgroundColor: "#fff4d6",
                        color: "362304",
                        padding: "5px 15px",
                        borderRadius: "20px"
                    }}>
                        ✅ Verified Worker
                    </span>
                )}
            </div>

            <div style={{ borderTop: "1px solid #eee", paddingTop: "20px"}}>
                <p>📍 <strong>Location:</strong>{worker.location}</p>
                <p>💼<strong>Experience:</strong>{worker.experience}</p>
                <p>⭐️<strong>Rating:</strong>{worker.rating} / 5</p>
                <p>📞<strong>Phone:</strong>{worker.phone}</p>
            </div>

           <a  href ={`tel:${worker.phone}`}
            style = {{
                display: "block",
                textAlign: "center",
                backgroundColor: "#362304",
                color: "white",
                padding: "15px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "20px"
            }}
            >
                📞 Call Now 
            </a>

            <a  href={`https://wa.me/${worker.phone}`}
        target="_blank"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "#16a34a",
          color: "white",
          padding: "15px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
          marginTop: "10px"
        }}
      >
        💬 WhatsApp
      </a>
        </div>
    )
}

export default WorkerProfile