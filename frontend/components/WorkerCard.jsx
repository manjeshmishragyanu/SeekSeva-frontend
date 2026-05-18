function WorkerCard({ worker, onClick}){
    return (
        <div
        
            onClick={() => onClick(worker)}
            style = {{
                backgroundColor: "#fffaf3",
                border: "1px solid #e8d5b0",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
            >
            <img src={worker.photo}
            alt={worker.name}
            style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%"
            }}
            />
            <div>
                <h2 style={{ margin: "0 0 5px 0"}}>
                    {worker.name}
                </h2>
                <p style={{ margin: "0 0 5px 0", color:"#362304", fontWeight: "bold"}}>
                    {worker.profession}
                </p>
                <p style={{margin: "0 0 5px 0", color: "gray"}}>
                    📍{worker.location}
                </p>
                <p>
                    ⭐️{worker.rating} • {worker.experience}  
                </p>
            </div>
            {worker.verified && (
                <div style={{marginLeft: "auto"}}>
                    <span style={{
                        backgroundColor: "#fff4d6",
                        color: "#362304",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "12px"
                    }}>
                    ✅Verified
                    </span>
                </div>
            )}


        </div>
    )
}

export default WorkerCard