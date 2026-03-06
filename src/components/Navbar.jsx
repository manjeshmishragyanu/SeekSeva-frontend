function Navbar({ title, buttonText, onRegisterClick }){
    return(
        <div style = {{
            backgroundColor: "#362304",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h1 style={{ color: "#ffb852", cursor: "pointer"}}>{title}</h1>
            <button onClick={onRegisterClick} 
            style={{
                backgroundColor: "white",
                color: "#362304",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
            }}
            >{buttonText}</button>
        </div>
    )
}

export default Navbar