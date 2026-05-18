function Navbar({ title, buttonText, onRegisterClick, onLogout }){
    return(
        <div style = {{
            backgroundColor: "#362304",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h1 style={{ color: "#ffb852", cursor: "pointer"}}>{title}</h1>
            <div style={{display: "flex", gap: "10px"}}>
                <button onClick={onRegisterClick}
                style={{
                    backgroundColor: "#ffb852",
                    color: "#362304",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
                >
                    {buttonText}
                </button>

                <button onClick={onLogout}
                style={{
                    backgroundColor: "transparent",
                    color: "#ffb852",
                    border: "1px solid #ffb852",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar